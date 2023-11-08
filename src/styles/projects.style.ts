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
    flex-wrap: wrap;
    margin: 0 130px;
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

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
}

@media (max-width: 900px) {

    .projects {
        margin-top: 50px;
    }
    .top {
         margin: 0 10px;
         text-align: center;
         justify-content: center;
         gap: 20px;
    }

    .top p {
        text-align: justify;
    }
}
`;