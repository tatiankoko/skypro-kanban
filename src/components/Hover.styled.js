import styled from "styled-components";
import {colors} from "../colors.js";

export const Hover01 = styled.div`
    &:hover {
        background-color: ${ colors.btnHover };
`

export const Hover02 = styled.div`
    &:hover{
        color: ${ colors.btnHover };
        
        &::after {
            border-left-color: ${ colors.btnHover };
            border-bottom-color: ${ colors.btnHover };
        }
    }    
`

export const Hover03 = styled.div`
    &:hover {
        background-color: ${ colors.btnHover };
        color: ${ colors.background };
    }
`