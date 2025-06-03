import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_CONTACT_LOADING,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  GET_AGE,

  POST_REFERAL_CODE_LOADING,
  POST_REFERAL_CODE_SUCCESS,
  POST_REFERAL_CODE_FAILURE,
  CLAIM_BONUS_LOADING,
  CLAIM_BONUS_SUCCESS,
  CLAIM_BONUS_FAILURE,
} from '../actions/constants';

const initialState = {
  registeruser: {},
  registeruserSuccess: false,
  updateContact: {},
  updateContactSuccess: false,
  age: '',
  referal: {},
  referalSuccess: false,
  claimBonus: {},
  claimBonusSuccess: false,

};

export default function registerReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        registeruserSuccess: false,
        sociallogin: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registeruserSuccess: true,
        registeruser: action.payload,
        sociallogin: Boolean(action.sociallogin)
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registeruserSuccess: false,
        registeruser: action.payload
      };
    case UPDATE_CONTACT_LOADING:
      return {
        ...state,
        updateContactSuccess: false

      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        updateContactSuccess: true,
        updateContact: action.payload

      };
    case UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        updateContactSuccess: false,
        updateContact: action.payload
      };
    case POST_REFERAL_CODE_LOADING:
      return {
        ...state,
        referalSuccess: false

      };
    case POST_REFERAL_CODE_SUCCESS:
      return {
        ...state,
        referalSuccess: true,
        referal: action.payload

      };
    case POST_REFERAL_CODE_FAILURE:
      return {
        ...state,
        referalSuccess: false,
        referal: action.payload
      };
    //Claim Bonus
    case CLAIM_BONUS_LOADING:
      return {
        ...state,
        claimBonusSuccess: false

      };
    case CLAIM_BONUS_SUCCESS:
      return {
        ...state,
        claimBonusSuccess: true,
        claimBonus: action.payload

      };
    case CLAIM_BONUS_FAILURE:
      return {
        ...state,
        claimBonusSuccess: false,
        claimBonus: action.payload
      };
    case GET_AGE:
      return {
        ...state,
        age: action.payload
      };
    default:
      return state;
  }
}
