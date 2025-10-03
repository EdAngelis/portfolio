import styled, { keyframes } from "styled-components";
import theme from "../assets/theme/theme";

const blinking = keyframes`
    0% {
        opacity: 0.2;
        }
    50% {
         opacity: 0.8;
    }    
   100% {
       opacity: 0.2;
       }
       `;
export const HomeContainer = styled.div`
  position: relative;
  .background {
    position: absolute;
    background-image: url("objects.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    animation-name: ${blinking};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .home {
    position: relative;
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 20px;
    z-index: 2;
  }

  .personal-data {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-content: center;
    margin-top: 100px;
  }

  .typewriter-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .type-writer {
    display: inline;
    background-color: red;
  }

  .data {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: ${theme.dark.font};
    max-width: 550px;
  }

  .avatar {
    max-width: 250px;
  }

  .data h2 {
    font-size: 2.5em;
    margin: 0 0 10px 0;
    font-family: var(--font-neutral);
  }

  .links {
    display: flex;
    gap: 20px;
    margin: 30px 0 50px 0;
  }

  .data span {
    font-size: 1.5em;
  }

  .links a {
    text-decoration: none;
    background-color: ${theme.dark.backgroundWhiteTransparent};
    color: ${theme.dark.font};
    border-radius: 20px;
    font-family: var(--font-neutral);
    padding: 10px 20px;
    font-size: 20px;
    border: 2px solid ${theme.dark.font};
  }

  .links a:hover {
    opacity: 0.7;
  }

  .links a + a {
    text-decoration: none;
    color: #000000;
    font-family: var(--font-neutral);
    padding: 10px 20px;
    font-size: 1.2em;
    border: 2px solid #000000;
  }

  .links a + a:hover {
    opacity: 0.7;
  }

  .container-skills {
    display: grid;
    gap: 10px;
    max-width: 15em;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "angular-bar angular angular angular angular angular angular"
      "flutter-bar flutter-bar flutter flutter flutter flutter flutter"
      "vue-bar vue-bar vue vue vue vue vue"
      "mongoDb-bar mongoDb-bar mongoDb-bar mongoDb-bar mongoDb mongoDb mongoDb"
      "typescript-bar typescript-bar typescript-bar typescript-bar typescript typescript typescript"
      "node-bar node-bar node-bar node-bar node-bar node node"
      "react-bar react-bar react-bar react-bar react-bar react react"
      "javascript-bar javascript-bar javascript-bar javascript-bar javascript-bar javascript javascript"
      "react-native-bar react-native-bar react-native-bar react-native-bar react-native react-native react-native"
      "docker-bar docker-bar docker-bar docker-bar docker docker docker"
      "aws-bar aws-bar aws-bar aws-bar aws aws aws"
      "mySql-bar mySql-bar mySql-bar mySql mySql mySql mySql"
      "git-bar git-bar git-bar git git git git"
      "github-bar github-bar github-bar github github github github";
  }

  .technology p {
    font-size: 1.2em;
    text-align: start;
    height: 35px;
    margin: 0;
    padding: 0 0 10px 10px;
    color: ${theme.dark.font};
  }

  .flutter-bar {
    background-color: ${theme.dark.primary};
    grid-area: flutter-bar;
  }

  .flutter {
    grid-area: flutter;
  }

  .react-native-bar {
    background-color: ${theme.dark.primary};
    grid-area: react-native-bar;
  }
  .react-native {
    grid-area: react-native;
  }

  .vue {
    grid-area: vue;
  }

  .angular-bar {
    background-color: ${theme.dark.primary};
    grid-area: angular-bar;
  }

  .react {
    grid-area: react;
  }

  .typescript {
    grid-area: typescript;
  }

  .node {
    grid-area: node;
  }

  .javascript {
    grid-area: javascript;
  }

  .mongoDb {
    grid-area: mongoDb;
  }

  .github {
    grid-area: github;
  }

  .aws {
    grid-area: aws;
  }

  .git {
    grid-area: git;
  }

  .mySql {
    grid-area: mySql;
  }

  .docker {
    grid-area: docker;
  }

  .javascript-bar {
    background-color: ${(props) => theme[props.theme].primary};

    grid-area: javascript-bar;
  }
  .typescript-bar {
    background: ${theme.dark.primary};
    grid-area: typescript-bar;
  }
  .node-bar {
    background-color: ${(props) => theme[props.theme].primary};

    grid-area: node-bar;
  }
  .react-bar {
    background-color: ${(props) => theme[props.theme].primary};
    grid-area: react-bar;
  }
  .vue-bar {
    background: ${theme.dark.primary};
    grid-area: vue-bar;
  }
  .angular {
    grid-area: angular;
  }
  .mongoDb-bar {
    background: ${theme.dark.primary};
    grid-area: mongoDb-bar;
  }
  .mySql-bar {
    background: ${theme.dark.primary};
    grid-area: mySql-bar;
  }
  .aws-bar {
    background: ${theme.dark.primary};
    grid-area: aws-bar;
  }
  .docker-bar {
    grid-area: docker-bar;
    background: ${theme.dark.primary};
  }
  .git-bar {
    background: ${theme.dark.primary};
    grid-area: git-bar;
  }
  .github-bar {
    background: ${theme.dark.primary};
    grid-area: github-bar;
  }

  @media (max-width: 900px) {
    .home {
      flex-wrap: wrap-reverse;
      display: flex;
      gap: 20px;
      margin-top: 50px;
    }

    .personal-data {
      margin-top: 0;
      margin-bottom: 100px;
    }
    .data {
      display: flex;
      flex-wrap: wrap;
      color: ${theme.dark.font};
      text-align: center;
    }
    .data h2 {
      font-size: 2em;
      text-align: center;
      max-width: 300px;
    }

    .data span {
      font-size: 1.5em;
      max-width: 300px;
    }
    .home {
      background-image: none;
    }
    .links {
      flex-direction: column;
      align-items: center;
    }
  }

  /* @media (max-width: 950px) {
        .data {
           flex-basis: 500px;
        }
    } */
`;
