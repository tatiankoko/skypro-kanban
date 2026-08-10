import {
    Modal,
    ModalBlock, ModalBtnEnter, ModalBtnEnterLink,
    ModalFormGroup,
    ModalFormLogin, ModalInput,
    ModalTtl,
    SignInContainer,
    SignInWrapper
} from "./SignIn.styled.js";
import {Link} from "react-router-dom";

const SignIn = () => {
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

                            <ModalBtnEnter id="btnEnter">
                                <ModalBtnEnterLink to={"/"}>
                                    Войти
                                </ModalBtnEnterLink>
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