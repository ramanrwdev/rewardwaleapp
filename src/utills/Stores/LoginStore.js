// /**
//  * Login Mobx Store Component
//  * @author Raman Kant
//  * @description Login store of the applicaion
//  * @flow
//  */

/*
 * Import {observable, action, computed, autorun} from 'mobx';
 * import {ASYNC_KEYS} from '../Utility/Constants';
 * import {setAsync} from '../Utility/AsyncStorageUtil';
 * import {URL} from '../Utility/Constants';
 * import {callRemoteMethod} from '../Utility/WebserviceHandler';
 */

/*
 * Const COUNTRY_MASTER = require('../../images/Locales/countries.json');
 * class LoginStore {
 *   @observable userToken = '';
 *   @observable deviceId = '';
 *   @observable userDetails = null;
 *   @observable showLoader = false;
 *   @observable isEmailVerified = false;
 *   @observable isMobileVerified = false;
 *   @observable totalPages = 0;
 *   @observable name = 'NAME SURNAME';
 *   @observable firstName = 'NAME';
 *   @observable lastName = 'नाम';
 *   @observable profileImg ='';
 *   @observable userAddresses = null;
 *   @observable userAddress = '';
 *   @observable userName = '';
 *   @observable mobileNumber = '';
 *   @observable isCountryUpdate = false;
 *   @observable country = {
 *     Name: 'India',
 *     Unicode: '🇮🇳',
 *     Dial: '+91',
 *   };
 *   @observable customer_id = '';
 */

/*
 *   @action setFirstName(text) {
 *     if (text) {
 *       this.firstName = text;
 *       setAsync(ASYNC_KEYS.GUEST_USER_FIRSTNAME, this.firstName);
 *     } else {
 *       this.firstName = '';
 *     }
 *   }
 */

/*
 *   @action setLastName(text) {
 *     if (text) {
 *       this.lastName = text;
 *       setAsync(ASYNC_KEYS.GUEST_USER_LASTNAME, this.lastName);
 *     } else {
 *       this.lastName = '';
 *     }
 *   }
 */

/*
 *   Reaction = autorun(() => {
 *     var name = '';
 *     if (this.firstName) {
 *       name = this.firstName
 *     } else if (this.firstName) {
 *       name = this.firstName;
 *     }
 *     this.name = name;
 *   });
 */

/*
 *   @computed get selectedCountry() {
 *     return this.country;
 *   }
 */

/*
 *   @action updateCountry(value) {
 *     this.isCountryUpdate = true;
 *     this.country = value;
 *   }
 */

/*
 *   @action setInitialCounty(countryCode) {
 *     const initialCountry = COUNTRY_MASTER.find(
 *       item => item.Dial === countryCode,
 *     );
 *     var country = {
 *       Name: initialCountry.Name,
 *       Unicode: initialCountry.Unicode,
 *       Dial: initialCountry.Dial,
 *     };
 *     this.country = country;
 *     console.warn(this.country);
 *   }
 */

/*
 *   @action resetStore = () => {
 *     this.userToken = '';
 *   };
 */

/*
 *   @action setUserToken(token) {
 *     this.userToken = token;
 *   }
 *   @action setDevicesId(deviceId) {
 *     this.deviceId = deviceId;
 *   }
 *   @action setDevicesToken(deviceToken) {
 *     this.deviceToken = deviceToken;
 *   }
 */

/*
 *   Async authFunction(customertoken, number) {
 *     await setAsync(ASYNC_KEYS.ACCESS_TOKEN, customertoken);
 *     await setAsync(ASYNC_KEYS.RANDOM_NUMBER, number);
 *     await this.getUserDetails(customertoken);
 *     this.userToken = customertoken;
 *   }
 */

/*
 *   Async updateUserData(data) {
 *     this.userDetails = data;
 *     this.firstName = data.firstName;
 *     this.lastName = data.firstName_hindi;
 *     this.mobileNumber = data.mobileNo;
 *     this.userName = `${this.firstName}`;
 *     this.customer_id = data.memberId;
 *     this.profileImg = data.profileImage;
 *     setAsync(ASYNC_KEYS.USER_DETAILS, data);
 *   }
 *   @action getUserDetails = async (token) => {
 *     const apiData ={
 *       token:token
 *     }
 *     const url = URL.PROFILE_DETAILS;
 *     let response = await callRemoteMethod(url, 'POST', apiData, false);
 *     if (response?.data) {
 *          const responseData = response?.data ? response.data.data:[];
 *         this.updateUserData(responseData);
 *     }
 *   };
 */


/*
 *   @action userEmailVerify = async apiData => {
 *     const url = URL.EMAIL_VERIFY;
 *     let response = await callRemoteMethod(url, 'PUT', apiData, false);
 *     if (response) {
 *       return response;
 *     }
 *   };
 */

//   @action setUserDetails = async (apiData, navigation) => {
//     Const url = URL.PROFILE_UPDATE;
//     This.showLoader = true;
//     Let response = await callRemoteMethod(url, 'POST', apiData);
//     This.showLoader = false;
//     If (response) {
//       This.isEmailVerified = false;
//       This.isMobileVerified = false;
//       //await this.getUserDetails();
//       Navigation.goBack();
//     }
//   };
//   /**
//    * @author Raman Kant
//    * @description login user
//    */
//   @action login = async (emailmobile, password) => {
//     This.showLoader = true;
//     Let url = URL.LOGIN_API;
//     Const apiData = {
//       Emailmobile: emailmobile.trim(),
//       Mobpassword: password.trim(),
//       Vendorlogin: 0,
//     };
//     Let response = await callRemoteMethod(url, 'POST', apiData);
//     If (response) {
//       This.authFunction(response.customertoken, response.token_random_number);
//       This.showLoader = false;
//       Return response;
//     }
//     This.showLoader = false;
//   };

//   @action register = async (apiData, navigate) => {
//     This.showLoader = true;
//     Let url = URL.REGISTER_API;
//     Let response = await callRemoteMethod(url, 'POST', apiData);
//     This.showLoader = false;
//     If (response) {
//       Return response;
//     }
//   };
//   /**
//    * @author Raman Kant
//    * @description OTP Verify
//    */
//   @action otpVerify = async (apiData, navigation) => {
//     This.showLoader = true;
//     Let url = URL.USER_VERIFY;
//     Console.log('url---'+url);
//     Console.log('api verify data---'+JSON.stringify(apiData))
//     Let response = await callRemoteMethod(url, 'POST', apiData);
//     Console.log('api otp verify response---'+JSON.stringify(response))
//     This.showLoader = false;
//     If (response) {
//       This.authFunction(response.data.token, response.data.token);
//       Navigation.dangerouslyGetParent().goBack();
//      }
//   };

//   /**
//    * @author Raman Kant
//    * @description otp send
//    */
//   @action otpSend = async apiData => {
//     This.showLoader = true;
//     Let url = URL.LOGIN_API;
//     Let sendApiData = {
//       Mobile: apiData.mobile,
//     };
//     Let response = await callRemoteMethod(url, 'POST', sendApiData);
//     This.showLoader = false;
//     Return response;
//   };


//   /**
//    * @author Raman Kant
//    * @description otp send
//    */
//   @action resendotpSend = async apiData => {
//     This.showLoader = true;
//     Let url = URL.RESEND_OTP;
//     Let sendApiData = {
//       Mobile: apiData.mobile,
//     };
//     Let response = await callRemoteMethod(url, 'POST', sendApiData);
//     This.showLoader = false;
//     Return response;
//   };

/*
 *   @action saveUserProfileApi = async (sendApiData) => {
 *     const url = URL.UPDATE_USER_PROFILE_API;
 *     this.showLoader = true;
 *     let response = await callRemoteMethod(url, 'POST', sendApiData);
 *     this.showLoader = false;
 *     if (response) {
 *       await this.getUserDetails(sendApiData.user_id);
 *       return response;
 *     }
 *   };
 * }
 */

// Export default new LoginStore();
