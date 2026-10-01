import CardCalendar from "../../calendar/Calendar.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import PopInput from "../PopInput.jsx";
import {ErrorMessage} from "../../Notification.styled.js";
import {category} from "../../../category.js";
import {status} from "../../../status.js";
import {
    FormNewBlock,
    PopNewCardBlock, Categories,
    PopNewCardContainer,
    PopNewCardContent, PopNewCardForm,
    PopNewCardStyled, PopNewCardTtl, PopNewCardWrapper,
    Subttl, CategoriesP, CategoriesThemes, FormNewCreate, PopNewCardClose, CategoriesTheme
} from "./PopNewCard.styled.js";
import {themeBg, themeColor} from "../../card/Card.jsx";
import {useTheme} from "styled-components";
import TasksContext from "../../../context/TaskContext.jsx";

const PopNewCard = () => {
    const userTheme = useTheme();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {addTask} = useContext(TasksContext);

    const [newTask, setNewTask] = useState({
        title: "",
        topic: category.orange,
        status: status.todo,
        description: "",
        date: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });

    const handleToggle = (value) => {
        setNewTask({
            ...newTask,
            topic: value,
        });
    };

    const validateForm = () => {
        const newErrors = { title: "", description: "", date: "" };
        let isValid = true;

        if (!newTask.title.trim()) {
            newErrors.title = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!newTask.description.trim()) {
            newErrors.description = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!newTask.date) {
            newErrors.date = true;
            setError("Выберите срок исполнения");
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

        try {
            const result = await addTask(newTask);

            if (result) {
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <PopNewCardStyled>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTtl>Создание задачи</PopNewCardTtl>
                        <PopNewCardClose to={"/"}>&#10006;</PopNewCardClose>
                        <PopNewCardWrapper>
                            <PopNewCardForm action="#">
                                <FormNewBlock>
                                    <Subttl htmlFor="formTitle">Название задачи</Subttl>
                                    <PopInput
                                        error={errors.title}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        value={newTask.title}
                                        onChange={handleChange}
                                        autoFocus />
                                </FormNewBlock>
                                <FormNewBlock>
                                    <Subttl htmlFor="textArea">Описание задачи</Subttl>
                                    <PopInput
                                        tag="textarea"
                                        error={errors.description}
                                        type="text"
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={newTask.description}
                                        onChange={handleChange} />
                                </FormNewBlock>
                            </PopNewCardForm>
                            <CardCalendar initialDate={newTask.date}
                                          setDate={(value)=> {
                                              setNewTask(
                                              {
                                                  ...newTask,
                                                  date: value,
                                              });

                                              setErrors({ ...errors, date: false });
                                              setError("");
                                          }}/>
                        </PopNewCardWrapper>
                        <Categories>
                            <CategoriesP>Категория</CategoriesP>
                            <CategoriesThemes>
                                {
                                    Object.entries(category).map(([key, category]) => (
                                        <CategoriesTheme
                                            $active={false}
                                            $bgColor={userTheme[themeBg(key)]}
                                            $color={userTheme[themeColor(key)]}
                                            key={category}
                                            onClick={() => handleToggle(category)}
                                            style={{
                                                cursor: 'pointer',
                                                opacity: newTask.topic === category ? 1 : 0.4,
                                            }}
                                        >
                                            {category}
                                        </CategoriesTheme>
                                    ))
                                }
                            </CategoriesThemes>
                        </Categories>
                        <FormNewCreate id="btnCreate" onClick={handleSubmit}>
                            Создать задачу
                        </FormNewCreate>
                        {
                            error
                                ? <ErrorMessage>{error}</ErrorMessage>
                                : null
                        }
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardStyled>
    )
}

export default PopNewCard;