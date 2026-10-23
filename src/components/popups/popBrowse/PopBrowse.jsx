import CardCalendar from "../../calendar/Calendar.jsx";
import {Link, Outlet, useParams} from "react-router-dom";
import {useState} from "react";
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
    PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrapper, PopBrowseBtnBrowse, PopBrowseStatusTheme, CategoriesBrowse
} from "./PopBrowse.styled.js";
import {CategoriesP, CategoriesTheme, Subttl} from "../popNewCard/PopNewCard.styled.js";
import {themeBg, themeColor} from "../../card/Card.jsx";
import {useTheme} from "styled-components";
import {useTasks} from "../../../context/TaskContext.jsx";

const PopBrowse = () => {
    const userTheme = useTheme();
    const {tasks, updateTask} = useTasks();

    const { id } = useParams();
    const [error, setError] = useState("");
    const [editState, setEditState] = useState(false);

    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    const task = tasks?.find(item => String(item._id) === id)

    const categoryKey = Object
        .entries(category)
        .find(([, category]) => (
            task?.topic === category
        ))?.[0];

    const [editedTask, setEditedTask] = useState({
        _id: task?._id,
        userId: task?.userId,
        title: task?.title,
        topic: task?.topic,
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

        if (!editedTask.description || !editedTask.description?.trim()) {
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

        try {
            const result = await updateTask(editedTask);

            if (result) {
                task.status = editedTask.status;
                task.description = editedTask.description;
                task.date = editedTask.date;

                setEditState(false);
            }
        } catch (err) {
            setError(err.message);
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
        <PopBrowseStyled>
            <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{task?.title}</PopBrowseTtl>
                            <CategoriesTheme
                                $active={true}
                                $bgColor={userTheme[themeBg(categoryKey)]}
                                $color={userTheme[themeColor(categoryKey)]}
                                $adaptiveHide={true}
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
                            <PopBrowseForm action="#">
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
                        <CategoriesBrowse>
                            <CategoriesP>Категория</CategoriesP>
                            <CategoriesTheme
                                $active={true}
                                $bgColor={userTheme[themeBg(categoryKey)]}
                                $color={userTheme[themeColor(categoryKey)]}
                            >
                                <p>{task?.topic}</p>
                            </CategoriesTheme>
                        </CategoriesBrowse>
                        {
                            editState
                                ? <PopBrowseBtnEdit>
                                    <BtnGroup>
                                        <BtnBg onClick={handleSubmitEdit}>
                                            Сохранить
                                        </BtnBg>

                                        <BtnBg $adaptiveOnly={true}>
                                            <Link to={"/"}>Закрыть</Link>
                                        </BtnBg>

                                        <BtnBor onClick={handleCancelEditState}>
                                            Отменить
                                        </BtnBor>

                                        <Link to={"/card/" + id + "/delete"}>
                                            <BtnBor>Удалить задачу</BtnBor>
                                        </Link>
                                    </BtnGroup>
                                    <BtnBg $adaptiveHide={true}>
                                        <Link to={"/"}>Закрыть</Link>
                                    </BtnBg>
                                </PopBrowseBtnEdit>
                                : <PopBrowseBtnBrowse>
                                    <BtnGroup>
                                        <BtnBor onClick={handleEditState}>
                                            Редактировать задачу
                                        </BtnBor>

                                        <Link to={"delete"}>
                                            <BtnBor>Удалить задачу</BtnBor>
                                        </Link>
                                    </BtnGroup>

                                    <BtnBg>
                                        <Link to={"/"}>Закрыть</Link>
                                    </BtnBg>
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