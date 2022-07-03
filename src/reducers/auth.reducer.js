/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from '../actions/constants'

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: ''
    },
    error: null,
    authenticating: false,
    authenticate: false,
    message: '',
    loading: false,
    success: false
}

export default (state = initState, action) => {
    // console.log(action)
    switch(action.type) {
        case authConstants.LOGIN_REQUEST:
          state = {
              ...state,
              authenticating: true,
              loading: true
          }
        break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticating: false,
                authenticate: true,
                loading: "Done"
            }
        break;

        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticating: false,
                error: action.payload.message,
            }
        break;

        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
        break;

        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
                loading: false,
                success: true
            }
        break;

        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.message
            }
        break;

        default: return state;
    }

    return state;
}