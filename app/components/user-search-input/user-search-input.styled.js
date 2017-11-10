import styled from 'styled-components';

import colors from 'utils/colors';

export const Main = styled.div`
    width: 1200px;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
`;
export const TagsContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    position: relative;
    top: 49px;
    border: 2px solid ${colors.grey.light};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
`;
export const Tag = styled.div`
    background-color: ${({ highlightedIndex, index }) =>
        highlightedIndex === index ? colors.grey.light : colors.white};
`;
