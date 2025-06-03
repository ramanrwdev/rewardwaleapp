import {
  REFERRAL_CODE,
  GET_MF_GROUP_LIST,
  GET_STOCKS_GROUP_LIST,
  GET_GOLD_GROUP_LIST,
  GET_FD_GROUP_LIST,
  GET_NPS_GROUP_LIST,
  WEALTH_UPDATED,
  GET_ASSETS_DATA_LIST,
  GET_FINANCIALSNAP_SUCCESS,
  KYC_STATUS
} from '../actions/constants';

const initialState = {
  referralCode: '',
  mfgoallist: {},
  goldgoallist: {},
  npsgoalist: {},
  stocksgoallist: {},
  fdgoallist: {},
  wealthupdate: '',
  assetsDataList: [],
  finanancialsnap: {},
  kyc_status: {}
};

export default function themeReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case REFERRAL_CODE:
      return {
        ...state,
        referralCode: action.payload
      };
    case GET_MF_GROUP_LIST:
      return {
        ...state,
        mfgoallist: action.payload
      };
    case GET_GOLD_GROUP_LIST:
      return {
        ...state,
        goldgoallist: action.payload
      };
    case GET_FD_GROUP_LIST:
      return {
        ...state,
        fdgoallist: action.payload
      };
    case GET_STOCKS_GROUP_LIST:
      return {
        ...state,
        stocksgoallist: action.payload
      };
    case GET_NPS_GROUP_LIST:
      return {
        ...state,
        npsgoalist: action.payload
      };
    case WEALTH_UPDATED:
      return {
        ...state,
        wealthupdate: action.payload
      };
    case GET_FINANCIALSNAP_SUCCESS:
      return {
        ...state,
        finanancialsnap: action.payload
      };
    case GET_ASSETS_DATA_LIST:
      return {
        ...state,
        assetsDataList: action.payload
      };
    case KYC_STATUS:
      return {
        ...state,
        kyc_status: action.payload
      };
    default: return state;
  }
};