import React from 'react';

import Search from 'react-icons/lib/fa/search';

import {
    SearchBox,
    Container1,
    IconContainer,
    Input,
} from './search-field.styled';

export default props => (
    <SearchBox>
        <Container1>
            <IconContainer>
                <Search />
            </IconContainer>
            <Input type="search" id="search" {...props} />
        </Container1>
    </SearchBox>
);
