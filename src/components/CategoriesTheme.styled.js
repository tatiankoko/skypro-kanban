import styled from "styled-components";
import {colors} from "../colors.js";

export const ThemeOrange = styled.p`
    background-color: ${ colors.orangeBg };
    color: ${ colors.orangeColor };
`
export const ThemeGreen = styled.div`
    background-color: ${ colors.greenBg };
    color: ${ colors.greenColor };
`
export const ThemePurple = styled.div`
    background-color: ${ colors.purpleBg };
    color: ${ colors.purpleColor };
`
export const ThemeGray = styled.div`
    background: ${ colors.gray };
    color: ${ colors.background };
`
export const ThemeLoader = styled.div`
    background: linear-gradient(to right, ${ colors.loaderBg1 }, ${ colors.loaderBg2 });
`
