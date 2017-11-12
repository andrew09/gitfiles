import React from 'react';

import { Map } from 'immutable';

import { UserSearchInput } from 'components/user-search-input';
import { Profile } from 'components/profile';

import { Main } from './app.styled.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: new Map(),
        };
    }

    render() {
        const { user } = this.state;

        return (
            <Main>
                <UserSearchInput onChange={user => this.setState({ user })} />
                <Profile user={user} />
            </Main>
        );
    }
}
