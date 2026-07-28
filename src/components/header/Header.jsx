import PopUser from "../popups/popUser/PopUser.jsx";
import {useState} from "react";
import {HeaderBlock, HeaderButtonMainNew, HeaderNav, HeaderStyled, HeaderUser} from "./Header.styled.js";
import {ContainerStyled} from "../Container.styled.js";

const Header = () => {
    const [showUser, setShowUser] = useState(false)

    return (
        <HeaderStyled>
            <ContainerStyled>
                <HeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo"></img></a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"></img></a>
                    </div>
                    <HeaderNav>
                        <HeaderButtonMainNew id="btnMainNew">
                            <a href="#popNewCard">Создать новую задачу</a>
                        </HeaderButtonMainNew>

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