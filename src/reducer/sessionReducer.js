import { SessionActions } from '../actions';

const initialState = {
    loading: false,
    isLogin: false,
    userAuth: {},
    users: []
}

export function sessionReducer( state = initialState, action ) {
    switch (action.type) {
        case SessionActions.LOGIN:
            return {
                ...state,
            }
        case SessionActions.LOGIN_SUCCESSFUL:
            console.log('RED_LOG_SUCC',action)
            return {
                ...state,
                loading: false,
                isLogin: true,
                userAuth: action.payload.user
            }
        case SessionActions.LOGIN_UNSUCCESSFUL:
            return {
                ...state,
                loading: false,
                isLogin: false,
                userAuth: {}
            }
        case SessionActions.GET_USERS:
            return {
                ...state,
            }
        case SessionActions.GET_USERS_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                users: action.payload.users
            }
        case SessionActions.GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                users: []
            }
        case SessionActions.LOGOUT:
            return {
                ...state,
                loading: true
            }
        case SessionActions.LOGOUT_SUCCESSFUL:
            return {
                ...state,
                isLogin: false,
                userAuth: {}
            }
        case SessionActions.LOGOUT_UNSUCCESSFUL:
            return {
                ...state,
                isLogin: false
            }
        default: 
            return state
    }
}
