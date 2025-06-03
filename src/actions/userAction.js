import axiosInstance from '../helpers/axiosInstance';
import {
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  LOGOUT_SUCCESS,
  USER_CODE_LOADING,
  USER_CODE_SUCCESS,
  USER_CODE_FAILURE,
} from '../actions/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function saveRisk(payload) {
  return {
    type: 'risk_chosen',
    payload,
  };
}
export function swapPersonalAccount(payload) {
  const asyncswap = JSON.stringify({ swapAccount: payload });
  if (asyncswap) {
    AsyncStorage.setItem('swapaccount', asyncswap);
  }

  return {
    type: 'swap',
    payload,
  };
}
export function userAuthSuccess(payload) {
  return {
    type: USER_AUTH_SUCCESS,
    payload,
  };
}
export function userAuthFailure(error) {
  return {
    type: USER_AUTH_FAILURE,
    payload: error,
  };
}

export function userAuth(payload) {
  return function (dispatch) {
    try {
      if (payload) {
        dispatch(userAuthSuccess(payload));
      } else {
        // console.log('iam in else')
        AsyncStorage.getItem('usercrendentials').then(value => {
          const res = JSON.parse(value);
          if (res && res.prevpage) {
            res.prevpage = '';
          }
          setTimeout(() => {
            dispatch(userAuthSuccess(res));
          }, 3000)

        });
      }
    } catch (error) {
      dispatch(userAuthFailure(error));
    }
  };
}

export function userLogoutSuccess(payload) {
  return {
    type: LOGOUT_SUCCESS,
    payload,
    userAuthSuccess: false,
    userAuth: undefined,
    isInitialLoading: true,
  };
}

export function userLogout(payload) {
  return function (dispatch) {
    dispatch(userLogoutSuccess(payload));
  };
}

export function updateUserInfo(payload, userauth) {
  return async function (dispatch) {
    const req = userauth;
    if (payload.first_name) {
      req.firstname = payload.first_name;
    }
    if (payload.last_name) {
      req.lastname = payload.last_name;
    }
    await AsyncStorage.setItem('usercrendentials', JSON.stringify(req));
    dispatch(userAuthSuccess(req));
  };
}

export function getUserCodeLoading() {
  return {
    type: USER_CODE_LOADING,
  };
}
export function getUserCodeSuccess(payload) {
  return {
    type: USER_CODE_SUCCESS,
    payload,
  };
}

export function getUserCodeFailure(payload) {
  return {
    type: USER_CODE_FAILURE,
    payload,
  };
}

// To get income types
export function getUserCode(callback) {
  return dispatch => {
    dispatch(getUserCodeLoading());
    axiosInstance.
      get('usercode').
      then((res) => {
        if (res.status === 200) {
          callback({data:res.data.usercode})
          dispatch(getUserCodeSuccess(res.data && res.data.usercode));
        }
      })
      .catch(error => {
        if (error) {
          callback({error:error.response})
          dispatch(getUserCodeFailure(error.response));
        }
      });
  };
}
