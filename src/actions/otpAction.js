import axiosInstance from '../helpers/axiosInstance';
import {
  OTP_LOADING,
  OTP_SUCCESS,
  OTP_FAILURE,
  VERIFY_OTP_LOADING,
  // VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  USER_AUTH_SUCCESS,

  SKIP_DASHBOARD_LOADING,
  SKIP_DASHBOARD_SUCCESS,
  SKIP_DASHBOARD_FAILURE
} from '../actions/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userAuth, userLogout } from './userAction';
import { customToast } from '../utills/commonFunctions';

import I18n from 'react-native-i18n';
import { claimBonusFailure } from './registerAction';

export function otpLoading() {
  return {
    type: OTP_LOADING,
  };
}
export function otpSuccess(payload) {
  return {
    type: OTP_SUCCESS,
    payload,
  };
}
export function otpFailure(payload) {
  return {
    type: OTP_FAILURE,
    payload,
  };
}

export function otpRegister(userinfo, callback) {

  //  console.log(data, "i am from user/personal/otp")
  return (dispatch) => {
    dispatch(otpLoading());
    axiosInstance.
      put('user/personal/otp', userinfo).
      then((res) => {
        if (res.status === 200) {
          customToast(I18n.t('VLD_OTP_SENT_MSG'))
          dispatch(otpSuccess(res.data));
        }
      })
      .catch(error => {

        if (error.response.status === 400) {
          callback(error.response.data)
          customToast(error.response.data, "error")
          dispatch(otpFailure(error.response.data));
        }
      });
  };
}




export const loginUserPersonal = async (params) => {
  
  try {
    const { data } = await axiosInstance.post('login_user', params)
    console.log("login  user  api response"+JSON.stringify(data))
    const resp = data.data;
    // if (resp.profile_photo) {
    //   resp.profile_photo += '?' + new Date().getTime();
    // }

  //   resp.prevpage = 'VerifyOTP';
  //   resp.message = data?.message;
  //   resp.lockscreen = false;
  //  // dispatch(verifyotpSuccess(resp));
  //   //callback(resp)
  //   resp.lockscreen = false;
  //   setCredentials(resp);
    return { error: false, resp }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}


export const registerUserPersonal = async (params) => {
  
  try {
    const { data } = await axiosInstance.post('register', params)
    console.log("login  register  api response"+JSON.stringify(data))
    const resp = data.data;
    return { error: false, resp }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

// To verify entered otp
export function verifyotpLoading() {
  return {
    type: VERIFY_OTP_LOADING,
  };
}
export function verifyotpSuccess(payload) {
  return {
    // Type: VERIFY_OTP_SUCCESS,
    type: USER_AUTH_SUCCESS,
    payload,
  };
}
export function verifyotpFailure(payload) {
  return {
    type: VERIFY_OTP_FAILURE,
    payload,
  };
}

const setCredentials = async (credentails) => {
  if (credentails) {
    const asynccredentails = JSON.stringify(credentails);
    if (asynccredentails) {
      await AsyncStorage.setItem('usercrendentials', asynccredentails);
    }
  }
}

// Unwanted Action
// export function verifyotpRegister(userinfo) {
//   const data = {
//     contact: userinfo.contact,
//     otp: userinfo.otp,
//     otp_expire_at: userinfo.otp_expire_at
//   };
//   const customheader = { Authorization: userinfo.token };
//   return (dispatch) => {
//     dispatch(verifyotpLoading());
//     axiosInstance.
//       put('user/personal/register/otp', data, { customheader }).
//       then((res) => {
//         if (res.status === 200) {
//           const resp = res.data;
//           if (resp.profile_photo) {
//             resp.profile_photo += `?${new Date().getTime()}`;
//           }
//           resp.prevpage = 'VerifyOTP';
//           resp.lockscreen = false;
//           dispatch(verifyotpSuccess(resp));
//           resp.lockscreen = true;
//           setCredentials(resp);
//         }
//       }).
//       catch(async (error) => {
//         if (error && error.response.status === 403) {
//           await customToast(error.response.data.message, 'error');
//           setTimeout(async () => {
//             await AsyncStorage.removeItem('usercrendentials');
//             dispatch(userLogout({}));
//           }, 3000);
//         }
//         if (error.response && error.response.status === 400) {
//           dispatch(verifyotpFailure(error));
//         }
//       });
//   };
// }


export function verifyotpRegister(userinfo, callback) {
  const data = { mobile: userinfo.contact, otp: userinfo.otp,deviceId:userinfo.deviceId }

  const customheader = {};
  return (dispatch) => {
    dispatch(verifyotpLoading());
    axiosInstance.
      post('user_verify', data, { customheader }).
      then((res) => {
        console.log('response api verify'+JSON.stringify(res))
        if (res.status === 200) {
          const resp = res.data.data;
          // if (resp.profile_photo) {
          //   resp.profile_photo += '?' + new Date().getTime();
          // }

          resp.prevpage = 'VerifyOTP';
          resp.lockscreen = false;
          dispatch(verifyotpSuccess(resp));
          callback(resp)
          resp.lockscreen = false;
          setCredentials(resp);
        }
      }).catch(async (error) => {
        console.log('error', error.response.data)
        if (error && error.response.status === 403) {
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}))
          }, 3000);
        }
        if (error.response && error.response.status === 400) {
          console.log('error', error.response.data)
          customToast(error.response.data.message, 'error')
          dispatch(verifyotpFailure(error.response.data.message));
        }
      });
  }
}

export const verifyotpApi = async (params) => {
  try {
    const { data } = await axiosInstance.post('user_verify', params)
    console.log("user_verify api response1111"+JSON.stringify(data))
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

export const changePasswordApi = async (params) => {
  try {
    const { data } = await axiosInstance.post('change_password', params)
    console.log("change_password api response1111"+JSON.stringify(data))
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}


export const forgotPasswordApi = async (params) => {
  try {
    const { data } = await axiosInstance.post('forgot_password', params)
    console.log("forgot_password api response1111"+JSON.stringify(data))
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}


export function loginPersonal(userinfo, callback) {
  const data = { email_id: userinfo.email_id, password: userinfo.password,device_id:userinfo.device_id,reg_id:userinfo.reg_id,type:userinfo.type,login_type:userinfo.login_type }

  const customheader = {};
  return (dispatch) => {
    dispatch(verifyotpLoading());
    axiosInstance.
      post('login', data, { customheader }).
      then((res) => {
        console.log('response api verify'+JSON.stringify(res))
        if (res.status === 200) {
          const resp = res.data.data;
          // if (resp.profile_photo) {
          //   resp.profile_photo += '?' + new Date().getTime();
          // }

          resp.prevpage = 'Login';
          resp.lockscreen = false;
          dispatch(verifyotpSuccess(resp));
          callback(res.data)
          resp.lockscreen = false;
          setCredentials(resp);
        }
      }).catch(async (error) => {
        console.log('error', error.response.data)
        if (error && error.response.status === 403) {
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}))
          }, 3000);
        }
        if (error.response && error.response.status === 400) {
          console.log('error', error.response.data)
          customToast(error.response.data.message, 'error')
          dispatch(verifyotpFailure(error.response.data.message));
        }
      });
  }
}


function setdiffCredentials(credentails) {
  let tokenObj = AsyncStorage.getItem('usercrendentials').then((value) => {
    const res = JSON.parse(value);
    return res
  })
}



// To skip to dashboard
export function skipDashboardLoading() {
  return {
    type: SKIP_DASHBOARD_LOADING,
  };
}
export function skipDashboardSuccess(payload) {
  return {
    type: SKIP_DASHBOARD_SUCCESS,
    payload,
  };
}
export function skipDashboardFailure(payload) {
  return {
    type: SKIP_DASHBOARD_FAILURE,
    payload,
  };
}

export function skipDashboard() {
  const data = { skip_dashboard: true }
  return (dispatch) => {
    dispatch(skipDashboardLoading());
    axiosInstance
      .post('user/personal/skipdashboard', data)
      .then(async (res) => {
        if (res?.status === 200 && res?.data) {
          let tokenObj = await AsyncStorage.getItem('usercrendentials').then((value) => {
            const res = JSON.parse(value);
            return res
          })
          if (tokenObj) {
            tokenObj.steps = 'Registered'
            tokenObj.skip_dashboard = 'true'
            const setdata = JSON.stringify(tokenObj)
            dispatch(userAuth(tokenObj));
            AsyncStorage.setItem('usercrendentials', setdata);
            dispatch(skipDashboardSuccess(res?.data));

          }

        }
      })
      .catch((error) => {
        if (error) {
          dispatch(skipDashboardFailure(error.response));
        }
      });
  };
}
