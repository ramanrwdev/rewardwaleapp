import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAILURE,

    SOCIAL_LOGIN_LOADING,
    SOCIAL_LOGIN_SUCCESS,
    SOCIAL_LOGIN_FAILURE
  } from '../actions/constants';

  const initialState = {
    loginData: {},
    loginDataSuccess: false,
    socialloginData: {},
    socialloginDataSuccess: false
  };

  export default function loginReducer(state, action) {
    if (typeof state === 'undefined') {
      return initialState;
    }
    switch (action.type) {
      case LOGIN_LOADING:
        return {
          ...state,
          loginDataSuccess: false
        };
        case LOGOUT:
        return {
          ...state,
          loginData: undefined
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginDataSuccess: true,
          loginData: action.payload
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loginDataSuccess: false,
          loginData: action.payload
        };
      case SOCIAL_LOGIN_LOADING:
        return {
          ...state,
          socialloginDataSuccess: false
        };
      case SOCIAL_LOGIN_SUCCESS:
        return {
          ...state,
          socialloginDataSuccess: true,
          socialloginData: action.payload
        };
      case SOCIAL_LOGIN_FAILURE:
        return {
          ...state,
          socialloginDataSuccess: false,
          socialloginData: action.payload
        };
      default:
        return state;
    }
  }
