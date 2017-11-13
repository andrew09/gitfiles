import React from 'react';
import PropTypes from 'prop-types';

import { fromJS, Map } from 'immutable';

import { General } from 'components/general';
import { Bio } from 'components/bio';
import { Main, CardsContainer } from './profile.styled';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: new Map(),
        };
    }

    componentDidMount() {
        this.getUserData(this.props.userName);
    }

    componentWillUpdate(nextProps) {
        const { userName: lastUserName } = this.props;
        const { userName: nextUserName } = nextProps;

        if (lastUserName !== nextUserName) this.getUserData(nextProps.userName);
    }

    async getUserData(userName) {
        if (!userName || typeof fetch !== 'function') return;

        const response = await fetch(
            `https://api.github.com/users/${userName}`
        );
        const user = await response.json();

        this.setState({ user: fromJS(user) });
    }

    render() {
        const { user } = this.state;

        return (
            user && (
                <Main>
                    <General user={user} />
                    <CardsContainer>
                        <Bio user={user} />
                        <Bio user={user} />
                        <Bio user={user} />
                    </CardsContainer>
                </Main>
            )
        );
    }
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
};
