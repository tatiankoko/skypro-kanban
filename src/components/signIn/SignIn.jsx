import {
    Modal,
    ModalBlock, ModalBtnEnter, ModalFormGroup,
    ModalFormLogin, ModalTtl,
    SignInContainer,
    SignInWrapper
} from "./SignIn.styled.js";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {signIn} from "../../services/auth.js";
import BaseInput from "./BaseInput.jsx";
import {ErrorNotification} from "../Notification.styled.js";

const SignIn = ({ setIsAuth }) => {
    const navigate = useNavigate();

    // состояние полей
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });

    // состояние ошибок
    const [errors, setErrors] = useState({
        name: "",
        login: "",
        password: "",
    });

    // состояние текста ошибки, чтобы показать её пользователю
    const [error, setError] = useState("");

    const validateForm = () => {
        const newErrors = { name: "", login: "", password: "" };
        let isValid = true;

        if (!formData.login.trim()) {
            newErrors.login = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            setError("Заполните все поля");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
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
            const data =
                await signIn({ login: formData.login, password: formData.password });

            if (data) {
                setIsAuth(true);
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
        }
    };

/*    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
    }*/

    return (
        <SignInWrapper>
            <SignInContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Вход</h2>
                        </ModalTtl>

                        <ModalFormLogin id="formLogIn" onSubmit={handleSubmit}>
                            <BaseInput
                                error={errors.login}
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                                value={formData.login}
                                onChange={handleChange}/>

                            <BaseInput
                                error={errors.password}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={handleChange}/>

                            {
                                error
                                    ? <ErrorNotification>{error}</ErrorNotification>
                                    : null
                            }

                            <ModalBtnEnter id="btnEnter">
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