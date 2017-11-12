import styled from 'styled-components';

import colors from 'utils/colors';

export const Main = styled.div`
    position: relative;
    top: 50px;
    margin: 0px auto;
    width: 800px;
    height: 50px;
    z-index: 1;
`;

export const Container = styled.div`
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
`;
export const IconContainer = styled.span`
    position: absolute;
    top: 50%;
    margin-left: 17px;
    margin-top: 14px;
    z-index: 1;
    color: ${colors.grey.medium};
`;
export const Input = styled.input`
    width: 800px;
    height: 50px;
    background: ${colors.white};
    border: none;
    font-size: 0.9em;
    float: left;
    color: ${colors.grey.medium};
    padding-left: 45px;
    font-family: 'Montserrat', sans-serif;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    box-shadow: 0px 3px 15px ${colors.grey.light};

    &::-webkit-input-placeholder {
        color: ${colors.grey.medium};
    }
    &:-moz-placeholder {
        color: ${colors.grey.medium};
    }
    &::-moz-placeholder {
        color: ${colors.grey.medium};
    }
    &:-ms-input-placeholder {
        color: ${colors.grey.medium};
    }
    &:focus {
        outline: none;
        border: 2px solid ${colors.blue};
    }
    &:active {
        outline: none;
        border: 2px solid ${colors.blue};
    }
`;
