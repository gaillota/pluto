import {SIMULATOR_UPDATE_RESULT} from '../../constants/action-types'
import {toggleLoadingState} from '../../actions/simulator'
import {compute} from '../../core/incomes-calculator'

const resultMiddleware = ({getState, dispatch}) => (next) => (action) => {
    if (action.type === SIMULATOR_UPDATE_RESULT) {
        dispatch(toggleLoadingState())
        const result = compute(getState().simulator.fields)
        action = {
            ...action,
            payload: {
                result
            }
        }
        next(action)
        dispatch(toggleLoadingState())

        return
    }

    next(action)
}

export default resultMiddleware
