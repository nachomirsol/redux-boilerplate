import { SET_COMPANY_NAME } from './constants';

const initialState = {
    companyName: 'Global Omnium',
};

const SelectCompanyPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANY_NAME:
            return { ...state, companyName: action.payload }
        default:
            return state;
    }
}

export default SelectCompanyPageReducer