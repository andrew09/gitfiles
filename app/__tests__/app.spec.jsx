import React from 'react';

import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import App from '../app';
import { UserSearchInput } from 'components/user-search-input';

import { Main } from '../app.styled';

describe('app', () => {
    it('should be a function', () => {
        // Assert
        expect(App).to.be.a('function');
    });

    describe('rendering', () => {
        it('should render', () => {
            // Arrange
            const wrapper = render(<App />);
            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a UserSearchInput component', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.find(UserSearchInput).length).to.equal(1);
        });
    });
});
