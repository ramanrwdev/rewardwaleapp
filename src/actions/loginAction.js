import axiosInstance from '../helpers/axiosInstance';
import {
  /*
   * LOGIN_LOADING,
   * LOGIN_SUCCESS,
   * LOGIN_FAILURE,
   */
  SOCIAL_LOGIN_LOADING,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAILURE
} from '../actions/constants';

/*
 * Import { userAuth,userAuthSuccess, userLogout } from './userAction';
 * import AsyncStorage from '@react-native-async-storage/async-storage';
 * import {customToast} from '../utills/commonFunctions';
 * import { registerLoading, registersocialSuccess ,registerFailure } from './registerAction';
 */

/*
 * Export function loginLoading() {
 *     return {
 *       type: LOGIN_LOADING,
 *     };
 *   }
 *   export function loginSuccess(payload) {
 *
 *     return {
 *       type: LOGIN_SUCCESS,
 *       payload: payload,
 *     };
 *   }
 *   export function loginFailure(payload) {
 *     return {
 *       type: LOGIN_FAILURE,
 *       payload: payload,
 *     };
 *   }
 *   export function userLogin(userinfo) {
 *     const data = userinfo;
 *     return dispatch => {
 *       dispatch(loginLoading());
 *       axios({
 *         method: 'POST',
 *         headers: {
 *
 *
 *         },
 *         url: `loginuser`,
 *         crossDomain: true,
 *         data,
 *       })
 *         .then(res => {
 *           if (res.status === 200) {
 *             dispatch(loginSuccess(res.data));
 *             dispatch(userAuth(res.data));
 *           if(res.data && res.data[0] && res.data[0].contact_verified === true){
 *             const asynccredentails = JSON.stringify(res.data);
 *               if(asynccredentails) {
 *              AsyncStorage.setItem('usercrendentials', asynccredentails);
 *               }
 *           }
 *           }
 *         })
 *         .catch(error => {
 *           if (error.response.status === 400) {
 *             dispatch(loginFailure(error));
 *           }
 *         });
 *     };
 *   }
 */

export function socialloginLoading() {
  return {
    type: SOCIAL_LOGIN_LOADING
  };
}
export function socialloginSuccess(payload) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload
  };
}
export function socialloginFailure(payload) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    payload
  };
}
export function registerSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload
  };
}

/*
 * Unwanted Action
 *  export function socialLogin(userinfo) {
 *      const data = userinfo;
 *      return dispatch => {
 *        dispatch(registerLoading());
 *        axios({
 *          method: 'POST',
 *          headers: {
 *
 *
 *          },
 *          url: `socialusers`,
 *          crossDomain: true,
 *          data,
 *        })
 *          .then(res => {
 *            if (res.status === 200) {
 *              const resp = res.data.response
 *              resp.newuser = res.data.newuser
 *              resp.sociallogin = true
 *            if(res.data && res.data.newuser){
 *
 *                 dispatch(userAuthSuccess(resp))
 *               // dispatch(registersocialSuccess(res.data))
 *
 *            } else {
 *               dispatch(userAuthSuccess(resp))
 *              //dispatch(registersocialSuccess(res.data))
 *  		        const asynccredentails = JSON.stringify(res.data.response);
 *              if(asynccredentails && res.data.response.contact_verified) {
 *             AsyncStorage.setItem('usercrendentials', asynccredentails);
 *              }
 *            }
 *            }
 *          })
 *          .catch(async(error) => {
 *            if (error) {
 *              if(error && error.response.status === 403){
 *
 *                await customToast(error.response.data.message,'error');
 *                setTimeout(async() => {
 *                          await AsyncStorage.removeItem('usercrendentials');
 *                          dispatch(userLogout({}))
 *              }, 3000);
 *              }
 *              dispatch(registerFailure(error.response));
 *            }
 *          });
 *      };
 *    }
 */
