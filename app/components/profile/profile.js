import React from 'react';

import ImmutablePropTypes from 'react-immutable-proptypes';

import { Main } from './profile.styled';

const Profile = () => <Main />;

Profile.propTypes = {
    user: ImmutablePropTypes.map.isRequired,
};

export default Profile;
