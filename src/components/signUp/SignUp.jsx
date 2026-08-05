import {
    Modal,
    ModalBlock, ModalBtnEnter,
    ModalFormGroup,
    ModalFormLogin, ModalInput,
    ModalTtl,
    SignInContainer,
    SignInWrapper
} from "../signIn/SignIn.styled.js";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <>
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

                                <Link to={"/"}>
                                    <ModalBtnEnter id="SignUpEnter">
                                        Зарегистрироваться
                                    </ModalBtnEnter>
                                </Link>

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
        </>
    );
}

export default SignUp;