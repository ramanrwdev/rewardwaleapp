import {
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  LOGOUT_SUCCESS,
  USER_CODE_LOADING,
  USER_CODE_SUCCESS,
  USER_CODE_FAILURE
} from '../actions/constants';

const initialState = {
  userAuth: {},
  userAuthSuccess: false,
  isInitialLoading: true,
  userCode: {},
  userCodeSuccess: false
};

export default function userReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {

    case USER_AUTH_SUCCESS:
      return {
        ...state,
        userAuthSuccess: true,
        userAuth: action.payload,
        isInitialLoading: false
      };
    case USER_AUTH_FAILURE:
      return {
        ...state,
        userAuthSuccess: false,
        userAuth: action.payload,
        isInitialLoading: false
      };
    case LOGOUT_SUCCESS:
        return {
          // ...state,
          userAuthSuccess: false,
          userAuth: undefined,
          isInitialLoading: true
        };
    case USER_CODE_LOADING:
      return {
        ...state,
        userCodeSuccess: false
      };
    case USER_CODE_SUCCESS:
      return {
        ...state,
        userCodeSuccess: true,
        userCode: action.payload
      };
    case USER_CODE_FAILURE:
      return {
        ...state,
        userCodeSuccess: false,
        userCode: action.payload
      };
    default:
      return state;
  }
}
