import { SET_COMPANY_NAME } from './constants';

export function setCompanyName(companyName) {

    return {
        type: SET_COMPANY_NAME,
        payload: companyName
    };
}