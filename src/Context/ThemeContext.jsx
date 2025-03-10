import { useContext, createContext } from "react";
import { UseToogle } from "../Hooks/UseToogle";

const ThemeContext = createContext(null);

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkMode, toggle] = UseToogle();
    const toggleDarkMode = () => {
        toggle();
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
} 