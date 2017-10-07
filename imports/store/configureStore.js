import {Tracker} from 'meteor/tracker'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import createReactiveMiddlewares from 'meteor-redux-middlewares'

import rootReducer from '../reducers/root'
import middlewares from '../middlewares'

// const {
//     sources,
//     subscriptions,
// } = createReactiveMiddlewares(Tracker)
const logger = createLogger()

export default configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    // compose(
    applyMiddleware(...middlewares, thunk, logger)
// ),
)
