import styled from "styled-components";
import {Link} from "react-router-dom";

export const PopNewCardStyled = styled.div`
    display: block;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    &:target {
        display: block;
    }

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }

    @media screen and (max-width: 495px) {
        padding: 0;
        justify-content: flex-start;
    }
`

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${ props => props.theme.background };
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid ${ props => props.theme.border };
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`

export const PopNewCardTtl = styled.h3`
    color: ${ props => props.theme.title };
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`

export const PopNewCardClose = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: ${ props => props.theme.gray };
    cursor: pointer;

    &:hover {
        color: ${ props => props.theme.title };
    }
`

export const PopNewCardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const Categories = styled.div`
    margin-bottom: 20px;
`

export const CategoriesP = styled.p`
    margin-bottom: 14px;
    color: ${ props => props.theme.title };
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const FormNewCreate = styled.button`
    width: 132px;
    height: 30px;
    background-color: ${ props => props.theme.btnBg };
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: ${ props => props.theme.background };
    float: right;

    &:hover {
        background-color: ${ props => props.theme.btnHover };
    }

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`

export const Subttl = styled.label`
    color: ${ props => props.theme.title };
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`