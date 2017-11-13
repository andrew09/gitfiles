import React from 'react';

import { mount } from 'enzyme';
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
            const wrapper = mount(app);
            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = mount(app);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a UserSearchInput component', () => {
            // Arrange
            const wrapper = mount(app);

            // Assert
            expect(wrapper.find(UserSearchInput).length).to.equal(1);
        });

        it('should render a Profile component if a User is selected', () => {
            // Arrange
            const wrapper = mount(app);
            wrapper.setState({ userName: 'andrew09' });

            // Assert
            expect(wrapper.find(Profile).length).to.be.equal(1);
        });

        it('should not render a Profile component is a User is not selected', () => {
            // Arrange
            const wrapper = mount(app);

            // Assert
            expect(wrapper.find(Profile).length).to.be.equal(0);
        });
    });
});
