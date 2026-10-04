import PopUser from "../popups/popUser/PopUser.jsx";
import {useContext, useState} from "react";
import {HeaderBlock, HeaderButtonMainNew, HeaderLogo, HeaderNav, HeaderStyled, HeaderUser} from "./Header.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {Link, useNavigate} from "react-router-dom";
import ThemeContext from "../../context/ThemeContext.jsx";
import {useAuth} from "../../context/AuthContext.jsx";

const Header = () => {
    const [showUser, setShowUser] = useState(false)
    const {theme} = useContext(ThemeContext);
    const {user} = useAuth();

    const navigate = useNavigate();

    const handleClickNew = (e) => {
        e.preventDefault();
        navigate('/card/add');
    };

    return (
        <HeaderStyled>
            <ContainerStyled>
                <HeaderBlock>
                    <Link to={"/"}>
                        <HeaderLogo>
                            {
                                theme === 'light'
                                    ? <img src="/images/logo.png" alt="logo"></img>
                                    : <img src="/images/logo_dark.png" alt="logo"></img>
                            }
                        </HeaderLogo>
                    </Link>
                    <HeaderNav>
                        <Link to={"/card/add"}>
                            <HeaderButtonMainNew onClick={handleClickNew}>
                                Создать новую задачу
                            </HeaderButtonMainNew>
                        </Link>

                        <HeaderUser
                            onClick={() => setShowUser(!showUser)}>
                            {user?.name}
                        </HeaderUser>
                        {
                            showUser
                            ? <PopUser name={user?.name} mail={user?.login} />
                            : null
                        }
                    </HeaderNav>
                </HeaderBlock>
            </ContainerStyled>
        </HeaderStyled>
    )
}

export default Header;