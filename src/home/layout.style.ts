import styled from 'styled-components';
import theme from '../assets/theme/theme';

export const LayoutContainer = styled.div`
    .container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 960px;
        margin: 0 auto;
        gap: 120px;
    }
`;