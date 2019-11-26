import { SET_HIERARCHY, GET_HIERARCHY, CREATE_HIERACHY } from './constants'

const initialState = {
    hierarchy: []
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HIERACHY:
            return { ...state, hierarchy: action.payload }
        default:
            return state
    }


}

export default homePageReducer;