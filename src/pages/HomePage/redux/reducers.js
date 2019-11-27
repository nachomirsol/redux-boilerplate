import { SET_HIERARCHY, GET_HIERARCHY, CREATE_HIERARCHY } from './constants'

const initialState = {
    hierarchy: []
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HIERARCHY:
            return { ...state, hierarchy: action.payload }
        default:
            return state
    }


}

export default homePageReducer;