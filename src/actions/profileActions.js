import axiosInstance from '../helpers/axiosInstance';
import { ACCOUNT_TYPE } from '../../config';
import I18n from 'react-native-i18n';
import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
  ABOUT_ME_SUCCESS,
  ABOUT_ME_FAILURE,
  NOTIFICATION_DATA_LOADING,
  NOTIFICATION_DATA_SUCCESS,
  NOTIFICATION_DATA_FAILURE,
  NOTIFICATION_INSERT_LOADING,
  NOTIFICATION_INSERT_SUCCESS,
  NOTIFICATION_INSERT_FAILURE,
  BANK_LOADING,
  BANK_SUCCESS,
  BANK_FAILURE,
  BANK_DATA_LOADING,
  BANK_DATA_SUCCESS,
  BANK_DATA_FAILURE,
  NEW_BANK_LOADING,
  NEW_BANK_SUCCESS,
  NEW_BANK_FAILURE,
  DELETE_BANK_LOADING,
  DELETE_BANK_SUCCESS,
  DELETE_BANK_FAILURE,
  CREDITCARD_LOADING,
  CREDITCARD_SUCCESS,
  CREDITCARD_FAILURE,
  CREDITCARD_DATA_LOADING,
  CREDITCARD_DATA_SUCCESS,
  CREDITCARD_DATA_FAILURE,
  NEW_CREDITCARD_LOADING,
  NEW_CREDITCARD_SUCCESS,
  NEW_CREDITCARD_FAILURE,
  DELETE_CREDITCARD_LOADING,
  DELETE_CREDITCARD_SUCCESS,
  DELETE_CREDITCARD_FAILURE,
  UPLOAD_PROFILE_IMAGE_LOADING,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_FAILURE,
  GET_CREDIT_TRANSACTION_LOADING,
  GET_CREDIT_TRANSACTION_SUCCESS,
  GET_CREDIT_TRANSACTION_FAILURE,
  CARDREMINDER_INSERT_LOADING,
  CARDREMINDER_INSERT_SUCCESS,
  CARDREMINDER_INSERT_FAILURE,
  CARDREMINDER_DATA_LOADING,
  CARDREMINDER_DATA_SUCCESS,
  CARDREMINDER_DATA_FAILURE,
  SUBMITKYC_INSERT_LOADING,
  SUBMITKYC_INSERT_SUCCESS,
  SUBMITKYC_INSERT_FAILURE,
  GETKYC_DATA_LOADING,
  GETKYC_DATA_SUCCESS,
  GETKYC_DATA_FAILURE,
  DELETE_KYC_LOADING,
  DELETE_KYC_SUCCESS,
  DELETE_KYC_FAILURE,
  SUPPORT_INSERT_LOADING,
  SUPPORT_INSERT_SUCCESS,
  SUPPORT_INSERT_FAILURE,
  FEEDBACK_INSERT_LOADING,
  FEEDBACK_INSERT_SUCCESS,
  FEEDBACK_INSERT_FAILURE,
  GET_USER_FEEDBACK_LOADING,
  GET_USER_FEEDBACK_SUCCESS,
  GET_USER_FEEDBACK_FAILURE,
  GET_REFCODE_LOADING,
  GET_REFCODE_SUCCESS,
  GET_REFCODE_FAILURE,
  GET_TICKET_CATEGORY_LOADING,
  GET_TICKET_CATEGORY_SUCCESS,
  GET_TICKET_CATEGORY_FAILURE,
  CREATE_TICKET_LOADING,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAILURE,
  GET_TICKET_LIST_LOADING,
  GET_TICKET_LIST_SUCCESS,
  GET_TICKET_LIST_FAILURE,
  STATE_NAME_LOADING,
  STATE_NAME_SUCCESS,
  STATE_NAME_FAILURE,
  GET_DASHBOARDCARD_LOADING,
  GET_DASHBOARDCARD_SUCCESS,
  GET_DASHBOARDCARD_FAILURE,

  GET_HOME_DETAILS_LOADING,
  GET_HOME_DETAILS_SUCCESS,
  GET_HOME_DETAILS_FAILURE,

  GET_MODEL_LIST_LOADING,
  GET_MODEL_LIST_SUCCESS,
  GET_MODEL_LIST_FAILURE,

  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,

  Add_CART_DETAILS_LOADING,
  Add_CART_DETAILS_SUCCESS,
  Add_CART_DETAILS_FAILURE,

  GET_MYCART_DETAILS_LOADING,
  GET_MYCART_DETAILS_SUCCESS,
  GET_MYCART_DETAILS_FAILURE,

  UPDATE_CART_QTY_LOADING,
  UPDATE_CART_QTY_SUCCESS,
  UPDATE_CART_QTY_FAILURE,

  UPDATE_CART_FLAVOUR_LOADING,
  UPDATE_CART_FLAVOUR_SUCCESS,
  UPDATE_CART_FLAVOUR_FAILURE,

  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  
  ORDER_GENERATE_LOADING,
  ORDER_GENERATE_SUCCESS,
  ORDER_GENERATE_FAILURE,

  GET_ORDER_LIST_LOADING,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,

  GET_GLOBAL_SEARCH_LOADING,
  GET_GLOBAL_SEARCH_SUCCESS,
  GET_GLOBAL_SEARCH_FAILURE,

  GET_PROFILE_DETAILS_LOADING,
  GET_PROFILE_DETAILS_SUCCESS,
  GET_PROFILE_DETAILS_FAILURE,

  GET_ORDER_HISTORY_LOADING,
  GET_ORDER_HISTORY_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,

  GET_DEFAULT_ADDRESS_LOADING,
  GET_DEFAULT_ADDRESS_SUCCESS,
  GET_DEFAULT_ADDRESS_FAILURE,

  ADD_ADDRESS_LOADING,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,

  EDIT_PROFILE_LOADING,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,

  GET_CARDATA_LOADING,
  GET_CARDATA_SUCCESS,
  GET_CARDATA_FAILURE,

  DELETE_WISHLIST_LOADING,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAILURE,

  ADD_WISHLIST_LOADING,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAILURE,

  GET_BRAND_DETAILS_LOADING,
  GET_BRAND_DETAILS_SUCCESS,
  GET_BRAND_DETAILS_FAILURE,

  GET_COLOR_LIST_LOADING,
  GET_COLOR_LIST_SUCCESS,
  GET_COLOR_LIST_FAILURE,

  ADD_STORE_DATA_LOADING,
  ADD_STORE_DATA_SUCCESS,
  ADD_STORE_DATA_FAILURE,

  GET_ROUTE_DETAILS_LOADING,
  GET_ROUTE_DETAILS_SUCCESS,
  GET_ROUTE_DETAILS_FAILURE,

  GET_ALL_CATEGORYLIST_LOADING,
  GET_ALL_CATEGORYLIST_SUCCESS,
  GET_ALL_CATEGORYLIST_FAILURE,

  ADD_ENQUIRY_LOADING,
  ADD_ENQUIRY_SUCCESS,
  ADD_ENQUIRY_FAILURE,

  ADD_FOLLOWUP_LOADING,
  ADD_FOLLOWUP_SUCCESS,
  ADD_FOLLOWUP_FAILURE,

  ADD_BOOKING_LOADING,
  ADD_BOOKING_SUCCESS,
  ADD_BOOKING_FAILURE,

  GET_FOLLOWUP_DETAILS_LOADING,
  GET_FOLLOWUP_DETAILS_SUCCESS,
  GET_FOLLOWUP_DETAILS_FAILURE,

  GET_ENQUIRY_DETAILS_LOADING,
  GET_ENQUIRY_DETAILS_SUCCESS,
  GET_ENQUIRY_DETAILS_FAILURE,

  UPDATE_ENQUIRY_LOADING,
  UPDATE_ENQUIRY_SUCCESS,
  UPDATE_ENQUIRY_FAILURE,

  UPDATE_PROFILEPIC_LOADING,
  UPDATE_PROFILEPIC_SUCCESS,
  UPDATE_PROFILEPIC_FAILURE,

  UPDATE_SRM_ENQUIRY_LOADING,
  UPDATE_SRM_ENQUIRY_SUCCESS,
  UPDATE_SRM_ENQUIRY_FAILURE,

  GET_MYTEAMS_DETAILS_LOADING,
  GET_MYTEAMS_DETAILS_SUCCESS,
  GET_MYTEAMS_DETAILS_FAILURE,

  ADD_ASSIGN_ENQUIRY_LOADING,
  ADD_ASSIGN_ENQUIRY_SUCCESS,
  ADD_ASSIGN_ENQUIRY_FAILURE,

  GET_RM_DETAILS_LOADING,
  GET_RM_DETAILS_SUCCESS,
  GET_RM_DETAILS_FAILURE,

  UPDATE_EVALUATION_LOADING,
  UPDATE_EVALUATION_SUCCESS,
  UPDATE_EVALUATION_FAILURE,

} from '../actions/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogout, userAuth } from './userAction';
import { customToast } from '../utills/commonFunctions';


// Kyc submit
export function submitkycLoading() {
  return {
    type: SUBMITKYC_INSERT_LOADING
  };
}

export function submitkycSuccess(payload) {
  return {
    type: SUBMITKYC_INSERT_SUCCESS,
    payload
  };
}
export function submitkycFailure(error) {
  return {
    type: SUBMITKYC_INSERT_FAILURE,
    payload: error
  };
}

export function submitKYC(userinfo) {
  const data = {
    addressproof: userinfo.addressproof,
    panno: userinfo.panno,
    panname: userinfo.panname,
    address1: userinfo.address1,
    address2: userinfo.address2,
    city: userinfo.city,
    statename: userinfo.statename,
    pinno: userinfo.pinno,
    verifyme: userinfo.verifyme,
    user_id: userinfo.user_id,
    accounttype: userinfo.accounttype,
    photograph: JSON.stringify(userinfo.photograph),
    panphoto: JSON.stringify(userinfo.panphoto),
    addressproofphoto: JSON.stringify(userinfo.addressproofphoto),
    pdfimage1: userinfo.pdfimage1,
    pdfimage2: userinfo.pdfimage2,
    frompage: userinfo.frompage
  };

  return (dispatch) => {
    dispatch(submitkycLoading());
    axiosInstance.
      post('kyc/promoter', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(submitkycSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(submitkycFailure(error.response));
        }
      });
  };
}

// Get kyc

export function kycLoading() {
  return {
    type: GETKYC_DATA_LOADING
  };
}

export function kycSuccess(payload) {
  return {
    type: GETKYC_DATA_SUCCESS,
    payload
  };
}
export function kycFailure(error) {
  return {
    type: GETKYC_DATA_FAILURE,
    payload: error
  };
}

export function getKYC(userinfo) {
  const data = {
    accounttype: userinfo.accounttype
  };

  return (dispatch) => {
    dispatch(submitkycLoading());
    axiosInstance.
      post('kyc/promoter/list', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(kycSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(kycFailure(error.response));
        }
      });
  };
}

// Delete  kyc
export function deletekycloading() {
  return {
    type: DELETE_KYC_LOADING
  };
}
export function deletekycsuccess(payload) {
  return {
    type: DELETE_KYC_SUCCESS,
    payload
  };
}

export function deletekycfailure(payload) {
  return {
    type: DELETE_KYC_FAILURE,
    payload
  };
}

export function deletekyc(userinfo) {
  const data = {
    id: userinfo.id
  };

  return (dispatch) => {
    dispatch(deletekycloading());
    axiosInstance.
      delete('kyc/promoter', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(deletekycsuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(deletekycfailure(error.response));
        }
      });
  };
}

// Set card reminder

export function cardreminderDataLoading() {
  return {
    type: CARDREMINDER_DATA_LOADING
  };
}

export function cardreminderDataSuccess(payload) {
  return {
    type: CARDREMINDER_DATA_SUCCESS,
    payload
  };
}
export function cardreminderDataFailure(error) {
  return {
    type: CARDREMINDER_DATA_FAILURE,
    payload: error
  };
}

export function cardreminderData(userinfo) {
  const data = {
    cardnumber: userinfo.cardnumber,
    holdernumber: userinfo.holdernumber
  };

  return (dispatch) => {
    dispatch(cardreminderDataLoading());
    axiosInstance.
      post('card/reminder', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(cardreminderDataSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(cardreminderDataFailure(error.response));
        }
      });
  };
}

export function setCardreminderLoading() {
  return {
    type: CARDREMINDER_INSERT_LOADING
  };
}
export function setCardreminderSuccess(payload) {
  return {
    type: CARDREMINDER_INSERT_SUCCESS,
    payload
  };
}
export function setCardreminderFailure(payload) {
  return {
    type: CARDREMINDER_INSERT_FAILURE,
    payload
  };
}

export function setCardreminder(userinfo) {
  const data = {
    daily: userinfo.daily,
    setall: userinfo.setall,
    monthly: userinfo.monthly,
    cardnumber: userinfo.cardnumber,
    holdernumber: userinfo.holdernumber
  };

  return (dispatch) => {
    dispatch(setCardreminderLoading());
    axiosInstance.
      put('card/reminder', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(setCardreminderSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(setCardreminderFailure(error.response));
        }
      });
  };
}

export function getcredittransactionLoading() {
  return {
    type: GET_CREDIT_TRANSACTION_LOADING
  };
}
export function getcredittransactionSuccess(payload) {
  return {
    type: GET_CREDIT_TRANSACTION_SUCCESS,
    payload
  };
}
export function getcredittransactionFailure(payload) {
  return {
    type: GET_CREDIT_TRANSACTION_FAILURE,
    payload
  };
}

export function getcredittransaction(userinfo) {
  const data = {
    firstday: userinfo.firstday,
    lastday: userinfo.lastday,
    acc_type: userinfo.acc_type,
    cardnumber: userinfo.cardnumber
  };

  return (dispatch) => {
    dispatch(getcredittransactionLoading());
    axiosInstance.
      post('card/transaction', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(getcredittransactionSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(getcredittransactionFailure(error.response));
        }
      });
  };
}

export function uploadprofileimageLoading() {
  return {
    type: UPLOAD_PROFILE_IMAGE_LOADING
  };
}
export function uploadprofileimageSuccess(payload) {
  return {
    type: UPLOAD_PROFILE_IMAGE_SUCCESS,
    payload
  };
}
export function uploadprofileimageFailure(payload) {
  return {
    type: UPLOAD_PROFILE_IMAGE_FAILURE,
    payload
  };
}

// To upload profileimages
export function uploadImage(userinfo) {
  // Console.log(userinfo, "user/profile/image")
  const data = new FormData();
  data.append('accounttype', ACCOUNT_TYPE);
  data.append('image', JSON.stringify(userinfo.image));
  // Data.append('token', userinfo.token);
  const customheader = { 'Content-Type': 'multipart/form-data' };
  return (dispatch) => {
    dispatch(uploadprofileimageLoading());
    if (userinfo.image) {
      axiosInstance.
        put('user/profile/image', data, { customheader }).
        then((res) => {
          if (res.status === 200) {
            const resp = res.data;
            resp.profile_photo += `?${new Date().getTime()}`;
            resp.steps = 'Registered';
            if (res.data && res.data.contact_verified === true) {
              dispatch(userAuth(resp));
              const asynccredentails = JSON.stringify(resp);
              if (asynccredentails) {
                AsyncStorage.setItem('usercrendentials', asynccredentails);
              }
            }
            dispatch(uploadprofileimageSuccess(resp));
          } else if (res.status === 202) {
            dispatch(uploadprofileimageFailure(res.data));
          }
        }).
        catch(async (error) => {
          if (error) {
            if (error.response.status === 403) {
              await customToast(error.response.data.message, 'error');
              setTimeout(async () => {
                await AsyncStorage.removeItem('usercrendentials');
                dispatch(userLogout({}));
              }, 3000);
            }
            dispatch(uploadprofileimageFailure(error.response));
          }
        });
    } else {
      const errors = {
        error: I18n.t('VLD_TOKEN_ERROR')
      };
      dispatch(uploadprofileimageFailure(errors));
    }
  };
}

export function notificationDataLoading() {
  return {
    type: NOTIFICATION_DATA_LOADING
  };
}

export function notificationDataSuccess(payload) {
  return {
    type: NOTIFICATION_DATA_SUCCESS,
    payload
  };
}
export function notificationDataFailure(error) {
  return {
    type: NOTIFICATION_DATA_FAILURE,
    payload: error
  };
}

export function notificationData(userinfo, callback) {
  //  Const data = userinfo;
  return (dispatch) => {
    dispatch(notificationDataLoading());
    axiosInstance.
      get('user/notification').
      then((res) => {
        if (res.status === 200) {
          callback({ data: res.data });
          dispatch(notificationDataSuccess(res.data));
        }
      }).
      catch((error) => {
        if (error) {
          callback({ error: error.response });
          dispatch(notificationDataFailure(error.response));
        }
      });
  };
}

export function setNotificationLoading() {
  return {
    type: NOTIFICATION_INSERT_LOADING
  };
}
export function setNotificationSuccess(payload) {
  return {
    type: NOTIFICATION_INSERT_SUCCESS,
    payload
  };
}
export function setNotificationFailure(payload) {
  return {
    type: NOTIFICATION_INSERT_FAILURE,
    payload
  };
}

export function setNotification(userinfo, callback) {
  const data = {
    daily: userinfo.daily,
    weekly: userinfo.weekly,
    monthly: userinfo.monthly,
    account_type: ACCOUNT_TYPE
  };
  // Console.log(data, "user/notification")
  return (dispatch) => {
    dispatch(setNotificationLoading());
    axiosInstance.
      put('user/notification', data).
      then((res) => {
        // Console.log(res, "notification")
        if (res.status === 200) {
          callback({ data: res.data });
          dispatch(setNotificationSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            callback({ error: error.response });
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          callback({ error: error.response });
          dispatch(setNotificationFailure(error.response));
        }
      });
  };
}

export function userDataLoading() {
  return {
    type: USER_DATA_LOADING
  };
}

export function userDataSuccess(payload) {
  return {
    type: USER_DATA_SUCCESS,
    payload
  };
}
export function userDataFailure(error) {
  return {
    type: USER_DATA_FAILURE,
    payload: error
  };
}
export function userData(userinfo) {
  return (dispatch) => {
    dispatch(userDataLoading());
    axiosInstance.
      get('user/profile').
      then((res) => {
        if (res.status === 200) {
          const resp = res.data;
          if (resp.profile_photo) {
            resp.profile_photo += `?${new Date().getTime()}`;
          }
          dispatch(userDataSuccess(resp));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(userDataFailure(error.response));
        }
      });
  };
}

export function aboutmeSuccess(payload) {
  return {
    type: ABOUT_ME_SUCCESS,
    payload
  };
}
export function aboutmeFailure(payload) {
  return {
    type: ABOUT_ME_FAILURE,
    payload
  };
}

export const updateName = async (data) => {
  try {
    const response = await axiosInstance.put('user/profile/name', data);
    if (response.status === 200) {
      if (response.data && response?.data?.contact_verified === true) {
        response.data.prevpage = '';
        response.data.lockscreen = true;
        response.data.steps = 'Registered';
        const asynccredentails = JSON.stringify(response.data);
        if (asynccredentails) {
          AsyncStorage.setItem('usercrendentials', asynccredentails);
        }
        return {
          error: false,
          data: response?.data
        };
      }
    }
  } catch (error) {

  }
};

export function UpdateAboutMe(data) {
  // Console.log(data, "data from user/profile/name")
  return (dispatch) => {
    axiosInstance.
      put('user/profile/name', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(aboutmeSuccess(res.data));
          if (res.data && res.data.contact_verified === true) {
            res.data.prevpage = '';
            res.data.lockscreen = true;
            res.data.steps = 'Registered';
            const asynccredentails = JSON.stringify(res.data);
            if (asynccredentails) {
              AsyncStorage.setItem('usercrendentials', asynccredentails);
            }
            dispatch(userAuth(res.data));
          }
        } else if (res.status === 202) {
          dispatch(aboutmeFailure(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          // Console.log('err action ', error)
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(aboutmeFailure(error));
        }
      });
  };
}

// BANK //
export function bankLoading() {
  return {
    type: BANK_LOADING
  };
}
export function bankSuccess(payload) {
  return {
    type: BANK_SUCCESS,
    payload
  };
}
export function bankFailure(payload) {
  return {
    type: BANK_FAILURE,
    payload
  };
}

export function Mybank(userinfo) {
  const data = userinfo;
  return (dispatch) => {
    dispatch(bankLoading());
    axiosInstance.
      put('bank/bank', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(bankSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(bankFailure(error));
        }
      });
  };
}

export function deletebankLoading() {
  return {
    type: DELETE_BANK_LOADING
  };
}
export function deletebankSuccess(payload) {
  return {
    type: DELETE_BANK_SUCCESS,
    payload
  };
}
export function deletebankFailure(payload) {
  return {
    type: DELETE_BANK_FAILURE,
    payload
  };
}

export function newbankLoading() {
  return {
    type: NEW_BANK_LOADING
  };
}
export function newbankSuccess(payload) {
  return {
    type: NEW_BANK_SUCCESS,
    payload
  };
}
export function newbankFailure(payload) {
  return {
    type: NEW_BANK_FAILURE,
    payload
  };
}

export function bankDataLoading() {
  return {
    type: BANK_DATA_LOADING
  };
}

export function bankDataSuccess(payload) {
  return {
    type: BANK_DATA_SUCCESS,
    payload
  };
}
export function bankDataFailure(error) {
  return {
    type: BANK_DATA_FAILURE,
    payload: error
  };
}

export function creditcardLoading() {
  return {
    type: CREDITCARD_LOADING
  };
}
export function creditcardSuccess(payload) {
  return {
    type: CREDITCARD_SUCCESS,
    payload
  };
}
export function creditcardFailure(payload) {
  return {
    type: CREDITCARD_FAILURE,
    payload
  };
}

export function updateCreditcard(userinfo) {
  const data = {
    cardholder: userinfo.cardholder,
    creditcardno: userinfo.creditcardno,
    issuername: userinfo.issuername,
    cardexpiry: userinfo.cardexpiry,
    creditcard_id: userinfo.creditcard_id
  };

  return (dispatch) => {
    dispatch(creditcardLoading());
    axiosInstance.
      put('card/card', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(creditcardSuccess(res.data));
          dispatch(creditData(res.data));
          if (
            res.data &&
            res.data[0] &&
            res.data[0].contact_verified === true
          ) {
            const asynccredentails = JSON.stringify(res.data);
            if (asynccredentails) {
              AsyncStorage.setItem('creditdata', asynccredentails);
            }
          }
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(creditcardFailure(error.response));
        }
      });
  };
}

export function newcreditcardLoading() {
  return {
    type: NEW_CREDITCARD_LOADING
  };
}
export function newcreditcardSuccess(payload) {
  return {
    type: NEW_CREDITCARD_SUCCESS,
    payload
  };
}
export function newcreditcardFailure(payload) {
  return {
    type: NEW_CREDITCARD_FAILURE,
    payload
  };
}

export function Newcreditcard(userinfo) {
  const data = {
    cardholder: userinfo.cardholder,
    creditcardno: userinfo.creditcardno,
    issuername: userinfo.issuername,
    cardexpiry: userinfo.cardexpiry,
    acc_type: userinfo.acc_type,
    accounttype: userinfo.accounttype
  };

  return (dispatch) => {
    dispatch(newfamilyLoading());
    axiosInstance.
      post('card/card', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(newcreditcardSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error && error.response) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(newcreditcardFailure(error.response.data));
        }
      });
  };
}

export function creditcardDataLoading() {
  return {
    type: CREDITCARD_DATA_LOADING
  };
}

export function creditcardDataSuccess(payload) {
  return {
    type: CREDITCARD_DATA_SUCCESS,
    payload
  };
}
export function creditcardDataFailure(error) {
  return {
    type: CREDITCARD_DATA_FAILURE,
    payload: error
  };
}

export function creditcardData(userinfo) {
  const data = { acc_type: userinfo.acc_type };

  return (dispatch) => {
    dispatch(creditcardDataLoading());
    axiosInstance.
      post('card/list', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(creditcardDataSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(creditcardDataFailure(error.response));
        }
      });
  };
}

export function deletecreditcardLoading() {
  return {
    type: DELETE_CREDITCARD_LOADING
  };
}
export function deletecreditcardSuccess(payload) {
  return {
    type: DELETE_CREDITCARD_SUCCESS,
    payload
  };
}
export function deletecreditcardFailure(payload) {
  return {
    type: DELETE_CREDITCARD_FAILURE,
    payload
  };
}

export function Deletecreditcard(userinfo) {
  const data = { id: userinfo.id };
  return (dispatch) => {
    dispatch(deletecreditcardLoading());
    axiosInstance.
      delete('card/card', data).
      then((res) => {
        if (res.status === 200) {
          dispatch(deletecreditcardSuccess(res.data));
        }
      }).
      catch(async (error) => {
        if (error) {
          if (error.response.status === 403) {
            await customToast(error.response.data.message, 'error');
            setTimeout(async () => {
              await AsyncStorage.removeItem('usercrendentials');
              dispatch(userLogout({}));
            }, 3000);
          }
          dispatch(deletecreditcardFailure(error.response));
        }
      });
  };
}

// -----support  insert-----------
export function supportsubmitLoading() {
  return {
    type: SUPPORT_INSERT_LOADING
  };
}

export function supportsubmitSuccess(payload) {
  return {
    type: SUPPORT_INSERT_SUCCESS,
    payload
  };
}

export function supportsubmitFailure(payload) {
  return {
    type: SUPPORT_INSERT_FAILURE,
    payload
  };
}

export const submitsupport = (data) => (dispatch) => {
  dispatch(supportsubmitLoading());
  axiosInstance.
    post('user/support', data).
    then((res) => {
      if (res.status === 200) {
        dispatch(supportsubmitSuccess(res.data));
      } else {
        dispatch(supportsubmitFailure(res.data));
      }
    }).
    catch(async (error) => {
      if (error) {
        if (error.response.status === 403) {
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}));
          }, 3000);
        }
        dispatch(supportsubmitFailure(error.response));
      }
    });
};

// -----feedback insert-----------
export function feedbacksubmitLoading() {
  return {
    type: FEEDBACK_INSERT_LOADING
  };
}

export function feedbacksubmitSuccess(payload) {
  return {
    type: FEEDBACK_INSERT_SUCCESS,
    payload
  };
}

export function feedbacksubmitFailure(payload) {
  return {
    type: FEEDBACK_INSERT_FAILURE,
    payload
  };
}

export const feedbacksubmit = (data, callback) => (dispatch) => {
  // console.log(data, "user/feedback")
  dispatch(feedbacksubmitLoading());
  axiosInstance.
    post('user/feedback', data).
    then((res) => {
      // console.log(res, "hhhhhhhhhhhhhh")
      if (res.status === 200) {
        callback({ data: res.data });
        dispatch(feedbacksubmitSuccess(res.data));
      } else {
        callback({ data: res.data });
        dispatch(feedbacksubmitFailure(res.data));
      }
    }).
    catch(async (error) => {
      if (error) {
        // console.log('sfsdfhhhhhhhhhhhhhh'+JSON.error)
        if (error.response.status === 403) {
          // console.log(error, "hhhhhhhhhhhhhh")
          callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}));
          }, 3000);
        }
        callback({ error: error.response });
        dispatch(feedbacksubmitFailure(error.response));
      }
    });
};

// -----feedback insert-----------
export function getReffcodeLoading() {
  return {
    type: GET_REFCODE_LOADING
  };
}

export function getReffcodeSuccess(payload) {
  return {
    type: GET_REFCODE_SUCCESS,
    payload
  };
}

export function getReffcodeFailure(payload) {
  return {
    type: GET_REFCODE_FAILURE,
    payload
  };
}

// "referralCode": "O5K6Z4", "referralLink": "https://app.rewardwale.in/j24ZWWPtrHygi1qd6
export const getReffcode = (data) => (dispatch) => {
  dispatch(getReffcodeLoading());
  axiosInstance.
    post('user/referral').
    then((res) => {
      if (res.status === 200) {
        dispatch(getReffcodeSuccess(res.data));
        // console.log(res.data, 'res.data');
      } else {
        dispatch(getReffcodeFailure(res.data));
      }
    }).
    catch(async (error) => {
      // Console.log(error, 'error....')
      if (error) {
        if (error.response.status === 403) {
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}));
          }, 3000);
        }
        dispatch(getReffcodeFailure(error.response));
      }
    });
};

// -----feedback insert-----------
export function previousfeedbackLoading() {
  return {
    type: GET_USER_FEEDBACK_LOADING
  };
}

export function previousfeedbackSuccess(payload) {
  return {
    type: GET_USER_FEEDBACK_SUCCESS,
    payload
  };
}

export function previousfeedbackFailure(payload) {
  return {
    type: GET_USER_FEEDBACK_FAILURE,
    payload
  };
}

export const previousfeedback = (data, callback) => (dispatch) => {
  // Console.log(data, "user/feedback/lastrecord")
  /*
   *   Const userdata = {
   *     accounttype: data.accounttype
   * }
   */
  // (dispatch) => {
  dispatch(previousfeedbackLoading());
  axiosInstance.
    post('user/feedback/lastrecord', data).
    then((res) => {
      if (res.status === 200) {
        callback({ data: res.data });
        dispatch(previousfeedbackSuccess(res.data));
      } else {
        callback({ data: res.data });
        dispatch(previousfeedbackFailure(res.data));
      }
    }).
    catch(async (error) => {
      if (error) {
        if (error.response.status === 403) {
          callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
          setTimeout(async () => {
            await AsyncStorage.removeItem('usercrendentials');
            dispatch(userLogout({}));
          }, 3000);
        }
        callback({ error: error.response });
        dispatch(previousfeedbackFailure(error.response));
      }
    });
  // };
};

// GET TICKET CATEGORIES
// export const saveTicketCat = (payload) => {
//   console.log('payload ', payload)
//   return {
//     type: GET_TICKET_CATEGORY_SUCCESS,
//     payload
//   }
// };
export const saveTicketCat = (payload) => ({
  type: GET_TICKET_CATEGORY_SUCCESS,
  payload
});
export const getTicketCategory = async () => {
  try {
    const { data } = await axiosInstance.get('tickets/category')
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

// CREATE TICKET
export const createTicket = async (params) => {
  try {
    const { data } = await axiosInstance.post('tickets/createticket', params)
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

// TO GET TICKET LIST OF Particular User

export const saveTicketList = (payload) => ({
  type: GET_TICKET_LIST_SUCCESS,
  payload
});
export const getTicketList = async () => {
  try {
    const { data } = await axiosInstance.get('tickets/ticketlist')
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

// tickets/chat
export const getChat = async (params) => {
  try {
    const { data } = await axiosInstance.post('tickets/getchat', params)
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

export const saveChat = async (params) => {
  try {
    const { data } = await axiosInstance.post('tickets/savechat', params)
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}
//REOPEN TICKET
export const reOpenTicket = async (params) => {
  try {
    const { data } = await axiosInstance.post('tickets/reopen', params)
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}
export const deleteuseraccount = async (params) => {
  try {
    const { data } = await axiosInstance.post('user/personal/deleteaccount', params)
    return { error: false, data }
  } catch (error) {
    customToast(error?.response?.data?.message, 'error')
    return { error: true, data: error?.response?.data?.message }
  }
}

deleteuseraccount
export function statesLoading() {
  return {
    type: STATE_NAME_LOADING
  };
}

export function statesSuccess(payload) {
  return {
    type: STATE_NAME_SUCCESS,
    payload
  };
}

export function statesFailure(payload) {
  return {
    type: STATE_NAME_FAILURE,
    payload
  };
}

export const stateNames = () => (dispatch) => {
  dispatch(statesLoading());
  axiosInstance.get('/master/state').
    then((res) => {
      if (res?.status === 200 && res?.data) {
        dispatch(statesSuccess(res?.data?.data));
      }
    }).
    catch((error) => {
      // Console.log("ERROR is there:", error)
      if (error) {
        // Console.log('IF ERROR:', error)
        dispatch(statesFailure(error.response));
      }
    });
};

export function dashboardcardLoading() {
  return {
    type: GET_DASHBOARDCARD_LOADING
  };
}

export function dashboardcardSuccess(payload) {
  return {
    type: GET_DASHBOARDCARD_SUCCESS,
    payload
  };
}

export function dashboardcardFailure(payload) {
  return {
    type: GET_DASHBOARDCARD_FAILURE,
    payload
  };
}


// API Call For GET DashboardCard List
export const dashboardApi = () => {
  // Console.log("i am in Dashboard api")
  const url = 'dashboardads';
  return (dispatch) => {
    dispatch(dashboardcardLoading());
    axiosInstance.
      get(url).
      then((res) => {
        // Console.log(res?.data?.data, "review data..............1111")
        if (res?.status === 200 && res?.data) {
          dispatch(dashboardcardSuccess(res?.data?.data));
        }
      }).
      catch((error) => {

        /*
         * Alert('errrr', error.response)
         * console.log('error-----------111', error);
         */
        if (error) {
          dispatch(dashboardcardFailure(error.response));
        }
      });
  };
};

 // home details api 
export function getHomeDetailsLoading() {
  return {
    type: GET_HOME_DETAILS_LOADING,
  };
}

export function getHomeDetailsSuccess(payload) {
  return {
    type: GET_HOME_DETAILS_SUCCESS,
    payload,
  };
}

export function getHomeDetailsFailure(payload) {
  return {
    type: GET_HOME_DETAILS_FAILURE,
    payload,
  };
}

export const getHomeDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_all_home',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getHomeDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getHomeDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getHomeDetailsFailure(error.response.data.message));
    });
};



 // my teams details api 
 export function getMyTeamsDetailsLoading() {
  return {
    type: GET_MYTEAMS_DETAILS_LOADING,
  };
}

export function getMyTeamsDetailsSuccess(payload) {
  return {
    type: GET_MYTEAMS_DETAILS_SUCCESS,
    payload,
  };
}

export function getMyTeamsDetailsFailure(payload) {
  return {
    type: GET_MYTEAMS_DETAILS_FAILURE,
    payload,
  };
}

export const getMyTeamsDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('my_team',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getMyTeamsDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getMyTeamsDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getMyTeamsDetailsFailure(error.response.data.message));
    });
};




// GET PRODUCT LIST
export function getModelListLoading() {
  return {
    type: GET_MODEL_LIST_LOADING,
  };
}

export function getModelListSuccess(payload) {
  return {
    type: GET_MODEL_LIST_SUCCESS,
    payload,
  };
}

export function getModelListFailure(payload) {
  return {
    type: GET_MODEL_LIST_FAILURE,
    payload,
  };
}

export const getModelDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_model',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getModelListFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getModelListSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getModelListFailure(error.response.data.message));
    });
};



// GET PRODUCT DETAILS 
export function getProductDetailsLoading() {
  return {
    type: GET_PRODUCT_DETAILS_LOADING,
  };
}

export function getProductDetailsSuccess(payload) {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload,
  };
}

export function getProductDetailsFailure(payload) {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    payload,
  };
}

export const getProductDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('product_details',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getProductDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getProductDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getProductDetailsFailure(error.response.data.message));
    });
};



// add to cart  
export function getAddToCartLoading() {
  return {
    type: Add_CART_DETAILS_LOADING,
  };
}

export function getAddToCartSuccess(payload) {
  return {
    type: Add_CART_DETAILS_SUCCESS,
    payload,
  };
}

export function getAddToCartFailure(payload) {
  return {
    type: Add_CART_DETAILS_FAILURE,
    payload,
  };
}

export const getAddToCartApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_to_cart',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAddToCartFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAddToCartSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAddToCartFailure(error.response.data.message));
    });
};



// LIST CART   
export function getMyCartDetailsLoading() {
  return {
    type: GET_MYCART_DETAILS_LOADING,
  };
}

export function getMyCartDetailsSuccess(payload) {
  return {
    type: GET_MYCART_DETAILS_SUCCESS,
    payload,
  };
}

export function getMyCartDetailsFailure(payload) {
  return {
    type: GET_MYCART_DETAILS_FAILURE,
    payload,
  };
}

export const getMyCartApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_cart',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getMyCartDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getMyCartDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getMyCartDetailsFailure(error.response.data.message));
    });
};


// update cart qty    
export function updateCartQtyLoading() {
  return {
    type: UPDATE_CART_QTY_LOADING,
  };
}

export function updateCartQtySuccess(payload) {
  return {
    type: UPDATE_CART_QTY_SUCCESS,
    payload,
  };
}

export function updateCartQtyFailure(payload) {
  return {
    type: UPDATE_CART_QTY_FAILURE,
    payload,
  };
}

export const updateCartQtyApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_cart',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(updateCartQtyFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(updateCartQtySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(updateCartQtyFailure(error.response.data.message));
    });
};



// update cart flavour    
export function updateCartFlavourLoading() {
  return {
    type: UPDATE_CART_FLAVOUR_LOADING,
  };
}

export function updateCartFlavourSuccess(payload) {
  return {
    type: UPDATE_CART_FLAVOUR_SUCCESS,
    payload,
  };
}

export function updateCartFlavourFailure(payload) {
  return {
    type: UPDATE_CART_FLAVOUR_FAILURE,
    payload,
  };
}

export const updateflavourApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_flavour',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(updateCartFlavourFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(updateCartFlavourSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(updateCartFlavourFailure(error.response.data.message));
    });
};


// delete cart qty    
export function deleteCartLoading() {
  return {
    type: DELETE_CART_LOADING,
  };
}

export function deleteCartSuccess(payload) {
  return {
    type: DELETE_CART_SUCCESS,
    payload,
  };
}

export function deleteCartFailure(payload) {
  return {
    type: DELETE_CART_FAILURE,
    payload,
  };
}

export const deleteCartApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('delete_cart',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(deleteCartFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(deleteCartSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(deleteCartFailure(error.response.data.message));
    });
};


// order generate     
export function orderGenerateLoading() {
  return {
    type: ORDER_GENERATE_LOADING,
  };
}

export function orderGenerateSuccess(payload) {
  return {
    type: ORDER_GENERATE_SUCCESS,
    payload,
  };
}

export function orderGenerateFailure(payload) {
  return {
    type: ORDER_GENERATE_FAILURE,
    payload,
  };
}

export const orderGenerateApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('order_generate',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(orderGenerateFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(orderGenerateSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        // setTimeout(async () => {
        //   await AsyncStorage.removeItem('vendorinfo');
        //   dispatch(userLogout({}));
        // }, 3000);
      }
      callback({ error: error.response });
      dispatch(orderGenerateFailure(error.response.data.message));
    });
};


// get order list    
export function getorderListLoading() {
  return {
    type: GET_ORDER_LIST_LOADING,
  };
}

export function getorderListSuccess(payload) {
  return {
    type: GET_ORDER_LIST_SUCCESS,
    payload,
  };
}

export function getorderListFailure(payload) {
  return {
    type: GET_ORDER_LIST_FAILURE,
    payload,
  };
}

export const getOrderDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('get_orderDetails',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getorderListFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getorderListSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getorderListFailure(error.response.data.message));
    });
};



// get global Search api   
export function getGlobalSearchLoading() {
  return {
    type: GET_GLOBAL_SEARCH_LOADING,
  };
}

export function getGlobalSearchSuccess(payload) {
  return {
    type: GET_GLOBAL_SEARCH_SUCCESS,
    payload,
  };
}

export function getGlobalSearchFailure(payload) {
  return {
    type: GET_GLOBAL_SEARCH_FAILURE,
    payload,
  };
}

export const getGlobalSearchApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('search_global',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getGlobalSearchFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getGlobalSearchSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getGlobalSearchFailure(error.response.data.message));
    });
};



// get profile details    
export function getProfileDetailsLoading() {
  return {
    type: GET_PROFILE_DETAILS_LOADING,
  };
}

export function getProfileDetailsSuccess(payload) {
  return {
    type: GET_PROFILE_DETAILS_SUCCESS,
    payload,
  };
}

export function getProfileDetailsFailure(payload) {
  return {
    type: GET_PROFILE_DETAILS_FAILURE,
    payload,
  };
}

export const getProfileDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('get_profiledetails',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getProfileDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getProfileDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getProfileDetailsFailure(error.response.data.message));
    });
};



// get order list     
export function getOrderHistoryLoading() {
  return {
    type: GET_ORDER_HISTORY_LOADING,
  };
}

export function getOrderHistorySuccess(payload) {
  return {
    type: GET_ORDER_HISTORY_SUCCESS,
    payload,
  };
}

export function getOrderHistoryFailure(payload) {
  return {
    type: GET_ORDER_HISTORY_FAILURE,
    payload,
  };
}

export const getOrderHistoryApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('order_history',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getOrderHistoryFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getOrderHistorySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getOrderHistoryFailure(error.response.data.message));
    });
};


// get order list     
export function getDefaultAddressLoading() {
  return {
    type: GET_DEFAULT_ADDRESS_LOADING,
  };
}

export function getDefaultAddressSuccess(payload) {
  return {
    type: GET_DEFAULT_ADDRESS_SUCCESS,
    payload,
  };
}

export function getDefaultAddressFailure(payload) {
  return {
    type: GET_DEFAULT_ADDRESS_FAILURE,
    payload,
  };
}

export const getDefaultAddressApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('get_defaultaddress',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getDefaultAddressFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getDefaultAddressSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getDefaultAddressFailure(error.response.data.message));
    });
};


// add address or update address    
export function getAddAddressLoading() {
  return {
    type: ADD_ADDRESS_LOADING,
  };
}

export function getAddAddressSuccess(payload) {
  return {
    type: ADD_ADDRESS_SUCCESS,
    payload,
  };
}

export function getAddAddressFailure(payload) {
  return {
    type: ADD_ADDRESS_FAILURE,
    payload,
  };
}

export const getAddUpdateAddressApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_address',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAddAddressFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAddAddressSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAddAddressFailure(error.response.data.message));
    });
};



//   edit profile
export function editProfileLoading() {
  return {
    type: EDIT_PROFILE_LOADING,
  };
}

export function editProfileSuccess(payload) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload,
  };
}

export function editProfileFailure(payload) {
  return {
    type: EDIT_PROFILE_FAILURE,
    payload,
  };
}

export const getEditProfileApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('edit_profile',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(editProfileFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(editProfileSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(editProfileFailure(error.response.data.message));
    });
};



//   get list model
export function getCarDataLoading() {
  return {
    type: GET_CARDATA_LOADING,
  };
}

export function getCarDataSuccess(payload) {
  return {
    type: GET_CARDATA_SUCCESS,
    payload,
  };
}

export function getCarDataFailure(payload) {
  return {
    type: GET_CARDATA_FAILURE,
    payload,
  };
}

export const getCarDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_car',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getCarDataFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getCarDataSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getCarDataFailure(error.response.data.message));
    });
};




// delete wishlist     
export function deleteWishlistLoading() {
  return {
    type: DELETE_WISHLIST_LOADING,
  };
}

export function deleteWishlistSuccess(payload) {
  return {
    type: DELETE_WISHLIST_SUCCESS,
    payload,
  };
}

export function deleteWishlistFailure(payload) {
  return {
    type: DELETE_WISHLIST_FAILURE,
    payload,
  };
}

export const deleteWishlistApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('delete_wishlist',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(deleteWishlistFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(deleteWishlistSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(deleteWishlistFailure(error.response.data.message));
    });
};


// add wishlist     
export function addWishlistLoading() {
  return {
    type: ADD_WISHLIST_LOADING,
  };
}

export function addWishlistSuccess(payload) {
  return {
    type: ADD_WISHLIST_SUCCESS,
    payload,
  };
}

export function addWishlistFailure(payload) {
  return {
    type: ADD_WISHLIST_FAILURE,
    payload,
  };
}

export const addWishlistApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_wishlist',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(addWishlistFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(addWishlistSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(addWishlistFailure(error.response.data.message));
    });
};


 // list brand api 
 export function getBrandDetailsLoading() {
  return {
    type: GET_BRAND_DETAILS_LOADING,
  };
}

export function getBrandDetailsSuccess(payload) {
  return {
    type: GET_BRAND_DETAILS_SUCCESS,
    payload,
  };
}

export function getBrandDetailsFailure(payload) {
  return {
    type: GET_BRAND_DETAILS_FAILURE,
    payload,
  };
}

export const getBrandDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .get('list_brand')
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getBrandDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getBrandDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getBrandDetailsFailure(error.response.data.message));
    });
};


// list color
 export function getColorListLoading() {
  return {
    type: GET_COLOR_LIST_LOADING,
  };
}

export function getColorListSuccess(payload) {
  return {
    type: GET_COLOR_LIST_SUCCESS,
    payload,
  };
}

export function getColorListFailure(payload) {
  return {
    type: GET_COLOR_LIST_FAILURE,
    payload,
  };
}

export const getColorDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
  .post('list_color',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getColorListFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getColorListSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getColorListFailure(error.response.data.message));
    });
};


// add store data 
export function addStoreDataLoading() {
  return {
    type: ADD_STORE_DATA_LOADING,
  };
}

export function addStoreDataSuccess(payload) {
  return {
    type: ADD_STORE_DATA_SUCCESS,
    payload,
  };
}

export function addStoreDataFailure(payload) {
  return {
    type: ADD_STORE_DATA_FAILURE,
    payload,
  };
}

export const addStoreDataApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_store_data_cart',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(addStoreDataFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(addStoreDataSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(addStoreDataFailure(error.response.data.message));
    });
};



// list brand api 
export function getRouteDetailsLoading() {
  return {
    type: GET_ROUTE_DETAILS_LOADING,
  };
}

export function getRouteDetailsSuccess(payload) {
  return {
    type: GET_ROUTE_DETAILS_SUCCESS,
    payload,
  };
}

export function getRouteDetailsFailure(payload) {
  return {
    type: GET_ROUTE_DETAILS_FAILURE,
    payload,
  };
}

export const getRouteDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .get('list_route')
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getRouteDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getRouteDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getRouteDetailsFailure(error.response.data.message));
    });
};


// list category 


 // list brand api 
 export function getAllCategoryListLoading() {
  return {
    type: GET_ALL_CATEGORYLIST_LOADING,
  };
}

export function getAllCategoryListSuccess(payload) {
  return {
    type: GET_ALL_CATEGORYLIST_SUCCESS,
    payload,
  };
}

export function getAllCategoryListFailure(payload) {
  return {
    type: GET_ALL_CATEGORYLIST_FAILURE,
    payload,
  };
}

export const getAllCategoryListApi = (params, callback) => (dispatch) => {
  axiosInstance
    .get('list_all_category')
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAllCategoryListFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAllCategoryListSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAllCategoryListFailure(error.response.data.message));
    });
};




// add enquiry     
export function getAddEnquiryLoading() {
  return {
    type: ADD_ENQUIRY_LOADING,
  };
}

export function getAddEnquirySuccess(payload) {
  return {
    type: ADD_ENQUIRY_SUCCESS,
    payload,
  };
}

export function getAddEnquiryFailure(payload) {
  return {
    type: ADD_ENQUIRY_FAILURE,
    payload,
  };
}

export const getAddEnquiryApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_enquiry',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAddEnquiryFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAddEnquirySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAddEnquiryFailure(error.response.data.message));
    });
};




// add followup    
export function getAddFollowupLoading() {
  return {
    type: ADD_FOLLOWUP_LOADING,
  };
}

export function getAddFollowupSuccess(payload) {
  return {
    type: ADD_FOLLOWUP_SUCCESS,
    payload,
  };
}

export function getAddFollowupFailure(payload) {
  return {
    type: ADD_FOLLOWUP_FAILURE,
    payload,
  };
}

export const getAddFollowupApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_followup',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAddFollowupFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAddFollowupSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAddFollowupFailure(error.response.data.message));
    });
};



// add create booking    
export function getAddBookingLoading() {
  return {
    type: ADD_BOOKING_LOADING,
  };
}

export function getAddBookingSuccess(payload) {
  return {
    type: ADD_BOOKING_SUCCESS,
    payload,
  };
}

export function getAddBookingFailure(payload) {
  return {
    type: ADD_BOOKING_FAILURE,
    payload,
  };
}

export const createBookingApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('createBooking',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getAddBookingFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getAddBookingSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getAddBookingFailure(error.response.data.message));
    });
};




 // get Follow up  details api 
 export function getFollowUpDetailsLoading() {
  return {
    type: GET_FOLLOWUP_DETAILS_LOADING,
  };
}

export function getFollowUpDetailsSuccess(payload) {
  return {
    type: GET_FOLLOWUP_DETAILS_SUCCESS,
    payload,
  };
}

export function getFollowUpDetailsFailure(payload) {
  return {
    type: GET_FOLLOWUP_DETAILS_FAILURE,
    payload,
  };
}

export const getFollowUpDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_followup',params)
    .then((response) => {
      console.log('get list followup'+JSON.stringify(response))
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getFollowUpDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getFollowUpDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getFollowUpDetailsFailure(error.response.data.message));
    });
};



 // get Follow up  details api 
 export function getEnquiryDetailsLoading() {
  return {
    type: GET_ENQUIRY_DETAILS_LOADING,
  };
}

export function getEnquiryDetailsSuccess(payload) {
  return {
    type: GET_ENQUIRY_DETAILS_SUCCESS,
    payload,
  };
}

export function getEnquiryDetailsFailure(payload) {
  return {
    type: GET_ENQUIRY_DETAILS_FAILURE,
    payload,
  };
}

export const getEnquiryByIdDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('get_enquiryData',params)
    .then((response) => {
      console.log('get enquiryData'+JSON.stringify(response))
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getEnquiryDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getEnquiryDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getEnquiryDetailsFailure(error.response.data.message));
    });
};



// update enquiry     
export function getUpdateEnquiryLoading() {
  return {
    type: UPDATE_ENQUIRY_LOADING,
  };
}

export function getUpdateEnquirySuccess(payload) {
  return {
    type: UPDATE_ENQUIRY_SUCCESS,
    payload,
  };
}

export function getUpdateEnquiryFailure(payload) {
  return {
    type: UPDATE_ENQUIRY_FAILURE,
    payload,
  };
}

export const getUpdateEnquiryApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_enquiry',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getUpdateEnquiryFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getUpdateEnquirySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getUpdateEnquiryFailure(error.response.data.message));
    });
};



// update enquiry     
export function getUpdateEvaluationLoading() {
  return {
    type: UPDATE_EVALUATION_LOADING,
  };
}

export function getUpdateEvaluationSuccess(payload) {
  return {
    type: UPDATE_EVALUATION_SUCCESS,
    payload,
  };
}

export function getUpdateEvaluationFailure(payload) {
  return {
    type: UPDATE_EVALUATION_FAILURE,
    payload,
  };
}

export const getUpdateEvaluationApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_start_evaluation',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getUpdateEvaluationFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getUpdateEvaluationSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getUpdateEvaluationFailure(error.response.data.message));
    });
};


// update enquiry     
export function getUpdateSrmEnquiryLoading() {
  return {
    type: UPDATE_SRM_ENQUIRY_LOADING,
  };
}

export function getUpdateSrmEnquirySuccess(payload) {
  return {
    type: UPDATE_SRM_ENQUIRY_SUCCESS,
    payload,
  };
}

export function getUpdateSrmEnquiryFailure(payload) {
  return {
    type: UPDATE_SRM_ENQUIRY_FAILURE,
    payload,
  };
}

export const getUpdateSrmEnquiryApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_srm_enquiry',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getUpdateSrmEnquiryFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getUpdateSrmEnquirySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getUpdateSrmEnquiryFailure(error.response.data.message));
    });
};






// update enquiry     
export function getUpdateProfilePicLoading() {
  return {
    type: UPDATE_PROFILEPIC_LOADING,
  };
}

export function getUpdateProfilePicSuccess(payload) {
  return {
    type: UPDATE_PROFILEPIC_SUCCESS,
    payload,
  };
}

export function getUpdateProfilePicFailure(payload) {
  return {
    type: UPDATE_PROFILEPIC_FAILURE,
    payload,
  };
}

export const updateProfilePicApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('update_profilepic',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getUpdateProfilePicFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getUpdateProfilePicSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getUpdateProfilePicFailure(error.response.data.message));
    });
};



// assign  enquiry     
export function addassignEnquiryLoading() {
  return {
    type: ADD_ASSIGN_ENQUIRY_LOADING,
  };
}

export function addassignEnquirySuccess(payload) {
  return {
    type: ADD_ASSIGN_ENQUIRY_SUCCESS,
    payload,
  };
}

export function addassignEnquiryFailure(payload) {
  return {
    type: ADD_ASSIGN_ENQUIRY_FAILURE,
    payload,
  };
}

export const addAssignEnquiryApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('add_assign_enquiry',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(addassignEnquiryFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(addassignEnquirySuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
          await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(addassignEnquiryFailure(error.response.data.message));
    });
};



 // my rm details api 
 export function getMyRmDetailsLoading() {
  return {
    type: GET_RM_DETAILS_LOADING,
  };
}

export function getMyRmDetailsSuccess(payload) {
  return {
    type: GET_RM_DETAILS_SUCCESS,
    payload,
  };
}

export function getMyRmDetailsFailure(payload) {
  return {
    type: GET_RM_DETAILS_FAILURE,
    payload,
  };
}

export const getMyRmDetailsApi = (params, callback) => (dispatch) => {
  axiosInstance
    .post('list_rm',params)
    .then((response) => {
      if (response.data.message) {
        callback({ data: response.data });
        dispatch(getMyRmDetailsFailure(response.data));
      } else {
        callback({ data: response.data });
        dispatch(getMyRmDetailsSuccess(response.data));
      }
    })
    .catch(async (error) => {
      if (error && error.response.status === 403) {
        callback({ error: error.response });
        await customToast(error.response.data.message, 'error');
        setTimeout(async () => {
          await AsyncStorage.removeItem('vendorinfo');
          dispatch(userLogout({}));
        }, 3000);
      }
      callback({ error: error.response });
      dispatch(getMyRmDetailsFailure(error.response.data.message));
    });
};

