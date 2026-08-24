import styled from "styled-components";
import {colors} from "../../colors.js";

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
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
        color: ${ colors.gray };
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${ colors.gray };
    }
`

export const StyledTextarea = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    
    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${ colors.gray };
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        letter-spacing: -0.14px;
        color: ${ colors.gray };
    }
`