import {WrapperStyled} from "../components/Wrapper.styled.js";
import {MainStyled} from "../components/main/Main.styled.js";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
    const NotFoundContainer = styled.div`
        min-width: 320px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            margin-bottom: 20px;
            color: ${ props => props.theme.btnBg };
        }

        a {
            color: ${ props => props.theme.title };
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            text-decoration: underline;
            
            &:hover {
                color: ${ props => props.theme.btnHover };
            }
        }
    
        @media screen and (max-width: 375px) {
            background-color: ${ ({ theme }) => theme.background };
        }
    `

    return (
        <WrapperStyled>
            <MainStyled>
                <NotFoundContainer>
                    <h2>Страница не найдена</h2>
                    <Link to="/">Вернуться на главную</Link>
                </NotFoundContainer>
            </MainStyled>
        </WrapperStyled>
    )
};

export default NotFoundPage;