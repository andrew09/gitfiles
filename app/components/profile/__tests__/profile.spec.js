import React from 'react';

import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import { Map } from 'immutable';

import Profile from '../profile';

import { Main } from '../profile.styled';

describe('profile', () => {
    it('should be a function', () => {
        // Assert
        expect(Profile).to.be.a('function');
    });

    describe('rendering', () => {
        const profile = <Profile user={new Map()} />;

        it('should render', () => {
            // Arrange
            const wrapper = render(profile);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = shallow(profile);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });
    });
});
