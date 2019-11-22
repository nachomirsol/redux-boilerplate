/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
// import jwt_decode from 'jsonwebtoken';
import {
    SET_LOGIN_PENDING,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_ERROR,
    REFRESH_LOGIN,
    SET_USER_NAME,

} from './constants';

const initialState = {
    userName: null,
    userToken: null,
    userTokenDeserialized: null,
    isLoginPending: false,
    loginError: null,
    isRefreshing: false,
};

const loginPageReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            draft.isLoginPending = action.isLoginPending;
            break;
        case SET_LOGIN_SUCCESS:
            // const userTokenDeserializedLoginSuccess = jwt_decode(action.userToken.data.access_token)
            // let rolesDictionaryLoginSuccess = {};
            // userTokenDeserializedLoginSuccess.authorities.forEach(role => {
            //     rolesDictionaryLoginSuccess[role] = true;
            // });

            draft.userToken = action.userToken.data
            draft.userName = action.userToken.userName;
            // draft.userTokenDeserialized = jwt_decode(action.userToken.data.access_token);
            // draft.rolesDictionary = rolesDictionaryLoginSuccess;
            break;
        case SET_LOGIN_ERROR:
            draft.loginError = action.loginError;
            break;
        case REFRESH_LOGIN:
            draft.userToken = action.newToken;
            // draft.userTokenDeserialized = jwt_decode(action.newToken.access_token);
            draft.isRefreshing = true;
            break;
        case SET_USER_NAME:
            draft.userName = action.userName;
            break;
        default:
            return draft;
    }
});

export default loginPageReducer;
