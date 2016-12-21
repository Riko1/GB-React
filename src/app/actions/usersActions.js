import {
    CREATE_USER_END,
    CREATE_USER_START,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    LOAD_USERS_END,
    LOAD_USERS_START,
    LOAD_USERS_FAILURE,
    LOAD_USERS_SUCCESS
} from '../constants/users';
import axios from 'axios';

export function createUser(user) {
    return function (dispatch) {
        dispatch({ type: CREATE_USER_START });

        let url = 'http://localhost:8081/api/users'; //'https://jsonplaceholder.typicode.com/users'

        axios.post(url, user)
             .then((response) => {
                 dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
                 dispatch({ type: CREATE_USER_END });
             })
             .catch((err) => {
                 dispatch({ type: CREATE_USER_FAILURE, payload: err });
                 dispatch({ type: CREATE_USER_END });
             })
    }
}

export function loadUsers() {
    return function (dispatch) {
        dispatch({ type: LOAD_USERS_START });

        let url = 'http://localhost:8081/api/users'; //'https://jsonplaceholder.typicode.com/users'

        axios.get(url)
             .then((response) => {
                 dispatch({ type: LOAD_USERS_SUCCESS, payload: response.data });
                 dispatch({ type: LOAD_USERS_END });
             })
             .catch((err) => {
                 dispatch({ type: LOAD_USERS_FAILURE, payload: err });
                 dispatch({ type: LOAD_USERS_END });
             })
    }
}