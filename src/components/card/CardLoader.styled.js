import styled from "styled-components";
import {colors} from "../../colors.js";

export const CardLoaderTheme = styled.div`
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    width: 82px;
    background: linear-gradient(to right, ${ colors.loaderBg1 }, ${ colors.loaderBg2 });
`

export const CardLoaderBtn = styled.div`
    width: 18px;
    height: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
    background: linear-gradient(to right, ${ colors.loaderBg1 }, ${ colors.loaderBg2 });
`

export const CardLoaderTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 10px;
    width: 113px;
    height: 13px;
    background: linear-gradient(to right, ${ colors.loaderBg1 }, ${ colors.loaderBg2 });
`

export const CardLoaderDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 58px;
    height: 13px;
    background: linear-gradient(to right, ${ colors.loaderBg1 }, ${ colors.loaderBg2 });
`