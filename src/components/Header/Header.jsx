import React, { useContext } from "react";
import Menu from "./Menu";
import Search from "./Search";
import { ThemeContext } from "../../contexts/ThemeContext";
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <header className={`flex justify-between items-center p-4 theme-${theme}`}>
            <Search/>
            <Menu/>
            <button onClick={toggleTheme}>{theme}</button>
        </header>
    );
}       
export default Header;
