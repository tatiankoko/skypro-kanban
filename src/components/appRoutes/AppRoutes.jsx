import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage.jsx";
import PrivateRoute from "../../pages/PrivateRoute.jsx";
import {useState} from "react";
import LogoutPage from "../../pages/LogoutPage.jsx";
import NewCardPage from "../../pages/NewCardPage.jsx";
import CardPage from "../../pages/CardPage.jsx";
import SignInPage from "../../pages/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage.jsx";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                {/* Главная страница */}
                <Route path="/" element={<MainPage setIsAuth={setIsAuth} />} >
                    <Route path="/logout" element={<LogoutPage setIsAuth={setIsAuth} />} />
                    <Route path="/card/add" element={<NewCardPage />} />
                    <Route path="/card/:id" element={<CardPage />} />
                </Route>
            </Route>
            {/* Страница входа */}
            <Route path="/sign-in" element={<SignInPage />} />
            {/* Страница регистрации */}
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;