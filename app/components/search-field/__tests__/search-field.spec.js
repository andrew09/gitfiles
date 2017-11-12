import React from 'react';

import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Search from 'react-icons/lib/fa/search';

import SearchField from '../search-field';
import { Main, Container, IconContainer, Input } from '../search-field.styled';

describe('SearchField', () => {
    it('should be a function', () => {
        // Assert
        expect(SearchField).to.be.a('function');
    });

    describe('rendering', () => {
        const searchField = (
            <SearchField placeholder="test" onChange={() => null} />
        );

        it('should render', () => {
            // Arrange
            const wrapper = render(searchField);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = shallow(searchField);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a Container styled component', () => {
            // Arrange
            const wrapper = shallow(searchField);

            // Assert
            expect(wrapper.find(Container).length).to.equal(1);
        });

        it('should render an IconContainer styled component', () => {
            // Arrange
            const wrapper = shallow(searchField);

            // Assert
            expect(wrapper.find(IconContainer).length).to.equal(1);
        });

        it('should render a Search FontAwesome component', () => {
            // Arrange
            const wrapper = shallow(searchField);

            // Assert
            expect(wrapper.find(Search).length).to.equal(1);
        });

        it('should render an Input styled component', () => {
            // Arrange
            const wrapper = shallow(searchField);

            // Assert
            expect(wrapper.find(Input).length).to.equal(1);
        });
    });

    describe('props', () => {
        it('should call onChange prop when typed in', () => {
            // Arrange
            const onChange = spy();
            const wrapper = shallow(
                <SearchField placeholder="test" onChange={onChange} />
            );

            // Act
            wrapper.find(Input).simulate('change');

            // Assert
            expect(onChange.calledOnce).to.be.true;
        });
    });
});
