import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {
    Main,
    Avatar,
    NameContainer,
    Name,
    UserName,
    FollowersContainer,
    Followers,
    UserIcon,
    Location,
} from './general.styled';

export default class General extends React.Component {
    render() {
        const { user } = this.props;

        return (
            user && (
                <Main>
                    <Avatar src={user.get('avatar_url')} />
                    <NameContainer>
                        <Name>{user.get('name')}</Name>
                        <UserName>{user.get('login')}</UserName>
                        <Location>{user.get('location')}</Location>
                    </NameContainer>
                    <FollowersContainer>
                        <UserIcon size={24} />
                        <Followers>
                            <span>
                                <strong>Following:</strong>{' '}
                                {user.get('following')}
                            </span>
                            <span>
                                <strong>Followers:</strong>{' '}
                                {user.get('followers')}
                            </span>
                        </Followers>
                    </FollowersContainer>
                </Main>
            )
        );
    }
}

General.propTypes = {
    user: ImmutablePropTypes.map.isRequired,
};
