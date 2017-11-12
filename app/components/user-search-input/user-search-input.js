import React from 'react';
import PropTypes from 'prop-types';

import { Subject } from 'rxjs';
import Downshift from 'downshift';
import { fromJS, List } from 'immutable';

import { SearchField } from 'components/search-field';
import { Main, TagsContainer, Tag } from './user-search-input.styled';

export default class UserSearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: new List(),
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.userSelected = this.userSelected.bind(this);
    }

    componentDidMount() {
        this.fieldChange$ = new Subject();
        this.fieldChange$.debounceTime(1000).subscribe(this.getUsers);
    }

    componentWillUnmount() {
        this.fieldChange$.unsubscribe();
    }

    onFieldChange(e) {
        e.persist();
        this.fieldChange$.next(e);
    }

    async getUsers(e) {
        const search = e.target.value;

        if (!search) return;

        const response = await fetch(
            `https://api.github.com/search/users?q=${search}`
        );
        const users = await response.json();

        this.setState({ users: fromJS(users.items) });
    }

    userSelected(userName) {
        const { users } = this.state;
        const { onChange } = this.props;
        const user = users.find(user => user.get('login') === userName);

        if (user) onChange(user);
    }

    getUserTags(getItemProps, inputValue, highlightedIndex) {
        const { users } = this.state;

        return users
            .filter(
                user =>
                    !inputValue ||
                    user
                        .get('login')
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
            )
            .map((user, index) => (
                <Tag
                    {...getItemProps({ item: user.get('login') })}
                    key={user.get('login')}
                    index={index}
                    highlightedIndex={highlightedIndex}
                >
                    {user.get('login')}
                </Tag>
            ));
    }

    render() {
        return (
            <Downshift onChange={this.userSelected}>
                {({
                    getInputProps,
                    getRootProps,
                    isOpen,
                    getItemProps,
                    inputValue,
                    highlightedIndex,
                }) => (
                    <Main {...getRootProps({ refKey: 'innerRef' })}>
                        <SearchField
                            {...getInputProps({
                                placeholder: 'Search for Github User...',
                                onChange: this.onFieldChange,
                            })}
                        />
                        {isOpen && (
                            <TagsContainer>
                                {this.getUserTags(
                                    getItemProps,
                                    inputValue,
                                    highlightedIndex
                                )}
                            </TagsContainer>
                        )}
                    </Main>
                )}
            </Downshift>
        );
    }
}

UserSearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};
