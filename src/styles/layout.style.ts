import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../assets/theme/theme';

interface LayoutContainerProps extends HTMLAttributes<HTMLDivElement> {
    active?: string;
}

const activeAnim = keyframes`
    0% {
        transform: translateX(-70px);
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const LayoutContainer = styled.div<LayoutContainerProps>`
    .layout-container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1440px;
        gap: 100px;
        margin: 0 auto;
        background-color: ${theme.dark.background};
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-name: ${(props) => (props?.active === "true" ? activeAnim : null)};
    }

    @media (max-width: 900px) {
        .layout-container {
            gap: 10px;
        }
    }
`;