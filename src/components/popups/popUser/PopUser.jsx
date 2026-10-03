import {Link} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../../../context/ThemeContext.jsx";
import {PopUserSetMail, PopUserSetName, PopUserSetStyled, PopUserSetTheme} from "./PopUser.styled.js";

const PopUser = ({name, mail}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <PopUserSetStyled>
            <PopUserSetName>{name}</PopUserSetName>
            <PopUserSetMail>{mail}</PopUserSetMail>
            <PopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox"
                       className="checkbox"
                       name="checkbox"
                       checked={theme === 'dark'}
                       onChange={toggleTheme} />
            </PopUserSetTheme>

            <Link to={"/logout"}>
                <button type="button">Выйти</button>
            </Link>
        </PopUserSetStyled>
    )
}

export default PopUser;