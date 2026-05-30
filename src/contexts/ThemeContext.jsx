import { createContext, useEffect, useState } from "react";
import React from "react";

export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme;
        }

        return window.matchMedia("prefers-color-scheme: dark").matches
            ? "dark"
            : "light";
    });

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;