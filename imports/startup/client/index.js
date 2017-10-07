import {Meteor} from 'meteor/meteor'
import React from 'react'
import {render} from 'react-dom'

import configureStore from '../../store/configureStore'
import Root from '../../ui/Root'

import 'bulma/css/bulma.css'
import 'react-toastify/dist/ReactToastify.min.css'

const store = configureStore()

Meteor.startup(() => {
    render(
        <Root store={store}/>,
        document.getElementById('app')
    )
})
