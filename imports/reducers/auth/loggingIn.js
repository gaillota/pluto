import {LOGGING_IN} from '../../constants/action-types'

const loggingInReducer = (state = false, action) => {
    if (action.type === LOGGING_IN) {
        return action.payload
    }

    return state
}

export default loggingInReducer
