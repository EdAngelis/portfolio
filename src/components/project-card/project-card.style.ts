import styled from 'styled-components';
import theme from '../../assets/theme/theme';

interface IProjectCard {
    theme: string;

}

export const Container = styled.div<IProjectCard>`
    padding-top: 70px;
    overflow-y: hidden;
    .container {
        position: relative;
        background-repeat: no-repeat;
        background-size: contain;
        height: 300px;
        width: 400px;
        
    }

    .card {
        position: relative;
        top: 200px;
        border-radius: 20px 20px 0 0 ;
        background-color: ${theme.dark.primary};
        box-shadow: -5px 0 20px #000000;
        transition: 0.3s;
        width: 100%;
        min-height: 110%;
        padding: 20px 0;
        
    }

    .container:hover .card {
        top: -70px;
        transition: 0.3s;
        
    }

    .container:hover .img-cover{
        opacity: 0;
        transition: 0.15s;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 10px;
        /* justify-content: center; */
        margin: 0 40px;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => {
            type ObjectIndex = keyof typeof theme;
            return theme[props.theme as ObjectIndex].primary
            }};
        font-weight: bold;
    }

    .technologies {
        font-weight: 200;
        color: ${theme.dark.fontDark};
    }

    .links {
        text-align: center;
        border: 2px solid ${theme.dark.font};
        background-color: ${theme.dark.background};
        border-radius: 25px;
        color: ${theme.dark.font};
        text-decoration: none;
        
    }
    .links a{
        color: ${theme.dark.font};
        text-decoration: none;
    }

    .links a:hover{
        opacity: 0.8;
    }

    .data {
        margin-left: 10px;
        font-weight: 200;
        color: ${theme.dark.fontDark};
    }

    .image {
        border-radius: 15px;
    }

    @media (max-width: 900px) {
        .container{
            width: 250px;
            height: 200px;
            
        }

        .container:hover .card {
        top: -70px;
        transition: 0.3s;
        
    }

        .card {
        position: relative;
        top: 100px;
        border-radius: 20px 20px 0 0 ;
        background-color: ${theme.dark.primary};
        box-shadow: -5px 0 20px #000000;
        transition: 0.3s;
        width: 100%;
        min-height: 110%;
        padding: 20px 0;
        }
    }
`;