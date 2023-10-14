import styles from 'styled-components';
import themes from '../assets/theme/theme';

export const ProjectsContainer = styles.div`
.projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.projects {
    font-family: 'Irish Grover', cursive;
    color: #ffffff;
    
}

.projects a {
    align-self: flex-start;
    margin: 0 0 0 50px;
    line-height: 2em;
    color: #0D7CFF;
}

.projects a:hover {
    color: #8E00D1;
}

.projects a + a {
    margin-top: 30px;
}`;