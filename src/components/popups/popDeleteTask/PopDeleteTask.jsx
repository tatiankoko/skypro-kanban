import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {ErrorNotification} from "../../Notification.styled.js";
import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo,
    PopExitExitYes,
    PopExitForm,
    PopExitStyled,
    PopExitTtl
} from "../popExit/PopExit.styled.js";
import {useTasks} from "../../../context/TaskContext.jsx";

const PopDeleteTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {removeTask} = useTasks();

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const data = await removeTask(id);

            if (data) {
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <PopExitStyled>
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTtl>
                        <h2>Вы уверены, что хотите удалить задачу?</h2>
                    </PopExitTtl>
                    <PopExitForm action="#">
                        <PopExitExitYes onClick={handleDelete}>
                            Да, удалить
                        </PopExitExitYes>

                        <Link to={"/card/" + id}>
                            <PopExitExitNo>
                                Нет, оставить
                            </PopExitExitNo>
                        </Link>
                    </PopExitForm>

                    {
                        error
                            ? <ErrorNotification>{error}</ErrorNotification>
                            : null
                    }
                </PopExitBlock>
            </PopExitContainer>
        </PopExitStyled>
    )
}

export default PopDeleteTask