import {combineReducers} from 'redux'

import authReducer from './auth'
import simulatorReducer from './simulator'

export default combineReducers({
    auth: authReducer,
    simulator: simulatorReducer
})
