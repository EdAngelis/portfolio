import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    0% {
        transform: translateX(0);
        }
    100% {
        transform: translateX(-150%);
    }`

export const Container = styled.div`
    
    
    .container{
        position: relative;
        gap: 60px;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        max-width: 1440px;
        overflow: hidden;
        padding: 100px 0;
    }

    .container::before,
    .container::after{
        content: '';
        width: 100px;
        height: 250px;
        position: absolute;
        z-index: 2;
    }

    .container::before{
        left: 0;
        background: linear-gradient(to left, rgba(255,255,255,0), black);
    }
    .container::after{
        right: 0;
        background: linear-gradient(to right, rgba(255,255,255,0), black);
    }

    .slider{
        display: flex;
        gap: 60px;
        animation-name: ${slide};
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    /* .slider:hover {
        animation-play-state: paused;
    } */
    .item{
        flex-grow: 1;
        flex-shrink: 0;
    }

    .img{
        border-radius: 20px;
    }
`;