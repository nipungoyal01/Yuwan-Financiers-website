import { quoteConstants } from "../actions/constants"

/* eslint-disable import/no-anonymous-default-export */
const initState = {
    message: '',
    error: '',
    loading: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case quoteConstants.QUOTE_REQUEST: 
            state = {
                ...state,
                loading: true
            }
        break;

        case quoteConstants.QUOTE_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                loading: "Done"
            }
        break;

        case quoteConstants.QUOTE_FAILURE:
            state = {
                ...initState,
                error: action.payload.message,
                loading: "Failed"
            }
        break;

        default: return state;
    }

    return state;
}