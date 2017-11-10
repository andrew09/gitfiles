import React from 'react';

import { Subject } from 'rxjs';
import Downshift from 'downshift';
import styled from 'styled-components';

import { SearchField } from 'components/search-field';
import { Main, TagsContainer, Tag } from './user-search-input.styled';

export default class UserSearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.getUsers = this.getUsers.bind(this);
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
        const response = await fetch(
            `https://api.github.com/search/users?q=${search}`
        );
        const users = await response.json();

        this.setState({ users: users.items });
    }

    render() {
        const { onChange } = this.props;
        const { users } = this.state;
        const userNames = users.map(user => user.login);

        return (
            <Downshift onChange={onChange}>
                {({
                    getInputProps,
                    getRootProps,
                    getItemProps,
                    isOpen,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                }) => (
                    <Main {...getRootProps({ refKey: 'innerRef' })}>
                        <SearchField
                            {...getInputProps({
                                placeholder: 'Search for Github User...',
                                onChange: this.onFieldChange,
                            })}
                        />
                        {isOpen ? (
                            <TagsContainer>
                                {userNames
                                    .filter(
                                        i =>
                                            !inputValue ||
                                            i
                                                .toLowerCase()
                                                .includes(
                                                    inputValue.toLowerCase()
                                                )
                                    )
                                    .map((item, index) => (
                                        <Tag
                                            {...getItemProps({ item })}
                                            key={item}
                                            index={index}
                                            highlightedIndex={highlightedIndex}
                                        >
                                            {item}
                                        </Tag>
                                    ))}
                            </TagsContainer>
                        ) : null}
                    </Main>
                )}
            </Downshift>
        );
    }
}
