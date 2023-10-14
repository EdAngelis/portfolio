import styled from 'styled-components';
import themes from '@/assets/theme/theme';

export const CertsContainer = styled.div`
.certifications{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.certifications img {
    max-width: 200px;
    flex-grow: 1;
    transition: transform 0.2s;

}

.certifications img:hover {
    transform: scale(1.5);
}`;