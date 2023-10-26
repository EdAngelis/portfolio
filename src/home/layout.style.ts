import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

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
    .container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 960px;
        margin: 0 auto;
        gap: 120px;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-name: ${(props) => (props?.active === "true" ? activeAnim : null)};
    }
`;