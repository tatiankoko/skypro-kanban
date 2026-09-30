import CardCalendar from "../../calendar/Calendar.jsx";
import {Link, Outlet, useParams} from "react-router-dom";
import {useState} from "react";
import {editTask} from "../../../services/api.js";
import PopInput from "../PopInput.jsx";
import {ErrorMessage} from "../../Notification.styled.js";
import {category} from "../../../category.js";
import {status} from "../../../status.js";
import {
    BtnBor,
    BtnBg, BtnGroup,
    FormBrowseBlock,
    PopBrowseBlock, PopBrowseBtnEdit,
    PopBrowseContainer,
    PopBrowseContent, PopBrowseForm, PopBrowseStatus, PopBrowseStatusP, PopBrowseStatusThemes,
    PopBrowseStyled,
    PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrapper, PopBrowseBtnBrowse, PopBrowseStatusTheme
} from "./PopBrowse.styled.js";
import {CategoriesTheme, Subttl} from "../popNewCard/PopNewCard.styled.js";
import {themeBg, themeColor} from "../../card/Card.jsx";
import {useTheme} from "styled-components";

const PopBrowse = ({tasks, updateTasks}) => {
    const userTheme = useTheme();

    const { id } = useParams();
    const [error, setError] = useState("");
    const [editState, setEditState] = useState(false);

    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    const task = tasks.tasks.find(item => String(item._id) === id)

    const categoryKey = Object
        .entries(category)
        .find(([, category]) => (
            task?.topic === category
        ))?.[0];

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

    const handleToggle = (value) => {
        setEditedTask({
            ...editedTask,
            status: value,
        });
    };

    return (
        <PopBrowseStyled id="popBrowse">
            <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{task?.title}</PopBrowseTtl>
                            <CategoriesTheme
                                $active={true}
                                $bgColor={userTheme[themeBg(categoryKey)]}
                                $color={userTheme[themeColor(categoryKey)]}
                            >
                                <p>{task?.topic}</p>
                            </CategoriesTheme>
                        </PopBrowseTopBlock>
                        <PopBrowseStatus>
                            <PopBrowseStatusP>Статус</PopBrowseStatusP>
                            <PopBrowseStatusThemes>
                                {
                                    Object.entries(status).map(([key, taskStatus]) => (
                                        <PopBrowseStatusTheme
                                            $active={editedTask?.status === taskStatus}
                                            $readonly={!editState}
                                            key={key}
                                            onClick={() => editState ? handleToggle(taskStatus) : {}}
                                        >
                                            {taskStatus}
                                        </PopBrowseStatusTheme>
                                    ))
                                }
                            </PopBrowseStatusThemes>
                        </PopBrowseStatus>
                        <PopBrowseWrapper>
                            <PopBrowseForm id="formBrowseCard" action="#">
                                <FormBrowseBlock>
                                    <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                                    <PopInput
                                        tag="textarea"
                                        error={errors.description}
                                        type="text"
                                        name="description"
                                        id="textArea01"
                                        placeholder="Введите описание задачи..."
                                        value={editedTask?.description}
                                        onChange={handleChange}
                                        readOnly={!editState} />
                                </FormBrowseBlock>
                            </PopBrowseForm>
                            <CardCalendar initialDate={new Date(editedTask.date)}
                                          setDate={(value)=> editState
                                              ? setEditedTask(
                                                  {
                                                      ...editedTask,
                                                      date: value,
                                                  })
                                              : {} } />
                        </PopBrowseWrapper>
                        {
                            editState
                                ? <PopBrowseBtnEdit>
                                    <BtnGroup>
                                        <BtnBg onClick={handleSubmitEdit}>
                                            Сохранить
                                        </BtnBg>

                                        <BtnBg onClick={handleCancelEditState}>
                                            Отменить
                                        </BtnBg>

                                        <Link to={"/card/" + id + "/delete"}>
                                            <BtnBor>Удалить задачу</BtnBor>
                                        </Link>
                                    </BtnGroup>
                                    <Link to={"/"}>
                                        <BtnBg>Закрыть</BtnBg>
                                    </Link>
                                </PopBrowseBtnEdit>
                                : <PopBrowseBtnBrowse className="pop-browse__btn-browse ">
                                    <BtnGroup>
                                        <BtnBor onClick={handleEditState}>
                                            Редактировать задачу
                                        </BtnBor>

                                        <Link to={"delete"}>
                                            <BtnBor>Удалить задачу</BtnBor>
                                        </Link>
                                    </BtnGroup>

                                    <Link to={"/"}>
                                        <BtnBor>Закрыть</BtnBor>
                                    </Link>
                                </PopBrowseBtnBrowse>
                        }
                        {
                            error
                                ? <ErrorMessage>{error}</ErrorMessage>
                                : null
                        }
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
            <Outlet />
        </PopBrowseStyled>
    )
}

export default PopBrowse;