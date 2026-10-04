import styled from "styled-components";

export const ErrorNotification = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0;
    text-align: center;
    color: ${ props => props.theme.errorText };
    padding-top: 7px;
`

export const ErrorMessage = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0;
    text-align: left;
    color: ${ props => props.theme.errorText };
    padding: 7px;
`