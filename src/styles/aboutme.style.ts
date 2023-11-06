import styled from "styled-components";
import themes from "@/assets/theme/theme";

export const AboutMe = styled.div`
.about-me{
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 100px 130px;
}
.picture{
    
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
`;