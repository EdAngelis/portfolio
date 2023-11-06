import styled from 'styled-components';
import theme from '../../assets/theme/theme';

export const FooterContainer = styled.div`
margin-top: 100px;
max-width: 1440px;
margin: 0 auto;
footer h2{
    text-align: center;
    font-family: var( --font-neutral);
    border-top: 2px solid ${(props)=> theme[props.theme].primary};
    padding: 5px 0 0 0;
    color: ${(props)=> theme[props.theme].primary};
}

footer div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
}

footer div a {
    font-family: var( --font-title);
    font-size: 1.5em;
    color: ${(props)=> theme[props.theme].primary};
}

footer div a:hover {
    color: #0D7CFF;
}

@media screen and ( max-width: 600px) {  

    footer div {
        gap: 20px;
    }
}`;