import styled from 'styled-components';
import theme from '../assets/theme/theme';

export const JobsContainer = styled.div`
.experiences {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5em;

}

.jobs-section {
    margin: 0 0 100px 0;
}

.jobs-section h1 {
    text-align: center;
    padding-bottom: 20px;
    font-family: 'Irish Grover', cursive;
    color: #ffffff;

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
    color: #8E00D1;
}

.job2-date {
    border-bottom: 10px solid #8E00D1;
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