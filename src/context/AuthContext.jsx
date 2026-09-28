import {createContext, useState} from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Храним данные о пользователе в состоянии
    const [user, setUser] = useState(null); // null означает, что пользователь не авторизован

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;