import {Link} from "react-router-dom";

const PopUser = ({name, mail, setIsAuth}) => {
    return (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
            {/*<a href="">x</a>*/}
            <p className="pop-user-set__name">{name}</p>
            <p className="pop-user-set__mail">{mail}</p>
            <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox"/>
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