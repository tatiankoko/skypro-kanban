import styled from "styled-components";

export const Hover01 = styled.div`
    &:hover {
        background-color: ${ ({ theme }) => theme.btnHover };
`

export const Hover02 = styled.div`
    &:hover{
        color: ${ ({ theme }) => theme.btnHover };
        
        &::after {
            border-left-color: ${ ({ theme }) => theme.btnHover };
            border-bottom-color: ${ ({ theme }) => theme.btnHover };
        }
    }    
`

export const Hover03 = styled.div`
    &:hover {
        background-color: ${ ({ theme }) => theme.btnHover };
        color: ${ ({ theme }) => theme.background };
    }
`