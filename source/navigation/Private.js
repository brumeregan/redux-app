// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


// Pages
import { Profile, NewPassword, Feed } from '../pages';

import { book } from './book';

// WS
import { socket } from '../init/socket';

export default class Private extends Component {
    componentDidMount () {
        const { listenPosts } = this.props;


        listenPosts();
    }

    componentWillUnmount () {
        socket.removeListener('create');
    }

    render () {

        return (
            <Switch>
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Route component = { Feed } path = { book.feed } />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
