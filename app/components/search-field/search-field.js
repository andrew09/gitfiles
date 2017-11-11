import React from 'react';
import PropTypes from 'prop-types';

import Search from 'react-icons/lib/fa/search';

import { Main, Container, IconContainer, Input } from './search-field.styled';

const SearchField = props => (
    <Main>
        <Container>
            <IconContainer>
                <Search />
            </IconContainer>
            <Input type="search" id="search" {...props} />
        </Container>
    </Main>
);

SearchField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchField;
