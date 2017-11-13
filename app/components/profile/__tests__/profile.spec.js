import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Profile from '../profile';

import { Main, Avatar } from '../profile.styled';

describe('profile', () => {
    it('should be a function', () => {
        // Assert
        expect(Profile).to.be.a('function');
    });

    describe('rendering', () => {
        const profile = <Profile userName="andrew09" />;

        it('should render', () => {
            // Arrange
            const wrapper = mount(profile);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = mount(profile);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render an Avatar styled component', () => {
            // Arrange
            const wrapper = mount(profile);

            // Assert
            expect(wrapper.find(Avatar).length).to.equal(1);
        });
    });
});
