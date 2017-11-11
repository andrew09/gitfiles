import React from 'react';

import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import Downshift from 'downshift';

import { SearchField } from 'components/search-field';
import UserSearchInput from '../user-search-input';
import { Main, TagsContainer } from '../user-search-input.styled';

describe('UserSearchInput', () => {
    it('should be a function', () => {
        // Assert
        expect(UserSearchInput).to.be.a('function');
    });

    describe('rendering', () => {
        it('should render', () => {
            // Arrange
            const wrapper = render(<UserSearchInput />);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Downshift component', () => {
            // Arrange
            const wrapper = shallow(<UserSearchInput />);

            // Assert
            expect(wrapper.find(Downshift).length).to.equal(1);
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = mount(<UserSearchInput />);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a SearchField component', () => {
            // Arrange
            const wrapper = mount(<UserSearchInput />);

            // Assert
            expect(wrapper.find(SearchField).length).to.equal(1);
        });
    });
});
