import {createContext, useState} from 'react';
import {signIn} from "../services/auth.js";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const userInfo = JSON.parse(
        localStorage.getItem("userInfo"));
    const [user, setUser] = useState(userInfo); // null означает, что пользователь не авторизован
    const [isAuth, setIsAuth] = useState(Boolean(userInfo));

    const login = async ({login, password}) => {
        const userData = await signIn({
            login: login,
            password: password
        });

        if (userData) {
            localStorage.setItem(
                "userInfo",
                JSON.stringify(userData));

            setIsAuth(true);
            setUser(userData);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('userInfo');

        setIsAuth(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user, setUser,
            isAuth, setIsAuth,
            login, logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;