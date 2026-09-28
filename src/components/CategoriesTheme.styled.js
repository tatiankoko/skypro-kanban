import styled from "styled-components";

export const ThemeOrange = styled.p`
    background-color: ${ ({ theme }) => theme.orangeBg };
    color: ${ ({ theme }) => theme.orangeColor };
`
export const ThemeGreen = styled.div`
    background-color: ${ ({ theme }) => theme.greenBg };
    color: ${ ({ theme }) => theme.greenColor };
`
export const ThemePurple = styled.div`
    background-color: ${ ({ theme }) => theme.purpleBg };
    color: ${ ({ theme }) => theme.purpleColor };
`
export const ThemeGray = styled.div`
    background: ${ ({ theme }) => theme.gray };
    color: ${ ({ theme }) => theme.background };
`
export const ThemeLoader = styled.div`
    background: linear-gradient(to right, ${ ({ theme }) => theme.loaderBg1 }, ${ ({ theme }) => theme.loaderBg2 });
`
