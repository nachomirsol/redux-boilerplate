import { TOGGLE_ITEM } from './constants'

const initialState = {
    toggleStatus: false
}

const ToggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM:
            return {
                ...state,
                toggleStatus: !state.toggleStatus
            }
        default:
            return state
    }
}

export default ToggleReducer