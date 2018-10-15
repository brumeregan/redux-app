// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Pages
import Private from './Private';
import Public from './Public';
import { Loading } from '../components';

import { authActions } from '../bus/auth/actions';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized:   state.auth.get('isInitialized'),
    };
};

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
    // authenticateAsync: authActions.authenticateAsync,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount () {
        this.props.initializeAsync();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}
