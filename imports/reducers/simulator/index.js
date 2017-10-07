import {combineReducers} from 'redux'

import fieldsReducer from './fields'
import resultReducer from './result'
import loadingReducer from './loading'

export default combineReducers({
    fields: fieldsReducer,
    result: resultReducer,
    loading: loadingReducer
})
