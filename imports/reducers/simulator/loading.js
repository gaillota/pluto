import {SIMULATOR_TOGGLE_LOADING_STATE} from '../../constants/action-types'

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case SIMULATOR_TOGGLE_LOADING_STATE:
            return !state
    }

    return state
}

export default loadingReducer
