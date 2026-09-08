import Calendar from "../../calendar/Calendar.jsx";
import {Link, useNavigate} from "react-router-dom";
import {postTask} from "../../../services/api.js";
import {useState} from "react";
import PopInput from "../PopInput.jsx";
import {ErrorMessage} from "../../Notification.styled.js";

const PopNewCard = ({updateTasks}) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [newTask, setNewTask] = useState({
        title: "",
        topic: "Web Design",
        status: "Без статуса",
        description: "",
        date: "2024-01-07T16:26:18.179Z"
    });

    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    const validateForm = () => {
        const newErrors = { title: "", description: "" };
        let isValid = true;

        if (!newTask.title.trim()) {
            newErrors.login = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!newTask.description.trim()) {
            newErrors.password = true;
            setError("Заполните все поля");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
        setErrors({ ...errors, [name]: false });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        try {
            const data = await postTask({ token: userInfo.token, task: JSON.stringify(newTask) })

            if (data)
                updateTasks();
                navigate("/");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        <Link className="pop-new-card__close" to={"/"}>&#10006;</Link>
                        <div className="pop-new-card__wrap">
                            <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                                <div className="form-new__block">
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <PopInput
                                        error={errors.title}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        value={newTask.title}
                                        onChange={handleChange}
                                        autoFocus />
                                </div>
                                <div className="form-new__block">
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <PopInput
                                        tag="textarea"
                                        error={errors.description}
                                        type="text"
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={newTask.description}
                                        onChange={handleChange} />
                                </div>
                            </form>
                            <Calendar />
                        </div>
                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div>
                        <button className="form-new__create _hover01"
                                id="btnCreate"
                                onClick={handleSubmit}>
                            Создать задачу
                        </button>
                        {
                            error
                                ? <ErrorMessage>{error}</ErrorMessage>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopNewCard;