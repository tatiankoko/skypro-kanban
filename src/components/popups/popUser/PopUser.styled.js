import styled from "styled-components";

export const PopUserSetStyled = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid ${ props => props.theme.gray40 };
    background: ${ props => props.theme.background };
    box-shadow: 0 10px 39px 0 ${ props => props.theme.shadow };
    padding: 34px;
    text-align: center;
    z-index: 2;

    &:target {
        display: block;
    }
    
    & button {
        width: 72px;
        height: 30px;
        background: transparent;
        color: ${ props => props.theme.btnBorder };
        border-radius: 4px;
        border: 1px solid ${ props => props.theme.btnBorder };

        &:hover {
            background-color: ${ props => props.theme.btnBg };
            border-color: ${ props => props.theme.btnBg };
            color: ${ props => props.theme.btnText };
        }
    }
`

export const PopUserSetName = styled.p`
    color: ${ props => props.theme.title };
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`

export const PopUserSetMail = styled.p`
    color: ${ props => props.theme.gray };
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`

export const PopUserSetTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    
    & p {
        color: ${ props => props.theme.title };
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }
    & input[type=checkbox] {
        position: relative;
        width: 24px;
        height: 13px;
        border-radius: 100px;
        background: ${ (props) => props.theme.mode === 'light' 
                ? props.theme.mainBg 
                : props.theme.title };
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &::before {
            content: "";
            position: absolute;
            top: 1px;
            left: 1px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background-color: ${ (props) => props.theme.mode === 'light'
                    ? props.theme.gray
                    : props.theme.btnBg };
            transition: 0.5s;
        }
    }
    
    & input:checked[type=checkbox]::before {
        left: 12px;
    }
`

export const PopUserButton = styled.button`
    border-radius: 4px;
    border: 0.7px solid ${ props => props.theme.btnBorder };
    outline: none;
    background: transparent;
    color: ${ props => props.theme.btnBorder };
    
    &:hover {
        background-color: ${ props => props.theme.btnBg };
        border-color: ${ props => props.theme.btnBg };
        color: ${ props => props.theme.btnText };
    }
`