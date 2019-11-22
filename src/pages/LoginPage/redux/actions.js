/*
 *
 * LoginPage actions
 *
 */

import moment from "moment";

import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  REFRESH_LOGIN,
  SET_USER_NAME,
  MAX_TIMEOUT
} from "./constants";

function fetchToken(fetchUrl, actionSuccess, actionFailure, options) {
  let fetchConfig = {
    method: "POST",
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_API_BASIC_AUTH}`,
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  };

  let formBody = [];
  for (var property in options) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(options[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");
  fetchConfig["body"] = formBody;

  fetch(fetchUrl, fetchConfig)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .catch(error => {
      console.log("error", error);
      actionFailure();
    })
    .then(
      data => {
        actionSuccess(data);
      },
      reason => {
        // FAILIURE
        console.log("error reason", reason);
        actionFailure();
      }
    );
}

// function getTokenApi(email, password, callback) {
//   fetchToken(
//     `${process.env.REACT_APP_SECURITY_API}/oauth/token`,
//     authData => {
//       return callback(false, authData);
//     },
//     authData => {
//       console.log("ERROR TOKEN", authData);
//       return callback(true, null);
//     },
//     { grant_type: "password", username: email, password: password }
//   );
// }

function calculateSensibleTimeout(totalTimeout) {
  //We should multiply by 1000 to transform totalTimeout
  //to miliseconds, but we multiply by 750 so we refresh the token
  //before it expires
  return Math.min(Math.max(totalTimeout * 750, 200), MAX_TIMEOUT);
}

export function getRefreshTokenApi(
  refresh_token,
  timeout,
  onRefreshLogin,
  failCounter = 0
) {
  setTimeout(() => {
    console.log("fetchToken", refresh_token, "onRefreshLogin", onRefreshLogin);
    fetchToken(
      `${process.env.REACT_APP_SECURITY_API}/oauth/token`,
      authData => {
        if (authData && authData.error === undefined) {
          authData.expiresTimeStamp = moment(
            moment().add(authData.expires_in, "seconds")
          ).unix();
          localStorage.setItem("userToken", JSON.stringify(authData));
          onRefreshLogin(authData);
          getRefreshTokenApi(
            authData.refresh_token,
            authData.expires_in,
            onRefreshLogin
          );
        } else if (authData && authData.error !== undefined) {
          localStorage.removeItem("userToken");
          window.location.href = `/login/`;
        }
      },
      authData => {
        if (failCounter < 3) {
          getRefreshTokenApi(refresh_token, 0, onRefreshLogin, failCounter + 1);
        } else {
          localStorage.removeItem("userToken");
          window.location.href = `/login/`;
        }
      },
      { grant_type: "refresh_token", refresh_token: refresh_token }
    );
  }, calculateSensibleTimeout(timeout));
}

// export function login(email, password, history, params, onRefreshLogin) {
//   return dispatch => {
//     dispatch(setLoginPending(true));
//     dispatch(setLoginError(null));

//     getTokenApi(email, password, (error, data) => {
//       dispatch(setLoginPending(false));
//       if (error === false) {
//         let userToken = data;
//         userToken.expiresTimeStamp = moment(
//           moment().add(userToken.expires_in, "seconds")
//         ).unix();
//         localStorage.setItem("userToken", JSON.stringify(userToken));
//         localStorage.setItem("userName", JSON.stringify(email));
//         getRefreshTokenApi(
//           userToken.refresh_token,
//           userToken.expires_in,
//           onRefreshLogin
//         );
//         dispatch(setLoginSuccess({ data: data, userName: email }));
//         const { redirectUrl } = params;
//         if (redirectUrl !== undefined) {
//           history.push(`/redirect/${redirectUrl}`);
//         } else {
//           history.push(`/`);
//         }
//       } else {
//         dispatch(setLoginError(error));
//       }
//     });
//   };
// }

export function login(email, password, history, params, onRefreshLogin) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginError(null));
    // it simulates a backend call
    setTimeout(() => {
      dispatch(setLoginPending(false));
      localStorage.setItem("userName", email);
      dispatch(setLoginSuccess({ data: { testToken: 'successfull'}, userName: email }));
      const { redirectUrl } = params;
      if (redirectUrl !== undefined) {
        history.push(`/redirect/${redirectUrl}`);
      } else {
        history.push(`/home`);
      }
    }, 1000);
  };
}

export function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

export function setLoginSuccess(userToken) {
  return {
    type: SET_LOGIN_SUCCESS,
    userToken
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

export function refreshLogin(newToken) {
  return {
    type: REFRESH_LOGIN,
    newToken
  };
}

export function setUserName(userName) {
  return {
    type: SET_USER_NAME,
    userName
  };
}
