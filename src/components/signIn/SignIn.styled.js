import styled from "styled-components";

export const SignInWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: ${ ({ theme }) => theme.mainBg };
`

export const SignInContainer = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 375px) {
        background-color: ${ ({ theme }) => theme.background };
    }
`

export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.background};
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 1px solid ${ props => props.theme.border };
    box-shadow: 0 4px 67px -12px ${ props => props.theme.popShadow };

    @media screen and (max-width: 375px) {
        max-width: 368px;
        width: 100%;
        padding: 0 16px;
        border-radius: 0;
        border: none;
        box-shadow: none;
    }
`

export const ModalTtl = styled.div`
    h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.6px;
        margin-bottom: 20px;
`

export const ModalFormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /*input:first-child {
        margin-bottom: 7px;
    }*/
    input:not(:first-child) {
        margin-top: 7px;
    }
`

export const ModalFormGroup = styled.div`
    text-align: center;

    p, a {
        color: ${ props => props.theme.gray40 };
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.14px;
    }

    a {
        text-decoration: underline;
    }
`

export const
    ModalInput = styled.input`
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 1px solid ${ props => props.theme.gray40 };
    outline: none;
    padding: 4px 10px;
    
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    
    &::-moz-placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: ${ ({ theme }) => theme.gray };
    }

    &::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.28px;
        color: ${ ({ theme }) => theme.gray };
    }
`

export const ModalBtnEnter = styled.button`
    width: 100%;
    height: 30px;
    background-color: ${ ({ theme }) => theme.btnBg };
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: ${ ({ theme }) => theme.background};
    
    &:hover {
        background-color: ${ ({ theme }) => theme.btnHover };
    }

    /*a {
        width: 100%;
        height: 100%;
        color: ${ props => props.theme.background };
        display: flex;
        align-items: center;
        justify-content: center;
    }*/

    @media screen and (max-width: 375px) {
        height: 40px;
    }
`