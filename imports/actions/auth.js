import {Meteor} from 'meteor/meteor'

export const loginWithPassword = (email, password) => (dispatch) => {
    Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
            // Handle UI error
        }
    })
}

export const logout = () => (dispatch) => {
    Meteor.logout(err => {
        if (err) {
            // Handle UI
        }
    })
}
