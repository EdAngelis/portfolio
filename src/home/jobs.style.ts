import styled from 'styled-components';
import theme from '../assets/theme/theme';

export const JobsContainer = styled.div`
.experiences {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5em;
    background-color: ${(props)=> theme[props.theme].darkGray};
    padding: 80px 0;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;

}

.jobs-section {
    margin: 0;
}

.jobs-section h1 {
    text-align: center;
    font-family: var( --font-title);
    color: #ffffff;
    margin-top: 0px;
    font-size: 2em;

}

.job1{
    display: flex;
    flex-grow: 1;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
    color: #0D7CFF;
}

.job1-date {
    border-bottom: 10px solid #0D7CFF;
    width: 100%;
}

.job2 {
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    color: ${(props)=> theme[props.theme].primary};
}

.job2-date {
    border-bottom: 10px solid ${(props)=> theme[props.theme].primary};
    width: 100%;
}

@media screen and ( max-width: 450px) {
    .job1 {
        align-items: flex-start;
    }

    .job2 {
        align-items: flex-start;
    }

    .job1-technologies, .job1-role, .job1-company {
        margin: 0 0 0 10px;
    }

    
    .job2-technologies, .job2-role, .job2-company {
        margin: 0 0 0 10px;
    }
}
`;