import {Link, useNavigate, useParams} from "react-router-dom";
import {deleteTask} from "../../../services/api.js";
import {useContext, useState} from "react";
import {ErrorNotification} from "../../Notification.styled.js";
import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo,
    PopExitExitYes,
    PopExitForm,
    PopExitStyled,
    PopExitTtl
} from "../popExit/PopExit.styled.js";
import AuthContext from "../../../context/AuthContext.jsx";

const PopDeleteTask = ({updateTasks}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {user} = useContext(AuthContext);

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const data = await deleteTask({
                token: user.token,
                id: id
            });

            if (data) {
                updateTasks(data);
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
                        <PopExitExitYes id="exitYes" onClick={handleDelete}>
                            Да, удалить
                        </PopExitExitYes>

                        <Link to={"/card/" + id}>
                            <PopExitExitNo id="exitNo">
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