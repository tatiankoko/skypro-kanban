import styled from "styled-components";
import {colors} from "../../colors.js";

export const MainStyled = styled.main`
    width: 100%;
    background-color: ${ colors.mainBg };
`

export const MainBlock = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`

export const MainColumn = styled.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        margin: 0 auto;
        display: block;
    }
`

export const MainPlaceholder = styled.div`
    justify-self: center;
    align-content: center;
    height: 100%;

    color: ${ colors.gray };
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;

    @media screen and (max-width: 1200px) {
        align-content: flex-start;
        margin-top: 20px;
    }
`

