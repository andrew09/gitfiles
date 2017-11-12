import React from 'react';

import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import { spy } from 'sinon';
import Downshift from 'downshift';
import { fromJS, Map } from 'immutable';

import { SearchField } from 'components/search-field';
import UserSearchInput from '../user-search-input';
import { Main } from '../user-search-input.styled';

describe('UserSearchInput', () => {
    it('should be a function', () => {
        // Assert
        expect(UserSearchInput).to.be.a('function');
    });

    describe('rendering', () => {
        const userSearchInput = <UserSearchInput onChange={() => null} />;

        it('should render', () => {
            // Arrange
            const wrapper = render(userSearchInput);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });

        it('should render a Downshift component', () => {
            // Arrange
            const wrapper = shallow(userSearchInput);

            // Assert
            expect(wrapper.find(Downshift).length).to.equal(1);
        });

        it('should render a Main styled component', () => {
            // Arrange
            const wrapper = mount(userSearchInput);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });

        it('should render a SearchField component', () => {
            // Arrange
            const wrapper = mount(userSearchInput);

            // Assert
            expect(wrapper.find(SearchField).length).to.equal(1);
        });
    });

    describe('userSelected', () => {
        it('should be a function', () => {
            // Arrange
            const wrapper = shallow(<UserSearchInput onChange={() => null} />);

            // Assert
            expect(wrapper.instance().userSelected).to.be.a('function');
        });

        it('should call onChange prop when the value passed exists in Users', () => {
            // Arrange
            const onChange = spy();
            const wrapper = shallow(<UserSearchInput onChange={onChange} />);
            const state = {
                users: fromJS([
                    {
                        login: 'ABC123',
                    },
                    {
                        login: 'ZXC123',
                    },
                ]),
            };

            wrapper
                .instance()
                .setState(state, () =>
                    wrapper.instance().userSelected('ABC123')
                );

            // Assert
            expect(onChange.calledOnce).to.be.true;
        });

        it('should pass a map to the onChange prop when the value passed exists in Users', () => {
            // Arrange
            const onChange = spy();
            const wrapper = shallow(<UserSearchInput onChange={onChange} />);
            const state = {
                users: fromJS([
                    {
                        login: 'ABC123',
                    },
                    {
                        login: 'ZXC123',
                    },
                ]),
            };

            wrapper
                .instance()
                .setState(state, () =>
                    wrapper.instance().userSelected('ABC123')
                );

            // Assert
            expect(onChange.calledWithExactly(new Map({ login: 'ABC123' }))).to
                .be.true;
        });

        it('should not call onChange prop if the value passed in, does not match any Usernames in state', () => {
            // Arrange
            const onChange = spy();
            const wrapper = shallow(<UserSearchInput onChange={onChange} />);
            const state = {
                users: fromJS([
                    {
                        login: 'ABC123',
                    },
                    {
                        login: 'ZXC123',
                    },
                ]),
            };

            wrapper
                .instance()
                .setState(state, () =>
                    wrapper.instance().userSelected('DJSHSJNGNG')
                );

            // Assert
            expect(onChange.calledOnce).to.be.false;
        });
    });
});
