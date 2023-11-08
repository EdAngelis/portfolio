import styled from 'styled-components';
import theme from '../../assets/theme/theme';

export const HeaderContainer = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px -5px 10px #ffffff;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 ;
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
    font-family: var(--font-neutral);
    color: #ffffff;
    padding: 0 4px 10px 10px;
    border-bottom: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
}

.a:hover {
    color: ${(props)=> theme[props.theme].primary};
    border-bottom: 2px solid ${(props)=> theme[props.theme].primary};
    border-left: 2px solid ${(props)=> theme[props.theme].primary};
}

.h1 {
    font-size: 2em;
    padding-left: 20px;
    color: ${(props)=> theme[props.theme].primary};
    font-family: var( --font-display);
    text-align: center
}

@media screen and (max-width: 750px) {
    .header {
        flex-direction: column;
        align-items: center;
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
        border-bottom: 2px solid ${(props)=> theme[props.theme].primary};
    }
}

.language {
    position: relative;
    width: 40px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    animation: flag-kick 1.5s infinite;
    
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
`;


