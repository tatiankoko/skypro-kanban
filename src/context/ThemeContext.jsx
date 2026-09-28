import {createContext, useEffect, useState} from 'react';
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../themes.js";

const ThemeContext = createContext(undefined);

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContext;