import styled from "styled-components";
import themes from "@/assets/theme/theme";

export const AboutMe = styled.div`
.about-me{
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    gap: 100px;
    margin: 100px 130px;
}
.picture{
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
}

.text {
    flex-grow: 1;
}

.text h1 {
    font-size: 2em;
    font-weight: 700;
    color: ${(props) => themes[props.theme].primary};
}

.text h2 {
    font-size: 1.5em;
    font-weight: 700;
    color: ${themes.dark.font};
    text-transform: uppercase;

}

.text p {
    font-size: 1.2em;
    font-weight: 400;
    color: ${themes.dark.font};
    text-align: justify;
}

@media (max-width: 1100px){
    .about-me{
        margin: 0 10px;
        flex-direction: column;
        gap: 50px;
    }
}

@media (max-width: 900px){
    .about-me{
        margin: 0 10px;
        flex-direction: column;
        gap: 50px;
    }
    .text{
        text-align: center;
    }
    .text h1 {
        font-size: 1.5em;
    }
    .text h2 {
        font-size: 1.2em;
    }
    .text p {
        font-size: 1em;
    }
}
`;