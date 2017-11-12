import React from 'react';

import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import App from '../app';
import { UserSearchInput } from 'components/user-search-input';
import { Profile } from 'components/profile';

import { Main } from '../app.styled';

describe('app', () => {
    it('should be a function', () => {
        // Assert
        expect(App).to.be.a('function');
    });

    describe('rendering', () => {
        const app = <App />;

        it('should render', () => {
            // Arrange
            const wrapper = render(app);
            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = shallow(app);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a UserSearchInput component', () => {
            // Arrange
            const wrapper = shallow(app);

            // Assert
            expect(wrapper.find(UserSearchInput).length).to.equal(1);
        });

        it('should render a Profile component', () => {
            // Arrange
            const wrapper = shallow(app);

            // Assert
            expect(wrapper.find(Profile).length).to.be.equal(1);
        });
    });
});
