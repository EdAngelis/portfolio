import styles from 'styled-components';
import theme from '../assets/theme/theme';

export const ProjectsContainer = styles.div`


.projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 100px;
    font-family: var( --font-title);
    color: #ffffff;
}

.top {
    display: flex;
    margin: 0 130px;
    gap: 100px;
    align-items: center;
}

.top p {
    color: ${theme.dark.fontDark};
    font-size: 1.2em;
    font-weight: 400;
    margin: 0;

}

h1 {
    font-size: 2em;
}

.projects a {
    align-self: flex-start;
    margin: 0 0 0 0;
    line-height: 2em;
    color: #0D7CFF;
}

.projects a:hover {
    color: ${(props)=> theme[props.theme].primary};
}

.projects a + a {
    margin-top: 0px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
}

`;