import React from 'react';

import { UserSearchInput } from 'components/user-search-input';

import { Main } from './app.styled.js';

export default () => (
    <Main>
        <UserSearchInput onChange={console.log} />
    </Main>
);
