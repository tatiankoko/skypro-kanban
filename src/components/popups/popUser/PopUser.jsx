import {Link} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "../../../context/ThemeContext.jsx";

const PopUser = ({name, mail}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="header__pop-user-set pop-user-set"
             id="user-set-target">
            <p className="pop-user-set__name">{name}</p>
            <p className="pop-user-set__mail">{mail}</p>
            <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox"
                       className="checkbox"
                       name="checkbox"
                       checked={theme === 'dark'}
                       onChange={toggleTheme} />
            </div>

            <Link to={"/logout"}>
                <button type="button" className="_hover03">
                    Выйти
                </button>
            </Link>
        </div>
    )
}

export default PopUser;