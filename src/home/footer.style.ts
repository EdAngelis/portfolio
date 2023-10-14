import styled from 'styled-components';
import theme from '../assets/theme/theme';

export const FooterContainer = styled.div`
footer {
    margin: 50px 0;
}
footer h2{
    text-align: center;
    font-family: 'Inter', sans-serif;
    border-top: 2px solid #8E00D1;
    margin-top: 100px;
    padding: 5px 0 0 0;
    color: #8E00D1;
}

footer div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

footer div a {
    font-family: 'Irish Grover', cursive;
    font-size: 1.5em;
    color: #8E00D1;
}

footer div a:hover {
    color: #0D7CFF;
}

footer div img {
    width: 50px;
    margin-left: 50px;
}

@media screen and ( max-width: 600px) {
    footer div div img {
        margin: 0;
    }
    footer div div {
        margin: 0;
    }   

    footer div {
        gap: 20px;
    }
}`;