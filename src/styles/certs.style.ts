import styled from 'styled-components';
import theme from '@/assets/theme/theme';

export const CertsContainer = styled.div`
overflow: hidden;
position: relative;
    top: -200px;

.img {
    transition: transform 0.2s;
}

.img:hover {
    transform: scale(1.5);
}`;