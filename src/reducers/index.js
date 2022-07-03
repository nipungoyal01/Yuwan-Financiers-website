import authReducer from './auth.reducer'
import userReducer from './userSignup.reducer'
import newsReducer from './newsletter.reducer'
import queryReducer from './query.reducer'
import quoteReducer from './quote.reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    news: newsReducer,
    query: queryReducer,
    quote: quoteReducer,
    toastr: toastrReducer 
})

export default rootReducers