import {
    Modal,
    ModalBlock, ModalBtnEnter,
    ModalFormGroup,
    ModalFormLogin, ModalTtl,
    SignInContainer,
    SignInWrapper
} from "../signIn/SignIn.styled.js";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {signUp} from "../../services/auth.js";
import BaseInput from "../signIn/BaseInput.jsx";
import {ErrorNotification} from "../Notification.styled.js";

const SignUp = () => {
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

        if (!formData.name.trim()) {
            newErrors.name = true;
            setError("Заполните все поля");
            isValid = false;
        }

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
                await signUp({
                    name: formData.name,
                    login: formData.login,
                    password: formData.password });

            if (data) {
                navigate("/sign-in");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <SignInWrapper>
            <SignInContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>

                        <ModalFormLogin id="formLogUp" onSubmit={handleSubmit}>
                            <BaseInput error={errors.name}
                                       type="text"
                                       name="name"
                                       id="formname"
                                       placeholder="Имя"
                                       value={formData.name}
                                       onChange={handleChange}/>

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
                                Зарегистрироваться
                            </ModalBtnEnter>

                            <ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to={"/sign-in"}>
                                    Войдите здесь
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