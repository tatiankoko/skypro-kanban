import {Link, useNavigate, useParams} from "react-router-dom";
import {deleteTask} from "../../../services/api.js";
import {useState} from "react";
import {ErrorNotification} from "../../Notification.styled.js";

const PopDeleteTask = ({updateTasks}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        try {
            const data = await deleteTask({
                token: userInfo.token,
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
        <div className="pop-exit" id="popExit">
            <div className="pop-exit__container">
                <div className="pop-exit__block">
                    <div className="pop-exit__ttl">
                        <h2>Вы уверены, что хотите удалить задачу?</h2>
                    </div>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <div className="pop-exit__form-group">
                            <button className="pop-exit__exit-yes _hover01"
                                    id="exitYes"
                                    onClick={handleDelete}>
                                Да, удалить
                            </button>

                            <Link to={"/card/" + id}>
                                <button className="pop-exit__exit-no _hover03" id="exitNo">
                                    Нет, оставить
                                </button>
                            </Link>
                        </div>
                    </form>

                    {
                        error
                            ? <ErrorNotification>{error}</ErrorNotification>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default PopDeleteTask