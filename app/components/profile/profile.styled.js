import styled from 'styled-components';

import colors from 'utils/colors';

export const Main = styled.div`
    width: 1200px;
    height: 85vh;
    display: flex;
    margin: 0 auto;
    margin-top: 100px;
    background-color: ${colors.white};
    box-shadow: 0px 3px 15px ${colors.grey.light};
`;
