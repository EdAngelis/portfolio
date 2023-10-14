import styled from 'styled-components';
import theme from '../../assets/theme/theme';
import { KeyObject } from 'crypto';

export const HeaderContainer = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 5px 10px #1e032b;
    align-items: center;
}

.ul {
    display: flex;
    gap: 20px;
    justify-content: end;
    align-items: center;
    padding: 0 20px 0 0;
    flex-wrap: wrap;
}

.li {
    list-style: none;
}
.a {
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    color: #0D7CFF;
    padding: 0 4px 10px 10px;
    border-bottom: 2px solid #0D7CFF;
    border-left: 2px solid #0D7CFF;
}

.a:hover {
    color: #8E00D1;
    border-bottom: 2px solid #8E00D1;
    border-left: 2px solid #8E00D1;
}

.h1 {
    font-size: 2em;
    padding-left: 20px;
    color: ${(props)=> theme[props.theme].primary};
    font-family: 'Indie Flower', cursive;
    text-align: center
}

@media screen and (max-width: 750px) {
    .header {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    .h1 {
        margin: 0;
    }
    .ul {
        margin: 0;
        padding: 0;
        justify-content: center;
    }
    .a {
        border: none;
        padding: 10px 0;
        border-bottom: 2px solid #0D7CFF;
        padding-bottom: 3px;
    }
    .a:hover {
        border: none;
        border-bottom: 2px solid #8E00D1;
    }
}

.language {
    position: relative;
    width: 50px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    animation: flag-kick 1.5s infinite;
    
}

@keyframes flag {
    0% {
        transform: translateX(20px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

@keyframes flag-2 {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}

@keyframes flag-kick {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0px);
    }
}

.bra {
    transform: translateX(20px);
}

.eua {
    transform: translateY(20px);
}

.image {
    width: 100%;
    height: 100%;
}
`;


