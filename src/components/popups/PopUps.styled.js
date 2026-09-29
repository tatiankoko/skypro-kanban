import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid ${ props => props.theme.gray40 };
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;
    
    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${ ({ theme }) => theme.gray };
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${ ({ theme }) => theme.gray };
    }
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    max-width: 370px;
    height: 200px;
    outline: none;
    padding: 20px 14px;
    background: transparent;
    border: 0.7px solid ${ props => props.theme.gray40 };
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    resize: none;

    &:read-only {
        background-color: ${({ theme }) => theme.mainBg};
    }

    &::-moz-placeholder {
        padding-top: 6px;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${({ theme }) => theme.gray};
    }

    &::placeholder {
        padding-top: 6px;
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${({ theme }) => theme.gray};
    }
`