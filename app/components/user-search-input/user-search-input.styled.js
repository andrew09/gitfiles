import styled from 'styled-components';

import colors from 'utils/colors';

export const Main = styled.div`
    width: 1200px;
    margin: 0 auto;
`;
export const TagsContainer = styled.div`
    width: 800px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: 100px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    max-height: 50vh;
    overflow: scroll;
`;
export const Tag = styled.div`
    background-color: ${({ highlightedIndex, index }) =>
        highlightedIndex === index ? colors.offWhite : colors.white};
    height: 78px;
    border-bottom: 1px solid ${colors.grey.ultraLight};
    cursor: pointer;
`;
