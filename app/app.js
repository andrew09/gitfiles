import React from 'react';

import { UserSearchInput } from 'components/user-search-input';

import { Main } from './app.styled.js';

export default class App extends React.Component {
    render() {
        return (
            <Main>
                <UserSearchInput
                    items={['apple', 'orange', 'carrot']}
                    onChange={selectedItem => console.log(selectedItem)}
                />
            </Main>
        );
    }
}
