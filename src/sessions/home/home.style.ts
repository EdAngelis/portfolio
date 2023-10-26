import styled from 'styled-components';
import theme  from '../../assets/theme/theme';

export const HomeContainer = styled.div`
img {
	display: block;
	max-width: 100%;
}

.home {
    display: flex;
    flex-wrap: wrap-reverse;
    margin-top: 50px;
}

.personal-data {
    flex-grow: 1;
    color: ${(props)=> theme[props.theme].primary};
    display: flex;
    flex-direction: column;
    align-items: center ;
}

.avatar {
    max-width: 250px;
}

.personal-data h2 {
    font-size: 2.5em;
    margin: 0 0 10px 0;
    padding: 0;
    font-family: var( --font-title);
}

.links {
    display: flex;
    gap: 20px;
    margin: 30px 0 50px 0;
}

.personal-data a {
    font-size: 1.5em;
}

.links a {
    text-decoration: none;
    background-color: #ffffff;
    color: #0a66c2;
    border-radius: 5px;
    font-family: var( --font-neutral);
    padding: 10px 20px;
    font-size: 1.2em;
    border: 2px solid #0D7CFF;
}

.links a:hover {
    background-color: #0D7CFF;
    color: #fff;
}

.links a + a {
    text-decoration: none;
    color: #000000;
    font-family: var( --font-neutral);
    padding: 10px 20px;
    font-size: 1.2em;
    border: 2px solid #000000;
}

.links a + a:hover {
    background-color: ${(props)=> theme[props.theme].primary};
    color: #fff;
}

.container-skills{
    display: grid;
    gap: 10px;
    max-width: 15em;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "angular-bar angular angular angular angular angular angular"
    "flutter-bar flutter-bar flutter flutter flutter flutter flutter"
    "vue-bar vue-bar vue vue vue vue vue"
    "react-bar react-bar react-bar react-bar react react react"
    "typescript-bar typescript-bar typescript-bar typescript-bar typescript typescript typescript"
    "node-bar node-bar node-bar node-bar node-bar node node"
    "javascript-bar javascript-bar javascript-bar javascript-bar javascript-bar javascript javascript"
    "mongoDb-bar mongoDb-bar mongoDb-bar mongoDb-bar mongoDb-bar mongoDb mongoDb"
    "docker-bar docker-bar docker-bar docker-bar docker docker docker"
    "aws-bar aws-bar aws-bar aws-bar aws aws aws"
    "mySql-bar mySql-bar mySql-bar mySql mySql mySql mySql"
    "git-bar git-bar git-bar git git git git"
    "github-bar github-bar github-bar github github github github"
    ;
}

.technology p {
    font-size: 1em;
    text-align: start;
    margin: 0;
    padding: 0 0 10px 10px;
    color: #0D7CFF;
}

.flutter-bar {
    background-color: ${(props)=> theme[props.theme].primary};
    grid-area: flutter-bar;
}

.flutter{
    grid-area: flutter;
}

.vue {
    grid-area: vue;
}

.angular-bar {
    background-color: ${(props)=> theme[props.theme].primary};
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



.javascript-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: javascript-bar;
}
.typescript-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: typescript-bar;
}
.node-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: node-bar;
}
.react-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: react-bar;
}
.vue-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: vue-bar;
}
.angular{
    grid-area: angular;
}
.mongoDb-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: mongoDb-bar;
}
.mySql-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: mySql-bar;
}
.aws-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: aws-bar;
}
.docker-bar{
    grid-area: docker-bar;
    background: ${(props)=> theme[props.theme].primary};
}
.git-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: git-bar;
}
.github-bar{
    background: ${(props)=> theme[props.theme].primary};
    grid-area: github-bar;
}
`;