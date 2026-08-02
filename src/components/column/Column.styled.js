import styled from "styled-components";
import {colors} from "../../colors.js";

export const ColumnTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;

    p {
        color: ${ colors.gray };
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`