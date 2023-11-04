 import styled from 'styled-components';
import theme from '../assets/theme/theme';

export const JobsContainer = styled.div`
.experiences-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5em;
    padding: 80px 0;
    margin: 0 100px;

}

.jobs-section {
    margin-top: 100px;
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

.jobs-section h1 {
    font-family: var( --font-title);
    color: ${theme.dark.font};
    font-size: 2em;
    

}

.time-line {
    height: 14px;
    background-color: ${(props)=> theme[props.theme].primary};
    width: 100%;
}

.job {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-weight: bold;
    color: ${(props)=> theme[props.theme].primary};
    gap: 10px;
}

.job2{
    position: relative;
    bottom: 15px;
}

.technologies{
    color: ${theme.dark.fontDark};
    margin-left: 30px;
}

.role {
    color: ${(props)=> theme[props.theme].primary};
    font-size: 20px;
    font-weight: normal;
    margin-left: 30px;
}

.company {
    color: ${(props)=> theme[props.theme].primary};
    font-size: 22px;
    font-weight: bold;
    margin-left: 30px;
}

.date {
    color: ${theme.dark.fontDark};
    font-size: 18px;
    font-weight: normal;
    margin-left: 30px;

}

@media screen and ( max-width: 450px) {
    .job1 {
        align-items: flex-start;
    }

    .job2 {
        align-items: flex-start;
    }

    .technologies, .role, .company {
        margin: 0 0 0 10px;
    }
}
`;