import styled, { keyframes } from "styled-components";
import theme from "../assets/theme/theme";

const animate = keyframes`
    0% { transform: translateY(-200px); }
    100% { transform: translateY(0px); }
`;

export const JobExperiencesContainer = styled.div`
  .experiences-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.5em;
    margin: 0 100px;
    gap: 50px 0;
  }

  .job {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-weight: bold;
    color: ${(props) => theme[props.theme].primary};
    gap: 10px;
  }

  .job1 {
    /* Specific styles for first job if needed */
  }

  .job2 {
    position: relative;
    bottom: 15px;
  }

  .time-line {
    height: 14px;
    background-color: ${(props) => theme[props.theme].primary};
    width: 100%;
  }

  .date {
    color: ${theme.dark.fontDark};
    font-size: 18px;
    font-weight: normal;
    margin-left: 30px;
  }

  .role {
    color: ${(props) => theme[props.theme].primary};
    font-size: 20px;
    font-weight: normal;
    margin-left: 30px;
  }

  .company {
    color: ${(props) => theme[props.theme].primary};
    font-size: 22px;
    font-weight: bold;
    margin-left: 30px;
  }

  .technologies {
    color: ${theme.dark.fontDark};
    margin-left: 30px;
  }

  @media screen and (max-width: 900px) {
    .experiences-container {
      margin: 0 10px;
      gap: 50px;
      padding: 0;
    }

    .job1 {
      align-items: flex-start;
    }

    .job2 {
      align-items: flex-start;
    }

    .technologies,
    .role,
    .company,
    .date {
      margin: 0 0 0 10px;
    }
  }
`;
