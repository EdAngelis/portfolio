import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

interface LayoutContainerProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
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

export const PageLayout = styled.div<LayoutContainerProps>`
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 300px;
        margin: 0 auto;
        gap: 120px;
        background-color: red;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-name: ${(props) => (props.active ? activeAnim : null)};
    }
`;