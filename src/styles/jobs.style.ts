 import styled, {keyframes} from 'styled-components';
import theme from '../assets/theme/theme';

const animate = keyframes`
    0% { transform: translateY(-200px); }
    100% { transform: translateY(0px); }

`;

export const JobsContainer = styled.div`
.experiences-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5em;
    margin: 0 100px;
    gap: 50px 0;
}

.jobs-section {
    margin-top: 100px;
}

.top {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 130px;
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

@media screen and ( max-width: 900px) {
    .experiences-container {
        margin: 0 10px;
        gap: 50px;
        padding: 0;
}

.top{
    margin: 0 10px 50px 10px;
    text-align: center;
    justify-content: center;
    gap: 20px;
}

.top p {
    text-align: justify;
}
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