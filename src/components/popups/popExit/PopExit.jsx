import {Link, useNavigate} from "react-router-dom";
import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo,
    PopExitExitYes,
    PopExitForm,
    PopExitStyled,
    PopExitTtl
} from "./PopExit.styled.js";

const PopExit = ({ setIsAuth }) => {
    const navigate = useNavigate();

    function handleLogout(e) {
        e.preventDefault();
        setIsAuth(false);
        localStorage.setItem("userInfo", null);
        navigate("/sign-in");
    }

    return (
        <PopExitStyled>
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </PopExitTtl>
                    <PopExitForm action="#">
                        <PopExitExitYes id="exitYes" onClick={handleLogout}>
                            Да, выйти
                        </PopExitExitYes>

                        <Link to={"/"}>
                            <PopExitExitNo id="exitNo">
                                Нет, остаться
                            </PopExitExitNo>
                        </Link>
                    </PopExitForm>
                </PopExitBlock>
            </PopExitContainer>
        </PopExitStyled>
    )
}

export default PopExit