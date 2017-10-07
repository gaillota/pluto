import {combineReducers} from 'redux'

import loggingInReducer from './loggingIn'

export default combineReducers({
    loggingIn: loggingInReducer,
})
