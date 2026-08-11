import {
    Modal,
    ModalBlock, ModalBtnEnter,
    ModalFormGroup,
    ModalFormLogin, ModalInput,
    ModalTtl,
    SignInContainer,
    SignInWrapper
} from "../signIn/SignIn.styled.js";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/sign-in");
    }

    return (
        <SignInWrapper>
            <SignInContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>

                        <ModalFormLogin id="formLogUp" action="#">
                            <ModalInput type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder="Имя"/>

                            <ModalInput type="text"
                                        name="login"
                                        id="loginReg"
                                        placeholder="Эл. почта"/>

                            <ModalInput type="password"
                                        name="password"
                                        id="passwordFirst"
                                        placeholder="Пароль"/>

                            <ModalBtnEnter id="SignUpEnter" onClick={handleRegister}>
                                Зарегистрироваться
                            </ModalBtnEnter>

                            <ModalFormGroup>
                                <Link to={"/sign-in"}>
                                    <p>Уже есть аккаунт? Войдите здесь</p>
                                </Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </SignInContainer>
        </SignInWrapper>
    );
}

export default SignUp;