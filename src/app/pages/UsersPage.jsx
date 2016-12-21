import React from 'react';
import { Link, browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { loadUsers, createUser } from '../actions/usersActions';

@connect((store) => {
    return {
        users: store.users.users,
        isLoading: store.users.isLoading,
        isLoaded: store.users.isLoaded,
        //error: store.users.error.message
    };
})
export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        let toDispatch = loadUsers();

        this.props.dispatch(toDispatch);
        this.create = this.create.bind(this);
    }

    create() {
        let user = {
            name: 'asda',
            login: 'asdsa',
            age: 1231,
            isFired: false
        };
        
        let toDispath = createUser(user);

        this.props.dispatch(toDispath);
    }

    render() {
        let users = (this.props.users || []).map((user, index) => {
            return (
                <div key={index}>
                    <div>{ user._id }</div>
                    <div>{ user.name }</div>
                    <div>{ user.login }</div>
                    <div>{ user.age }</div>
                    <div>{ user.isFired }</div>
                </div>
            );
        });

        return (
            <div class="container-fluid">
                { users.length ? users : "No users!" }
                <button type="button" onClick={ this.create }>
                    AddUser
                </button>
            </div>
        );
    }
}