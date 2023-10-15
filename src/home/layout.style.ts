import styled from 'styled-components';
import { keyframes } from "styled-components";

import theme from '../assets/theme/theme';

const activeAnim = keyframes`
0% {
            transform: translateX(-70px);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateX(0);
}`;

export const LayoutContainer = styled.div`
    .container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 960px;
        margin: 0 auto;
        gap: 120px;
        animation-name: ${props => ( props.animate ? activeAnim : null )};
        animation-duration: 1s;
        animation-iteration-count: 1;
    }

    @keyframes themeTransition {
        0% {
            transform: translateX(-70px);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

`;