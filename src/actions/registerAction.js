import axiosInstance from '../helpers/axiosInstance';
import {
  USER_AUTH_SUCCESS,
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
import {

  SERVERURL,
} from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { customToast } from '../utills/commonFunctions';
import { userLogout } from './userAction';
// import KochavaTracker from 'react-native-kochava-tracker';
import { ENV } from '../../config'

/*
 * Import {
 *   setAsync
 * } from '../utills/commonFunctions';
 */

export function registerLoading() {
  return {
    type: REGISTER_LOADING,
  };
}

export function registerSuccess(payload) {
  return {
    type: USER_AUTH_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

export function registersocialSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload,
    sociallogin: true
  };
}

export function getAge(payload) {
  return {
    type: GET_AGE,
    payload,
  };
}

function setCredentials(credentails) {
  if (credentails) {
    const asynccredentails = JSON.stringify(credentails);
    if (asynccredentails) {
      AsyncStorage.setItem('usercrendentials', asynccredentails);
    }
  }
}

export function userRegister(userinfo, callback) {
  const data = userinfo;


  return (dispatch) => {
    dispatch(registerLoading());
    axiosInstance.
      post('user/personal/register', data).
      then((res) => {
        // console.log(res, "response")
        if (res && res.status === 200) {
          const resp = res.data;
          dispatch(getAge(res?.data?.yeardiff))
          const resasync = {
            user_id: resp.user_id,
            firstname: resp.firstname,
            lastname: resp.lastname,
            token: resp.token,
            token_expire_at: resp.token_expire_at,
            profile_photo: resp.profile_photo,
            contact_verified: resp.contact_verified,
            displayname: resp.displayname,
            pan_verified: resp.pan_verified,
            contact: resp.contact,
            email: resp.email,
            steps: 'Firstname',
            lockscreen: true
          };
          callback({ data: res.data })
          dispatch(registerSuccess(res.data));
          resasync.lockscreen = true;
          setCredentials(resasync);
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response && error.response.status === 403) {
            customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }

          dispatch(registerFailure(error.response.data));
        }
      });
  };
}

export function updatecontactLoading() {
  return {
    type: UPDATE_CONTACT_LOADING,
  };
}
export function updatecontactSuccess(payload) {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload,
  };
}
export function updatecontactFailure(payload) {
  return {
    type: UPDATE_CONTACT_FAILURE,
    payload,
  };
}

/*
 * Unwanted Action
 *  export function updateContact(userinfo) {
 *    const data = userinfo;
 *    return dispatch => {
 *
 *      dispatch(updatecontactLoading());
 *      axios({
 *        method: 'PUT',
 *        headers: {
 *
 *
 *          'authorization': userinfo.token,
 *        },
 *        url: `updatecontact`,
 *        crossDomain: true,
 *        data,
 *      })
 *        .then(res => {
 *          if (res.status === 200) {
 *            dispatch(userAuth(res.data[0]));
 *            // dispatch(updatecontactSuccess(res.data));
 *
 *          }
 *        })
 *        .catch(async(error) => {
 *          if (error) {
 *            if(error && error.response.status === 403){
 *
 *              await customToast(error.response.data.message,'error');
 *              setTimeout(async() => {
 *                        await AsyncStorage.removeItem('usercrendentials');
 *                        dispatch(userLogout({}))
 *            }, 3000);
 *            }
 *            dispatch(updatecontactFailure(error.response.data));
 *          }
 *        });
 *    };
 *  }
 */

// POST REFERAL CODE 

export function refercodeLoading() {
  return {
    type: POST_REFERAL_CODE_LOADING
  };
}

export function refercodeSuccess(payload) {
  return {
    type: POST_REFERAL_CODE_SUCCESS,
    payload
  };
}

export function refercodeFailure(payload) {
  return {
    type: POST_REFERAL_CODE_FAILURE,
    payload
  };
}

export const refercode = (params, callback) => {
  // console.log(params, "data from ................. ")
  const data = {
    refcode: params.refcode ? params.refcode : '',
    isreferral: params.isreferral
  }

  return (dispatch) => {
    dispatch(refercodeLoading());
    axiosInstance.
      put('user/personal/referral', data).
      then((res) => {
        if (res.status === 200) {
          const resp = res.data;
          if (ENV !== 'DEV') {
            const eventMapObject = {};
            // KochavaTracker.sendEventMapObject(KochavaTracker.EVENT_TYPE_REGISTRATION_COMPLETE_STRING_KEY, eventMapObject);
            var eventName = 'Registration Complete'
            var eventValues = {};
          }
          if (res?.data?.refferalcode === '') {
            const resasync = {
              user_id: resp.user_id,
              firstname: resp.firstname,
              lastname: resp.lastname,
              token: resp.token,
              token_expire_at: resp.token_expire_at,
              profile_photo: resp.profile_photo,
              contact_verified: resp.contact_verified,
              displayname: resp.displayname,
              pan_verified: resp.pan_verified,
              contact: resp.contact,
              email: resp.email,
              skip_dashboard: null,
              //steps: 'Registered',
              steps: 'KYC',
              refferalcode: ''
            };
            callback({ data: res.data })
            dispatch(registerSuccess(resasync));
            dispatch(refercodeSuccess(res.data));
            resasync.lockscreen = true;
            setCredentials(resasync);

          } else {
            const reasync = {
              user_id: resp.user_id,
              firstname: resp.firstname,
              lastname: resp.lastname,
              token: resp.token,
              token_expire_at: resp.token_expire_at,
              profile_photo: resp.profile_photo,
              contact_verified: resp.contact_verified,
              displayname: resp.displayname,
              pan_verified: resp.pan_verified,
              skip_dashboard: null,
              contact: resp.contact,
              email: resp.email,
              //steps: 'Registered',
              steps: 'KYC',
              refferalcode: resp.refferalcode
            }
            callback({ data: res.data })
            dispatch(registerSuccess(reasync));
            dispatch(refercodeSuccess(res.data));
            reasync.lockscreen = true;
            setCredentials(reasync)
          }
        }
      }).
      catch(async (error) => {
        console.log('error', error)
        if (error && error.response.status === 403) {
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}));
          }, 3000);
        }
        if (error) {
          console.log(error.response?.data, "error.response")
          callback({ data: {}, mesage: error.response?.data })
          dispatch(refercodeFailure(error.response));
        }
      });
  }
};


// CLAIM BONUS

export function claimBonusLoading() {
  return {
    type: CLAIM_BONUS_SUCCESS
  };
}

export function claimBonusSuccess(payload) {
  return {
    type: CLAIM_BONUS_SUCCESS,
    payload
  };
}

export function claimBonusFailure(payload) {
  return {
    type: CLAIM_BONUS_FAILURE,
    payload
  };
}

export const claimBonus = params => {
  const data = {
    dob: params.dob,
    pincode: params.pincode,
    isreferral: params.isreferral
  }
  // console.log(data, "data from user/personal/referralbonus")
  // return (dispatch) => {
  //   axios({
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: params.token
  //     },
  //     url: `${SERVERURL}user/personal/referralbonus`,
  //     crossDomain: true,
  //     data
  //   }).
  //     then((res) => {
  //       if (res.status === 200) {
  //         dispatch(claimBonusSuccess(res.data))
  //       }
  //     }).
  //     catch(async (error) => {
  //       console.log(error, "bonus error")
  //       if (error && error.response.status === 403) {
  //         await customToast(error.response.data.message, 'error');
  //         setTimeout(async () => {
  //           await AsyncStorage.removeItem('usercrendentials');
  //           dispatch(userLogout({}));
  //         }, 3000);
  //       }
  //       if (error) {
  //         dispatch(claimBonusFailure(error.response));
  //       }
  //     });
  // };
  return (dispatch) => {
    dispatch(claimBonusLoading());
    axiosInstance.
      post('user/personal/referralbonus', data).
      then((res) => {
        // console.log(res, "res from referl")
        if (res.status === 200) {
          dispatch(claimBonusSuccess(res.data));
          // console.log(res.data, "bnfsdand")
        }
      }).
      catch((error) => {
        if (error.response && error.response.status === 400) {
          dispatch(claimBonusFailure(error.response.data));

        }
      });
  }
};