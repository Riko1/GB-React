import {
    CREATE_USER_END,
    CREATE_USER_START,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    LOAD_USERS_END,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE,
    LOAD_USERS_START
} from '../constants/users'

export default function usersReducer(state = {
    users: [],
    isLoading: false,
    isLoaded: false,
    error: null
}, action) {
    switch (action.type) {
        case CREATE_USER_START:
            {
                state = {...state,
                    isLoading: true
                };
                break;
            }
        case CREATE_USER_END:
            {
                state = {...state,
                    isLoading: false
                };
                break;
            }
        case CREATE_USER_SUCCESS:
            {
                state = {...state,
                    users: action.payload,
                    isLoaded: true
                };
                break;
            }
        case CREATE_USER_FAILURE:
            {
                state = {...state,
                    error: action.payload,
                    isLoaded: false
                };
                break;
            }
        case LOAD_USERS_START:
            {
                state = {...state,
                    isLoading: true
                };
                break;
            }
        case LOAD_USERS_END:
            {
                state = {...state,
                    isLoading: false
                };
                break;
            }
        case LOAD_USERS_SUCCESS:
            {
                state = {...state,
                    users: action.payload,
                    isLoaded: true
                };
                break;
            }
        case LOAD_USERS_FAILURE:
            {
                state = {...state,
                    error: action.payload,
                    isLoaded: false
                };
                break;
            }
    }

    return state;
}