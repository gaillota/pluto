import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ToastContainer} from 'react-toastify'

import {logout} from '../actions/auth'

import Navbar from './components/Navbar'

const App = ({children, user, loggingIn, logout}) => (
    <div>
        <Navbar
            user={user}
            loggingIn={loggingIn}
            onLogout={logout}
        />
        {children}
        <ToastContainer />
    </div>

)

App.propTypes = {
    children: PropTypes.node,
    user: PropTypes.object,
    loggingIn: PropTypes.bool,
    logout: PropTypes.func,
}

// Container
const mapStateToProps = (state) => ({
    user: state.currentUser,
    loggingIn: state.auth.loggingIn,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logout
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
