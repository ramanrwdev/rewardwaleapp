/*
 * Import NetInfo from '@react-native-community/netinfo';
 * import {URL, ASYNC_KEYS} from './constants';
 * import {customAlert, showAlertWithDelay} from './commonFunctions';
 */

/*
 * Import {getAsync, setAsync, removeAsync} from './AsyncStorageUtil';
 * import LoginStore from '../Stores/LoginStore';
 * const tokenRequiredAPI = [URL.LOGIN_API, URL.GOLD_SILVER_RATES];
 * window.btoa = require('Base64').btoa;
 * const axios = require('axios');
 */

/*
 * Export async function callRemoteMethod(
 *   endpoint,
 *   type = 'GET',
 *   data,
 *   successKey = true,
 * ) {
 *   const method = type.toLowerCase();
 *   try {
 *     const netStatus = await NetInfo.fetch();
 *     if (netStatus.isConnected) {
 *       let options = {
 *         method: method,
 *         url: endpoint,
 *         headers: await getRequestHeader(endpoint),
 *       };
 *       (type === 'POST' || type === 'PUT') && (options.data = data);
 *       console.log('axios api request' + JSON.stringify(options));
 *       const response = await axios(options);
 *       console.log('axios api response' + JSON.stringify(response));
 */

/*
 *       If (response.status === 200) {
 *         if (successKey) {
 *           if (response.data && response.data.statusCode === 200) {
 *             return response.data.result ? response.data.result : response;
 *           } else if (response && response.data.errormsg) {
 *             customAlert(response.data.errormsg);
 *           }
 *         } else {
 *           return response;
 *         }
 *       } else {
 *         throw {response: response};
 *       }
 *     }
 *   } catch (err) {
 *     if (err.response && err.response.status) {
 *       if (err.response.status === 401) {
 *         customAlert('error');
 *         return false;
 *       } else {
 *         handleStatus(err.response);
 *       }
 *     }
 *   }
 * }
 */

/*
 * Function handleStatus(response) {
 *   //TODO MAY CHANGE IN FUTURE W.R.T CONDITIONS
 *   switch (response.status) {
 *     case 400:
 *       customAlert(response.data.message);
 *       console.warn('Bad request');
 *       break;
 *     case 401:
 *       unauthorizedLogout();
 *       console.warn('Unauthorized Access');
 *       break;
 *     case 403:
 *       customAlert(response.data.message);
 *       console.warn('Forbidden Access');
 *       break;
 *     case 404:
 *       console.warn('Page not Found');
 *       break;
 *     case 500:
 *       console.warn('Internal Server Error');
 *       break;
 *     default:
 *       console.warn('Something went wrong! Please try again later.');
 *   }
 * }
 * async function getRequestHeader(url) {
 *   const token = await getAsync(ASYNC_KEYS.ACCESS_TOKEN);
 *   var header = {
 *     Accept: 'application/json',
 *     'Content-Type': 'application/json',
 *   };
 *   const isToken = tokenRequiredAPI.findIndex(ele => {
 *     return url.includes(ele);
 *   });
 *   if (isToken !== -1) {
 *     header.Authorization = `Bearer ${token}`;
 *   }
 *   return header;
 * }
 */

/*
 * Async function unauthorizedLogout() {
 *   await removeAsync(ASYNC_KEYS.USER_DETAILS);
 *   await removeAsync(ASYNC_KEYS.ACCESS_TOKEN);
 *   LoginStore.setUserToken('');
 *   LoginStore.userDetails = null;
 *   LoginStore.cardNo = 'XXXX  XXXX  XXXX  XXXX';
 *   LoginStore.balanceAmt = 0;
 * }
 */

// Async function renewToken(dataObj) {
//   Const url = URL.TOKEN_RENEWAL;
//   Const token = await getAsync(ASYNC_KEYS.ACCESS_TOKEN);
//   Const number = await getAsync(ASYNC_KEYS.RANDOM_NUMBER);
//   Const data = {
//     Token: token,
//     Random_number: number,
//   };
//   Let response = await callRemoteMethod(url, 'POST', data, false);
//   If (response && response.data && response.data.success === true) {
//     Await setAsync(ASYNC_KEYS.ACCESS_TOKEN, response.data.customertoken);
//     Await setAsync(ASYNC_KEYS.RANDOM_NUMBER, response.data.token_random_number);
//     Return await callRemoteMethod(
//       DataObj.endpoint,
//       DataObj.type,
//       DataObj.data,
//       DataObj.successKey,
//     );
//   }
// }
// /**
//  * @author Raman Kant
//  * @description function called if there is a failure in API call
//  */
// Export async function onFailure(response) {
//   If (response.data.success === false) {
//     ShowAlertWithDelay(response.data.errormsg);
//     Return false;
//   }
//   Return true;
// }
