import styled from 'styled-components';
import User from 'react-icons/lib/fa/user';

import colors from 'utils/colors';

export const Main = styled.div`
    width: 300px;
    height: 85vh;
    background-color: ${colors.blue.medium};
    box-shadow: 0px 3px 15px ${colors.grey.light};
    color: ${colors.offWhite};
    margin-right: 20px;
`;

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
`;

export const NameContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0px;
    border-bottom: 2px solid ${colors.blue.dark};
    align-items: center;
    flex-direction: column;
`;
export const Name = styled.span`
    font-size: 1.3em;
    font-weight: 700;
    line-height: 1.5em;
`;
export const UserName = styled.span`
    font-size: 0.9em;
`;

export const Location = styled.span`
    font-size: 0.9em;
`;

export const FollowersContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
`;
export const UserIcon = styled(User)`
    width: 100px;
    padding-top: 5px;
`;
export const Followers = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 2px solid ${colors.blue.dark};
    font-size: 0.9em;
`;
