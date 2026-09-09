import Calendar from "../../calendar/Calendar.jsx";
import {Link, Outlet, useParams} from "react-router-dom";
import {useState} from "react";
import {editTask} from "../../../services/api.js";
import PopInput from "../PopInput.jsx";
import {ErrorMessage} from "../../Notification.styled.js";

const PopBrowse = ({tasks, updateTasks}) => {
    const { id } = useParams();
    const [error, setError] = useState("");
    const [editState, setEditState] = useState(false);

    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    const task = tasks.tasks.find(item => String(item._id) === id)

    const theme =
        task?.topic === "Web Design"
            ? "_orange"
            : task?.topic === "Research"
                ? "_green"
                : "_purple"

    const activeTheme = "categories__theme theme-top _active-category " + theme;

    const [editedTask, setEditedTask] = useState({
        status: task?.status,
        description: task?.description,
        date: task?.date,
    });

    const handleEditState = () => {
        setEditState(true);
    };

    const handleCancelEditState = () => {
        setEditedTask({
            status: task?.status,
            description: task?.description,
            date: task?.date,
        })
        setEditState(false);
    };

    const validateForm = () => {
        const newErrors = { title: "", description: "" };
        let isValid = true;

        if (!editedTask.description.trim()) {
            newErrors.description = true;
            setError("Заполните поле описание задачи");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmitEdit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        task.status = editedTask.status;
        task.description = editedTask.description;
        task.date = editedTask.date;

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        try {
            const data = await editTask({
                token: userInfo.token,
                id: id,
                task: JSON.stringify(task) })

            if (data)
                updateTasks();
        } catch (err) {
            setError(err.message);
        } finally {
            setEditState(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({
            ...editedTask,
            [name]: value,
        });
        setErrors({ ...errors, [name]: false });
        setError("");
    };

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{task?.title}</h3>
                            <div className={activeTheme}>
                                <p className={theme}>{task?.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme _gray">
                                    <p className="_gray">{editedTask?.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <PopInput
                                        tag="textarea"
                                        error={errors.description}
                                        type="text"
                                        name="description"
                                        id="textArea01"
                                        placeholder="Введите описание задачи..."
                                        defaultValue={task?.description}
                                        onChange={handleChange}
                                        readOnly={!editState} />
                                </div>
                            </form>
                            <Calendar />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        {
                            editState
                                ? <div className="pop-browse__btn-edit">
                                    <div className="btn-group">
                                        <button className="btn-edit__edit _btn-bg _hover01"
                                                onClick={handleSubmitEdit}>
                                            Сохранить
                                        </button>

                                        <button className="btn-edit__edit _btn-bor _hover03"
                                                onClick={handleCancelEditState}>
                                            Отменить
                                        </button>

                                        <Link to={"/card/" + id + "/delete"}>
                                            <button className="btn-edit__delete _btn-bor _hover03" >
                                                Удалить задачу
                                            </button>
                                        </Link>
                                    </div>
                                    <Link to={"/"}>
                                        <button className="btn-edit__close _btn-bg _hover01">
                                            Закрыть
                                        </button>
                                    </Link>
                                </div>
                                : <div className="pop-browse__btn-browse ">
                                    <div className="btn-group">
                                        <button className="btn-browse__edit _btn-bor _hover03"
                                                onClick={handleEditState}>
                                            Редактировать задачу
                                        </button>

                                        <Link to={"delete"}>
                                            <button className="btn-browse__delete _btn-bor _hover03">Удалить задачу</button>
                                        </Link>
                                    </div>
                                    <Link to={"/"}>
                                        <button className="btn-browse__close _btn-bg _hover01">Закрыть</button>
                                    </Link>
                                </div>
                        }
                        {
                            error
                                ? <ErrorMessage>{error}</ErrorMessage>
                                : null
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default PopBrowse;