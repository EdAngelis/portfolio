import styled from 'styled-components';
import theme from '@/assets/theme/theme';

export const CertsContainer = styled.div`
background-color: ${(props)=> theme[props.theme].darkGray};
padding: 70px 50px;
h1 {
    color: #ffffff;
}
.certifications{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.img {
    transition: transform 0.2s;
}

.img:hover {
    transform: scale(1.5);
}`;