import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './App'
import SimulatorContainer from './simulator/SimulatorContainer'
import Login from './public/auth/Login'

const browserHistory = createBrowserHistory()

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <App>
                <Route exact path='/' component={SimulatorContainer} />
                <Route path='/simulator' component={SimulatorContainer}/>
                <Route path='/login' component={Login}/>
            </App>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
