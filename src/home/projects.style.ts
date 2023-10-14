import styles from 'styled-components';
import theme from '../assets/theme/theme';

export const ProjectsContainer = styles.div`

.projects {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 2em;
}

.projects {
    font-family: var( --font-title);
    color: #ffffff;
    
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

`;