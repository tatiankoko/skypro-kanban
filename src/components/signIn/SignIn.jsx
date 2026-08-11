import {
    Modal,
    ModalBlock, ModalBtnEnter, ModalFormGroup,
    ModalFormLogin, ModalInput,
    ModalTtl,
    SignInContainer,
    SignInWrapper
} from "./SignIn.styled.js";
import {Link, useNavigate} from "react-router-dom";

const SignIn = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
    }

    return (
        <SignInWrapper>
            <SignInContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Вход</h2>
                        </ModalTtl>

                        <ModalFormLogin id="formLogIn" action="#">
                            <ModalInput type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Эл. почта"/>

                            <ModalInput type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"/>

                            <ModalBtnEnter id="btnEnter" onClick={handleLogin}>
                                    Войти
                            </ModalBtnEnter>

                            <ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={"/sign-up"}>
                                    Регистрируйтесь здесь
                                </Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </SignInContainer>
        </SignInWrapper>
    );
}

export default SignIn;