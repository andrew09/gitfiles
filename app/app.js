import React from 'react';

import { UserSearchInput } from 'components/user-search-input';
import { Profile } from 'components/profile';

import { Main } from './app.styled.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
        };
    }

    render() {
        const { userName } = this.state;

        return (
            <Main>
                <UserSearchInput
                    onChange={userName => this.setState({ userName })}
                />
                {!!userName && <Profile userName={userName} />}
            </Main>
        );
    }
}
