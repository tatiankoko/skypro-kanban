import {createContext, useContext, useState} from 'react';
import {signIn, signUp} from "../services/auth.js";

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

    const signup = async ({name, login, password}) => {
        const userData = await signUp({
            name: name,
            login: login,
            password: password
        });

        return !!userData;
    };

    return (
        <AuthContext.Provider value={{
            user, setUser,
            isAuth, setIsAuth,
            login, logout, signup
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Кастомный хук
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider');
    }
    return context;
}

export default AuthContext;