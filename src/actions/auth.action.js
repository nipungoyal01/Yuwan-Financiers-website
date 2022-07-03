import axios from '../helpers/axios'
import { authConstants } from './constants'

export const login = (user) => {
   
    return (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = axios.post('/signin', { ...user });

        res.then(response => {
            if (response.status === 200) {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({ type: authConstants.LOGIN_SUCCESS,
                    payload: { token, user }
                })
            }
        })

        res.catch((error) => {
            if(error.response) {
                if(error.response.status === 400 || error.response.status === 404) {
                    dispatch({ type: authConstants.LOGIN_FAILURE,
                        payload: { message: error.response.data.message || error.response.data.error }
                    })
                }
            }
        })
    }
}

export const isLoggedin = () => {
    return async dispatch => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"))

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, user }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed To Login' }
            })
        }
    }
}

export const logout = () => {
    return dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST })
        const res = axios.post(`/signout`)

        res.then(response => {
            if (response.status === 200) {
                localStorage.clear();
                dispatch({ type: authConstants.LOGOUT_SUCCESS })
            }
        })

        res.catch((error) => {
            if(error.response) {
                dispatch({
                    type: authConstants.LOGOUT_FAILURE,
                    payload: { error: error.response.data.error }
                })
            }
        })
    }
}