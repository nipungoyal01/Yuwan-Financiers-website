import axios from "../helpers/axios"
import { signupConstants } from "./constants"

export const signup = (user) => {
    return (dispatch) => {

        dispatch({ type: signupConstants.SIGNUP_REQUEST });
        const res = axios.post(`/signup`, { ...user });

        res.then(response => {
            if(response.status === 201) {
                dispatch({ type: signupConstants.SIGNUP_SUCCESS,
                    payload: { message: response.data.message }
                })
            }
        })

        res.catch((error) => {
            if(error.response) {
                if(error.response.status === 400 || error.response.status === 404) {
                    dispatch({ type: signupConstants.SIGNUP_FAILURE,
                        payload: { error: error.response.data.message || error.response.data.error }
                    })
                }
            }
        })
    }
}