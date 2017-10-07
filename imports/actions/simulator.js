import {SIMULATOR_FIELD_CHANGED, SIMULATOR_UPDATE_RESULT, SIMULATOR_TOGGLE_LOADING_STATE} from '../constants/action-types'

export const updateFieldValue = (name, value) => ({
    type: SIMULATOR_FIELD_CHANGED,
    payload: {
        name,
        value
    }
})

export const toggleLoadingState = (state) => ({
    type: SIMULATOR_TOGGLE_LOADING_STATE
})

export const updateResult = () => ({
    type: SIMULATOR_UPDATE_RESULT
})
