import PopUser from "../popups/popUser/PopUser.jsx";
import {useState} from "react";
import {HeaderBlock, HeaderButtonMainNew, HeaderLogo, HeaderNav, HeaderStyled, HeaderUser} from "./Header.styled.js";
import {ContainerStyled} from "../Container.styled.js";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [showUser, setShowUser] = useState(false)

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
                        <HeaderLogo className=" _show _light">
                            <img src="/images/logo.png" alt="logo"></img>
                        </HeaderLogo>
                    </Link>
                    <HeaderLogo className=" _dark">
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"></img></a>
                    </HeaderLogo>
                    <HeaderNav>
                        <Link to={"/card/add"}>
                            <HeaderButtonMainNew id="btnMainNew" onClick={handleClickNew}>
                                Создать новую задачу
                                {/*<a href="#popNewCard">Создать новую задачу</a>*/}
                            </HeaderButtonMainNew>
                        </Link>

                        <HeaderUser
                            href="#user-set-target"
                            onClick={() => setShowUser(!showUser)}>
                            Ivan Ivanov
                        </HeaderUser>
                        {
                            showUser
                            ? <PopUser name="Ivan Ivanov" mail="ivan.ivanov@gmail.com" />
                            : null
                        }
                    </HeaderNav>
                </HeaderBlock>
            </ContainerStyled>
        </HeaderStyled>
    )
}

export default Header;