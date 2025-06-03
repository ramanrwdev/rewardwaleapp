import { REFERRAL_CODE } from '../actions/constants';
export function setReferralCode(payload) {
    return {
      type: REFERRAL_CODE,
      payload
    };
  }
