import {
    OTP_LOADING,
    OTP_SUCCESS,
    OTP_FAILURE,
    VERIFY_OTP_LOADING,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAILURE,

    SKIP_DASHBOARD_LOADING,
    SKIP_DASHBOARD_SUCCESS,
    SKIP_DASHBOARD_FAILURE

  } from '../actions/constants';

  const initialState = {
    otpData: {},
    otpDataSuccess: false,
    verifyotpData: {},
    verifyotpDataSuccess: false,
    skipdashboard: {},
    skipdashboardSuccess: false

  };
  export default function otpReducer(state, action) {
    if (typeof state === 'undefined') {
      return initialState;
    }
    switch (action.type) {
      case OTP_LOADING:
        return {
          ...state,
          otpData: [],
          otpDataSuccess: false

        };
      case OTP_SUCCESS:
        return {
          ...state,
          otpDataSuccess: true,
          otpData: action.payload
        };
      case OTP_FAILURE:
        return {
          ...state,
          otpDataSuccess: false,
          otpData: action.payload
        };
        case VERIFY_OTP_LOADING:
        return {
          ...state,
          verifyotpData: {},
          verifyotpDataSuccess: false
        };
      case VERIFY_OTP_SUCCESS:
        return {
          ...state,
          verifyotpDataSuccess: true,
          verifyotpData: action.payload
        };
      case VERIFY_OTP_FAILURE:
        return {
          ...state,
          verifyotpDataSuccess: false,
          verifyotpData: action.payload
        };


        case SKIP_DASHBOARD_LOADING:
          return {
            ...state,
            skipdashboard: {},
            skipdashboardSuccess: false
          };
        case SKIP_DASHBOARD_SUCCESS:
          return {
            ...state,
            skipdashboardSuccess: true,
            skipdashboard: action.payload
          };
        case SKIP_DASHBOARD_FAILURE:
          return {
            ...state,
            skipdashboardSuccess: false,
            skipdashboard: action.payload
          };
  
      default:
        return state;
    }
  }
