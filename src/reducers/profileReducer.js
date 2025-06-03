import {
  ABOUT_ME_LOADING,
  ABOUT_ME_SUCCESS,
  ABOUT_ME_FAILURE,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,

  NOTIFICATION_DATA_LOADING,
  NOTIFICATION_DATA_SUCCESS,
  NOTIFICATION_DATA_FAILURE,
  NOTIFICATION_UPDATE_LOADING,
  NOTIFICATION_UPDATE_SUCCESS,
  NOTIFICATION_UPDATE_FAILURE,
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
  GET_CREDIT_TRANSACTION_LOADING, GET_CREDIT_TRANSACTION_SUCCESS, GET_CREDIT_TRANSACTION_FAILURE,
  CARDREMINDER_INSERT_LOADING, CARDREMINDER_INSERT_SUCCESS, CARDREMINDER_INSERT_FAILURE,
  CARDREMINDER_DATA_LOADING, CARDREMINDER_DATA_SUCCESS, CARDREMINDER_DATA_FAILURE,
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

  GET_REFCODE_LOADING,
  GET_REFCODE_SUCCESS,
  GET_REFCODE_FAILURE,

  GET_USER_FEEDBACK_LOADING,
  GET_USER_FEEDBACK_SUCCESS,
  GET_USER_FEEDBACK_FAILURE,

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

  GET_STORE_LIST_LOADING,
  GET_STORE_LIST_SUCCESS,
  GET_STORE_LIST_FAILURE,

  ADD_STORE_DATA_LOADING,
  ADD_STORE_DATA_SUCCESS,
  ADD_STORE_DATA_FAILURE,

  GET_ROUTE_DETAILS_LOADING,
  GET_ROUTE_DETAILS_SUCCESS,
  GET_ROUTE_DETAILS_FAILURE,

  GET_ALL_CATEGORYLIST_LOADING,
  GET_ALL_CATEGORYLIST_SUCCESS,
  GET_ALL_CATEGORYLIST_FAILURE,

  UPDATE_CART_FLAVOUR_LOADING,
  UPDATE_CART_FLAVOUR_SUCCESS,
  UPDATE_CART_FLAVOUR_FAILURE,

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

  GET_COLOR_LIST_LOADING,
  GET_COLOR_LIST_SUCCESS,
  GET_COLOR_LIST_FAILURE,

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

const initialState = {
  aboutmeSuccess: false,
  aboutme: {},

  userData: {},
  userDataSuccess: false,

  notificationData: {},
  notificationDataSuccess: false,
  notification: {},
  notificationSuccess: false,

  creditcardSuccess: false,
  creditcard: {},
  creditcardData: null,
  creditcardDataSuccess: false,
  creditcarddeleted: [],
  iscreditcardDeleted: false,

  bankSuccess: false,
  bank: {},
  bankData: {},
  bankDataSuccess: false,
  bankdeleted: [],
  isbankDeleted: false,

  uploadprofileimageSuccess: false,
  uploadprofileimage: {},
  credittransactiondata: {},
  credittransactionSuccess: false,

  cardreminderData: {},
  cardreminderDataSuccess: false,
  cardreminder: {},
  cardreminderSuccess: false,
  kycdatasubmit: {},
  kycdatasubmitSuccess: false,
  kycdata: [],
  kycdataSuccess: false,
  kycdelete: [],
  kycdeleteSuccess: false,

  supportDataSuccess: false,
  supportData: [],

  feedbackData: [],
  feedbackDataSuccess: false,

  reffData: [],
  reffDataSuccess: false,

  previousfeedback: [],
  previousfeedbackSuccess: false,

  // Ticket Category
  ticketCategory: [],

  // Create Ticket
  createTicket: [],
  isCreateTicketSuccess: false,

  // To List a particulr ticket
  ticketList: [],
  isTicketListSuccess: false,

  stateNameData: {},
  stateNameDataSuccess: false,
  dashboard: {},
  dashboardcardSuccess: false,
  getHomeDetails: [],
  isGetHomeDetailsSuccess: false,
  getModelList: [],
  getModelListSuccess: false,
  getProductDetails: [],
  getProductDetailsSuccess: false,

  addtoCartDetails: [],
  addtoCartDetailsSuccess: false,
  getMyCartDetails: [],
  getMyCartDetailsSuccess: false,

  updateCartQty: [],
  updateCartQtySuccess: false,

  deleteCartDetails: [],
  deleteCartDetailsSuccess: false,
  orderGenerateDetails: [],
  orderGenerateDetailsSuccess: false,

  orderListDetails: [],
  orderListDetailsSuccess: false,

  getGlobalSearchDetails: [],
  getGlobalSearchDetailsSuccess: false,

  getProfileDetails: [],
  getProfileDetailsSuccess: false,

  getOrderHistory: [],
  getOrderHistorySuccess: false,

  getDefaultAddress: [],
  getDefaultAddressSuccess: false,

  addAddress: [],
  addAddressSuccess: false,

  editProfile: [],
  editProfileSuccess: false,

  getCarList: [],
  getCarListSuccess: false,


  deleteWishlistProduct: [],
  deleteWishlistProductSuccess: false,

  addWishlistProduct: [],
  addWishlistProductSuccess: false,

  getBrandList: [],
  getBrandListSuccess: false,


  getStoreList: [],
  getStoreListSuccess: false,
  addStoreData: [],
  addStoreDataSuccess: false,

  getRouteList: [],
  getRouteListSuccess: false,

  getAllCategoryList: [],
  getAllCategoryListSuccess: false,


  updateCartFlavour: [],
  updateCartFlavourSuccess: false,

  addEquiryData: [],
  addEquiryDataSuccess: false,

  addFollowupData: [],
  addFollowupDataSuccess: false,
  

  addBookingData: [],
  addBookingDataSuccess: false,

  getFollowupList: [],
  getFollowupListSuccess: false,

  getEnquiryDataList: [],
  getEnquiryDataListSuccess: false,

  updateEnquiryDataList: [],
  updateEnquiryDataListSuccess: false,

  updateSrmEnquiryDataList: [],
  updateSrmEnquiryDataListSuccess: false,

  updateProfilePicData: [],
  updateProfilePicDataSuccess: false,

  getColorList: [],
  getColorListSuccess: false,

  getMyTeamsDataList: [],
  getMyTeamsDataSuccess: false,


  addAssignEnquiryData: [],
  addAssignEnquirDataSuccess: false,

  getRmData: [],
  getRmDataSuccess: false,

  updateEvaluationDataList: [],
  updateEvaluationDataListSuccess: false,
};


export default function profileReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case CARDREMINDER_DATA_LOADING:
      return {
        ...state,
        cardreminderDataSuccess: false
      };
    case CARDREMINDER_DATA_SUCCESS:
      return {
        ...state,
        cardreminderDataSuccess: true,
        cardreminderData: action.payload
      };
    case CARDREMINDER_DATA_FAILURE:
      return {
        ...state,
        cardreminderDataSuccess: false,
        cardreminderData: action.payload
      };

    case CARDREMINDER_INSERT_LOADING:
      return {
        ...state,
        cardreminderSuccess: false
      };
    case CARDREMINDER_INSERT_SUCCESS:
      return {
        ...state,
        cardreminderSuccess: true,
        cardreminder: action.payload
      };
    case CARDREMINDER_INSERT_FAILURE:
      return {
        ...state,
        cardreminderSuccess: false,
        cardreminder: action.payload
      };

    case UPLOAD_PROFILE_IMAGE_LOADING:
      return {
        ...state,
        uploadprofileimageSuccess: false
      };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        uploadprofileimageSuccess: true,
        uploadprofileimage: action.payload
      };
    case UPLOAD_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        uploadprofileimageSuccess: false,
        uploadprofileimage: action.payload
      };
    case ABOUT_ME_LOADING:
      return {
        ...state,
        aboutmeSuccess: false
      };
    case ABOUT_ME_SUCCESS:
      return {
        ...state,
        aboutmeSuccess: true,
        aboutme: action.payload
      };
    case ABOUT_ME_FAILURE:
      return {
        ...state,
        aboutmeSuccess: false,
        aboutme: action.payload
      };
    case NOTIFICATION_DATA_LOADING:
      return {
        ...state,
        notificationDataSuccess: false
      };
    case NOTIFICATION_DATA_SUCCESS:
      return {
        ...state,
        notificationDataSuccess: true,
        notificationData: action.payload
      };
    case NOTIFICATION_DATA_FAILURE:
      return {
        ...state,
        notificationDataSuccess: false,
        notificationData: action.payload
      };
    case NOTIFICATION_UPDATE_LOADING:
      return {
        ...state,
        notificationSuccess: false
      };
    case NOTIFICATION_UPDATE_SUCCESS:
      return {
        ...state,
        notificationSuccess: true,
        notification: action.payload
      };
    case NOTIFICATION_UPDATE_FAILURE:
      return {
        ...state,
        notificationSuccess: false,
        notification: action.payload
      };
    case NOTIFICATION_INSERT_LOADING:
      return {
        ...state,
        notificationSuccess: false
      };
    case NOTIFICATION_INSERT_SUCCESS:
      return {
        ...state,
        notificationSuccess: true,
        notification: action.payload
      };
    case NOTIFICATION_INSERT_FAILURE:
      return {
        ...state,
        notificationSuccess: false,
        notification: action.payload
      };
    case USER_DATA_LOADING:
      return {
        ...state,
        userDataSuccess: false
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        userDataSuccess: true,
        userData: action.payload
      };
    case USER_DATA_FAILURE:
      return {
        ...state,
        userDataSuccess: false,
        userData: action.payload
      };

    case GET_CREDIT_TRANSACTION_LOADING:
      return {
        ...state,
        credittransactionSuccess: false
      };
    case GET_CREDIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        credittransactionSuccess: true,
        credittransactiondata: action.payload
      };
    case GET_CREDIT_TRANSACTION_FAILURE:
      return {
        ...state,
        credittransactionSuccess: false,
        credittransactiondata: action.payload
      };

    case CREDITCARD_LOADING:
      return {
        ...state,
        creditcardSuccess: false
      };
    case CREDITCARD_SUCCESS:
      return {
        ...state,
        creditcardSuccess: true,
        creditcard: action.payload
      };
    case CREDITCARD_FAILURE:
      return {
        ...state,
        creditcardSuccess: false,
        creditcard: action.payload
      };
    case DELETE_CREDITCARD_LOADING:
      return {
        ...state,
        creditcarddeleted: [],
        iscreditcardDeleted: false
      };
    case DELETE_CREDITCARD_SUCCESS:
      return {
        ...state,
        creditcarddeleted: action.payload,
        iscreditcardDeleted: true
      };
    case DELETE_CREDITCARD_FAILURE:
      return {
        ...state,
        error: true,
        iscreditcardDeleted: false,
        creditcarddeleted: action.payload
      };
    case NEW_CREDITCARD_LOADING:
      return {
        ...state,
        creditcardSuccess: false
      };
    case NEW_CREDITCARD_SUCCESS:
      return {
        ...state,
        creditcardSuccess: true,
        creditcard: action.payload
      };
    case NEW_CREDITCARD_FAILURE:
      return {
        ...state,
        creditcardSuccess: false,
        creditcard: action.payload
      };
    case CREDITCARD_DATA_LOADING:
      return {
        ...state,
        creditcardData: null,
        creditcardDataSuccess: false
      };

    case CREDITCARD_DATA_SUCCESS:
      return {
        ...state,
        creditcardDataSuccess: true,
        creditcardData: action.payload
      };
    case CREDITCARD_DATA_FAILURE:
      return {
        ...state,
        creditcardDataSuccess: false,
        creditcardData: action.payload
      };

    case DELETE_BANK_LOADING:
      return {
        ...state,
        bankdeleted: [],
        isbankDeleted: false
      };
    case DELETE_BANK_SUCCESS:
      return {
        ...state,
        bankdeleted: action.payload,
        isbankDeleted: true
      };
    case DELETE_BANK_FAILURE:
      return {
        ...state,
        error: true,
        isbankDeleted: false,
        bankdeleted: action.payload
      };
    case BANK_LOADING:
      return {
        ...state,
        bankSuccess: false
      };
    case BANK_SUCCESS:
      return {
        ...state,
        bankSuccess: true,
        bank: action.payload
      };
    case BANK_FAILURE:
      return {
        ...state,
        bankSuccess: false,
        bank: action.payload
      };
    case NEW_BANK_LOADING:
      return {
        ...state,
        bankSuccess: false
      };
    case NEW_BANK_SUCCESS:
      return {
        ...state,
        bankSuccess: true,
        bank: action.payload
      };
    case NEW_BANK_FAILURE:
      return {
        ...state,
        bankSuccess: false,
        bank: action.payload
      };
    case BANK_DATA_LOADING:
      return {
        ...state,
        bankDataSuccess: false
      };

    case BANK_DATA_SUCCESS:
      return {
        ...state,
        bankDataSuccess: true,
        bankData: action.payload
      };
    case BANK_DATA_FAILURE:
      return {
        ...state,
        bankDataSuccess: false,
        bankData: action.payload
      };

    case SUBMITKYC_INSERT_LOADING:
      return {
        ...state,
        kycdatasubmit: null,
        kycdatasubmitSuccess: false
      };

    case SUBMITKYC_INSERT_SUCCESS:
      return {
        ...state,
        kycdatasubmitSuccess: true,
        kycdatasubmit: action.payload
      };
    case SUBMITKYC_INSERT_FAILURE:
      return {
        ...state,
        kycdatasubmitSuccess: false,
        kycdatasubmit: action.payload
      };
    case GETKYC_DATA_LOADING:
      return {
        ...state,
        kycdata: null,
        kycdataSuccess: false
      };

    case GETKYC_DATA_SUCCESS:
      return {
        ...state,
        kycdataSuccess: true,
        kycdata: action.payload
      };
    case GETKYC_DATA_FAILURE:
      return {
        ...state,
        kycdataSuccess: false,
        kycdata: action.payload
      };

    case DELETE_KYC_LOADING:
      return {
        ...state,
        kycdelete: null,
        kycdeleteSuccess: false
      };

    case DELETE_KYC_SUCCESS:
      return {
        ...state,
        kycdeleteSuccess: true,
        kycdelete: action.payload
      };
    case DELETE_KYC_FAILURE:
      return {
        ...state,
        kycdeleteSuccess: false,
        kycdelete: action.payload
      };

    case SUPPORT_INSERT_LOADING:
      return {
        ...state,
        supportData: [],
        supportDataSuccess: false
      };
    case SUPPORT_INSERT_SUCCESS:
      return {
        ...state,
        supportDataSuccess: true,
        supportData: action.payload
      };
    case SUPPORT_INSERT_FAILURE:
      return {
        ...state,
        supportDataSuccess: false,
        supportData: action.payload
      };

    case FEEDBACK_INSERT_LOADING:
      return {
        ...state,
        feedbackData: [],
        feedbackDataSuccess: false
      };
    case FEEDBACK_INSERT_SUCCESS:
      return {
        ...state,
        feedbackDataSuccess: true,
        feedbackData: action.payload
      };
    case FEEDBACK_INSERT_FAILURE:
      return {
        ...state,
        feedbackDataSuccess: false,
        feedbackData: action.payload
      };

    case GET_REFCODE_LOADING:
      return {
        ...state,
        reffData: [],
        reffDataSuccess: false
      };
    case GET_REFCODE_SUCCESS:
      return {
        ...state,
        reffDataSuccess: true,
        reffData: action.payload
      };
    case GET_REFCODE_FAILURE:
      return {
        ...state,
        reffDataSuccess: false,
        reffData: action.payload
      };

    case GET_USER_FEEDBACK_LOADING:
      return {
        ...state,
        previousfeedback: [],
        previousfeedbackSuccess: false
      };
    case GET_USER_FEEDBACK_SUCCESS:
      return {
        ...state,
        previousfeedbackSuccess: true,
        previousfeedback: action.payload
      };
    case GET_USER_FEEDBACK_FAILURE:
      return {
        ...state,
        previousfeedbackSuccess: false,
        previousfeedback: action.payload
      };

    // GET TICKET CATEGORY

    case GET_TICKET_CATEGORY_SUCCESS:
      return {
        ...state,
        ticketCategory: action.payload,
      };

    // CREATE TICKET
    case CREATE_TICKET_LOADING:
      return {
        ...state,
        createTicket: [],
        isCreateTicketSuccess: false
      };
    case CREATE_TICKET_SUCCESS:
      return {
        ...state,
        createTicket: action.payload,
        isCreateTicketSuccess: true
      };
    case CREATE_TICKET_FAILURE:
      return {
        ...state,
        createTicket: action.payload,
        isCreateTicketSuccess: false
      };

    // TO GET TICKET LIST OF Particular User
    case GET_TICKET_LIST_LOADING:
      return {
        ...state,
        ticketList: [],
        isTicketListSuccess: false
      };
    case GET_TICKET_LIST_SUCCESS:
      return {
        ...state,
        ticketList: action.payload,
        isTicketListSuccess: true
      };
    case GET_TICKET_LIST_FAILURE:
      return {
        ...state,
        ticketList: action.payload,
        isTicketListSuccess: false
      };

    case STATE_NAME_LOADING:
      return {
        ...state,
        stateNameDataSuccess: false
      };
    case STATE_NAME_SUCCESS:
      return {
        ...state,
        stateNameDataSuccess: true,
        stateNameData: action.payload
      };
    case STATE_NAME_FAILURE:
      return {
        ...state,
        stateNameDataSuccess: false,
        stateNameData: action.payload
      };

    case GET_DASHBOARDCARD_LOADING:
      return {
        ...state,
        dashboardcardSuccess: false
      };

    case GET_DASHBOARDCARD_SUCCESS:
      return {
        ...state,
        dashboardcardSuccess: true,
        dashboard: action.payload
      };

    case GET_DASHBOARDCARD_FAILURE:
      return {
        ...state,
        dashboardcardSuccess: false,
        dashboard: action.payload
      }

      case GET_HOME_DETAILS_LOADING:
        return {
            ...state,
            isGetHomeDetailsSuccess: false
        };

    case GET_HOME_DETAILS_SUCCESS:
        return {
            ...state,
            getHomeDetails: action.payload,
            isGetHomeDetailsSuccess: true
        };

    case GET_HOME_DETAILS_FAILURE:
        return {
            ...state,
            getHomeDetails: action.payload,
            isGetHomeDetailsSuccess: false
        };

        case GET_MODEL_LIST_LOADING:
          return {
              ...state,
              getModelListSuccess: false
          };
  
      case GET_MODEL_LIST_SUCCESS:
          return {
              ...state,
              getModelList: action.payload,
              getModelListSuccess: true
          };
  
      case GET_MODEL_LIST_FAILURE:
          return {
              ...state,
              getModelList: action.payload,
              getModelListSuccess: false
          };

          case GET_PRODUCT_DETAILS_LOADING:
            return {
                ...state,
                getProductDetailsSuccess: false
            };
    
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                getProductDetails: action.payload,
                getProductDetailsSuccess: true
            };
    
        case GET_PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                getProductDetails: action.payload,
                getProductDetailsSuccess: false
            };

            case Add_CART_DETAILS_LOADING:
              return {
                  ...state,
                  addtoCartDetailsSuccess: false
              };
      
          case Add_CART_DETAILS_SUCCESS:
              return {
                  ...state,
                  addtoCartDetails: action.payload,
                  addtoCartDetailsSuccess: true
              };
      
          case Add_CART_DETAILS_FAILURE:
              return {
                  ...state,
                  addtoCartDetails: action.payload,
                  addtoCartDetailsSuccess: false
              };


              case GET_MYCART_DETAILS_LOADING:
                return {
                    ...state,
                    getMyCartDetailsSuccess: false
                };
        
            case GET_MYCART_DETAILS_SUCCESS:
                return {
                    ...state,
                    getMyCartDetails: action.payload,
                    getMyCartDetailsSuccess: true
                };
        
            case GET_MYCART_DETAILS_FAILURE:
                return {
                    ...state,
                    getMyCartDetails: action.payload,
                    getMyCartDetailsSuccess: false
                };

                case UPDATE_CART_QTY_LOADING:
                  return {
                      ...state,
                      updateCartQtySuccess: false
                  };
          
              case UPDATE_CART_QTY_SUCCESS:
                  return {
                      ...state,
                      updateCartQty: action.payload,
                      updateCartQtySuccess: true
                  };
          
              case UPDATE_CART_QTY_FAILURE:
                  return {
                      ...state,
                      updateCartQty: action.payload,
                      updateCartQtySuccess: false
                  };

                  case DELETE_CART_LOADING:
                    return {
                        ...state,
                        deleteCartDetailsSuccess: false
                    };
            
                case DELETE_CART_SUCCESS:
                    return {
                        ...state,
                        deleteCartDetails: action.payload,
                        deleteCartDetailsSuccess: true
                    };
            
                case DELETE_CART_FAILURE:
                    return {
                        ...state,
                        deleteCartDetails: action.payload,
                        deleteCartDetailsSuccess: false
                    };

                    case ORDER_GENERATE_LOADING:
                      return {
                          ...state,
                          orderGenerateDetailsSuccess: false
                      };
              
                  case ORDER_GENERATE_SUCCESS:
                      return {
                          ...state,
                          orderGenerateDetails: action.payload,
                          orderGenerateDetailsSuccess: true
                      };
              
                  case ORDER_GENERATE_FAILURE:
                      return {
                          ...state,
                          orderGenerateDetails: action.payload,
                          orderGenerateDetailsSuccess: false
                      };

                      case GET_ORDER_LIST_LOADING:
                        return {
                            ...state,
                            orderListDetailsSuccess: false
                        };
                
                    case GET_ORDER_LIST_SUCCESS:
                        return {
                            ...state,
                            orderListDetails: action.payload,
                            orderListDetailsSuccess: true
                        };
                
                    case GET_ORDER_LIST_FAILURE:
                        return {
                            ...state,
                            orderListDetails: action.payload,
                            orderListDetailsSuccess: false
                        };

                        case GET_GLOBAL_SEARCH_LOADING:
                          return {
                              ...state,
                              getGlobalSearchDetailsSuccess: false
                          };
                  
                      case GET_GLOBAL_SEARCH_SUCCESS:
                          return {
                              ...state,
                              getGlobalSearchDetails: action.payload,
                              getGlobalSearchDetailsSuccess: true
                          };
                  
                      case GET_GLOBAL_SEARCH_FAILURE:
                          return {
                              ...state,
                              getGlobalSearchDetails: action.payload,
                              getGlobalSearchDetailsSuccess: false
                          };


                          case GET_PROFILE_DETAILS_LOADING:
                            return {
                                ...state,
                                getProfileDetailsSuccess: false
                            };
                    
                        case GET_PROFILE_DETAILS_SUCCESS:
                            return {
                                ...state,
                                getProfileDetails: action.payload,
                                getProfileDetailsSuccess: true
                            };
                    
                        case GET_PROFILE_DETAILS_FAILURE:
                            return {
                                ...state,
                                getProfileDetails: action.payload,
                                getProfileDetailsSuccess: false
                            };



                            case GET_ORDER_HISTORY_LOADING:
                              return {
                                  ...state,
                                  getOrderHistorySuccess: false
                              };
                      
                          case GET_ORDER_HISTORY_SUCCESS:
                              return {
                                  ...state,
                                  getOrderHistory: action.payload,
                                  getOrderHistorySuccess: true
                              };
                      
                          case GET_ORDER_HISTORY_FAILURE:
                              return {
                                  ...state,
                                  getOrderHistory: action.payload,
                                  getOrderHistorySuccess: false
                              };


                            case GET_DEFAULT_ADDRESS_LOADING:
                              return {
                                  ...state,
                                  getDefaultAddressSuccess: false
                              };
                      
                          case GET_DEFAULT_ADDRESS_SUCCESS:
                              return {
                                  ...state,
                                  getDefaultAddress: action.payload,
                                  getDefaultAddressSuccess: true
                              };
                      
                          case GET_DEFAULT_ADDRESS_FAILURE:
                              return {
                                  ...state,
                                  getDefaultAddress: action.payload,
                                  getDefaultAddressSuccess: false
                              };


                              case ADD_ADDRESS_LOADING:
                                return {
                                    ...state,
                                    addAddress: false
                                };
                        
                            case ADD_ADDRESS_SUCCESS:
                                return {
                                    ...state,
                                    addAddress: action.payload,
                                    addAddressSuccess: true
                                };
                        
                            case ADD_ADDRESS_FAILURE:
                                return {
                                    ...state,
                                    addAddress: action.payload,
                                    addAddressSuccess: false
                                };


                                case EDIT_PROFILE_LOADING:
                                  return {
                                      ...state,
                                      editProfile: false
                                  };
                          
                              case EDIT_PROFILE_SUCCESS:
                                  return {
                                      ...state,
                                      editProfile: action.payload,
                                      editProfileSuccess: true
                                  };
                          
                              case EDIT_PROFILE_FAILURE:
                                  return {
                                      ...state,
                                      editProfile: action.payload,
                                      editProfileSuccess: false
                                  };


                                  case GET_CARDATA_LOADING:
                                  return {
                                      ...state,
                                      getCarList: false
                                  };
                          
                              case GET_CARDATA_SUCCESS :
                                  return {
                                      ...state,
                                      getCarList: action.payload,
                                      getCarListSuccess: true
                                  };
                          
                              case GET_CARDATA_FAILURE:
                                  return {
                                      ...state,
                                      getCarList: action.payload,
                                      getCarListSuccess: false
                                  };


                                  case DELETE_WISHLIST_LOADING:
                                    return {
                                        ...state,
                                        deleteWishlistProduct: false
                                    };
                            
                                case DELETE_WISHLIST_SUCCESS :
                                    return {
                                        ...state,
                                        deleteWishlistProduct: action.payload,
                                        deleteWishlistProductSuccess: true
                                    };
                            
                                case DELETE_WISHLIST_FAILURE:
                                    return {
                                        ...state,
                                        deleteWishlistProduct: action.payload,
                                        deleteWishlistProductSuccess: false
                                    };
  
                                    case ADD_WISHLIST_LOADING:
                                      return {
                                          ...state,
                                          addWishlistProduct: false
                                      };
                              
                                  case ADD_WISHLIST_SUCCESS :
                                      return {
                                          ...state,
                                          addWishlistProduct: action.payload,
                                          addWishlistProductSuccess: true
                                      };
                              
                                  case ADD_WISHLIST_FAILURE:
                                      return {
                                          ...state,
                                          addWishlistProduct: action.payload,
                                          addWishlistProductSuccess: false
                                      };



                                      case GET_BRAND_DETAILS_LOADING:
                                        return {
                                            ...state,
                                            getBrandList: false
                                        };
                                
                                    case GET_BRAND_DETAILS_SUCCESS :
                                        return {
                                            ...state,
                                            getBrandList: action.payload,
                                            getBrandListSuccess: true
                                        };
                                
                                    case GET_BRAND_DETAILS_FAILURE:
                                        return {
                                            ...state,
                                            getBrandList: action.payload,
                                            getBrandListSuccess: false
                                        };



                                      case GET_STORE_LIST_LOADING:
                                        return {
                                            ...state,
                                            getStoreList: false
                                        };
                                
                                    case GET_STORE_LIST_SUCCESS :
                                        return {
                                            ...state,
                                            getStoreList: action.payload,
                                            getStoreListSuccess: true
                                        };
                                
                                    case GET_STORE_LIST_FAILURE:
                                        return {
                                            ...state,
                                            getStoreList: action.payload,
                                            getStoreListSuccess: false
                                        };



                                        case ADD_STORE_DATA_LOADING:
                                          return {
                                              ...state,
                                              addStoreData: false
                                          };
                                  
                                      case ADD_STORE_DATA_SUCCESS :
                                          return {
                                              ...state,
                                              addStoreData: action.payload,
                                              addStoreDataSuccess: true
                                          };
                                  
                                      case ADD_STORE_DATA_FAILURE:
                                          return {
                                              ...state,
                                              addStoreData: action.payload,
                                              addStoreDataSuccess: false
                                          };


                                          case GET_ROUTE_DETAILS_LOADING:
                                            return {
                                                ...state,
                                                getRouteList: false
                                            };
                                    
                                        case GET_ROUTE_DETAILS_SUCCESS :
                                            return {
                                                ...state,
                                                getRouteList: action.payload,
                                                getRouteListSuccess: true
                                            };
                                    
                                        case GET_ROUTE_DETAILS_FAILURE:
                                            return {
                                                ...state,
                                                getRouteList: action.payload,
                                                getRouteListSuccess: false
                                            };


                                            case GET_ALL_CATEGORYLIST_LOADING:
                                              return {
                                                  ...state,
                                                  getAllCategoryList: false
                                              };
                                      
                                          case GET_ALL_CATEGORYLIST_SUCCESS :
                                              return {
                                                  ...state,
                                                  getAllCategoryList: action.payload,
                                                  getAllCategoryListSuccess: true
                                              };
                                      
                                          case GET_ALL_CATEGORYLIST_FAILURE:
                                              return {
                                                  ...state,
                                                  getAllCategoryList: action.payload,
                                                  getAllCategoryListSuccess: false
                                              };


                                              case UPDATE_CART_FLAVOUR_LOADING:
                                                return {
                                                    ...state,
                                                    updateCartFlavour: false
                                                };
                                        
                                            case UPDATE_CART_FLAVOUR_SUCCESS :
                                                return {
                                                    ...state,
                                                    updateCartFlavour: action.payload,
                                                    updateCartFlavourSuccess: true
                                                };
                                        
                                            case UPDATE_CART_FLAVOUR_FAILURE:
                                                return {
                                                    ...state,
                                                    updateCartFlavour: action.payload,
                                                    updateCartFlavourSuccess: false
                                                };





    case ADD_ENQUIRY_LOADING:
      return {
       ...state,
       addEquiryData: false
      };
                                          
    case ADD_ENQUIRY_SUCCESS :
        return {
          ...state,
          addEquiryData: action.payload,
          addEquiryDataSuccess: true
          };
                                          
     case ADD_ENQUIRY_FAILURE:
          return {
          ...state,
          addEquiryData: action.payload,
          addEquiryDataSuccess: false
        };


        case ADD_FOLLOWUP_LOADING:
          return {
           ...state,
           addFollowupData: false
          };
                                              
        case ADD_FOLLOWUP_SUCCESS :
            return {
              ...state,
              addFollowupData: action.payload,
              addFollowupDataSuccess: true
              };
                                              
         case ADD_FOLLOWUP_FAILURE:
              return {
              ...state,
              addFollowupData: action.payload,
              addFollowupDataSuccess: false
            };
    


            case ADD_BOOKING_LOADING:
              return {
               ...state,
               addBookingData: false
              };
                                                  
            case ADD_BOOKING_SUCCESS :
                return {
                  ...state,
                  addBookingData: action.payload,
                  addBookingDataSuccess: true
                  };
                                                  
             case ADD_BOOKING_FAILURE:
                  return {
                  ...state,
                  addBookingData: action.payload,
                  addBookingDataSuccess: false
                };
        

                case GET_FOLLOWUP_DETAILS_LOADING:
                  return {
                   ...state,
                   getFollowupList: false
                  };
                                                      
                case GET_FOLLOWUP_DETAILS_SUCCESS :
                    return {
                      ...state,
                      getFollowupList: action.payload,
                      getFollowupListSuccess: true
                      };
                                                      
                 case GET_FOLLOWUP_DETAILS_FAILURE:
                      return {
                      ...state,
                      getFollowupList: action.payload,
                      getFollowupListSuccess: false
                    };
            
    
                    case GET_ENQUIRY_DETAILS_LOADING:
                      return {
                       ...state,
                       getEnquiryDataList: false
                      };
                                                          
                    case GET_ENQUIRY_DETAILS_SUCCESS :
                        return {
                          ...state,
                          getEnquiryDataList: action.payload,
                          getEnquiryDataListSuccess: true
                          };
                                                          
                     case GET_ENQUIRY_DETAILS_FAILURE:
                          return {
                          ...state,
                          getEnquiryDataList: action.payload,
                          getEnquiryDataListSuccess: false
                        };



                        case UPDATE_ENQUIRY_LOADING:
                          return {
                           ...state,
                           updateEnquiryDataList: false
                          };
                                                              
                        case UPDATE_ENQUIRY_SUCCESS :
                            return {
                              ...state,
                              updateEnquiryDataList: action.payload,
                              updateEnquiryDataListSuccess: true
                              };
                                                              
                         case UPDATE_ENQUIRY_FAILURE:
                              return {
                              ...state,
                              updateEnquiryDataList: action.payload,
                              updateEnquiryDataListSuccess: false
                            };


                            case UPDATE_PROFILEPIC_LOADING:
                              return {
                               ...state,
                               updateProfilePicData: false
                              };
                                                                  
                            case UPDATE_PROFILEPIC_SUCCESS :
                                return {
                                  ...state,
                                  updateProfilePicData: action.payload,
                                  updateProfilePicDataSuccess: true
                                  };
                                                                  
                             case UPDATE_PROFILEPIC_FAILURE:
                                  return {
                                  ...state,
                                  updateProfilePicData: action.payload,
                                  updateProfilePicDataSuccess: false
                                };

                                case GET_COLOR_LIST_LOADING:
                                  return {
                                   ...state,
                                   getColorList: false
                                  };
                                                                      
                                case GET_COLOR_LIST_SUCCESS :
                                    return {
                                      ...state,
                                      getColorList: action.payload,
                                      getColorListSuccess: true
                                      };
                                                                      
                                 case GET_COLOR_LIST_FAILURE:
                                      return {
                                      ...state,
                                      getColorList: action.payload,
                                      getColorListSuccess: false
                                    };
    


                                case UPDATE_SRM_ENQUIRY_LOADING:
                                  return {
                                   ...state,
                                   updateSrmEnquiryDataList: false
                                  };
                                                                      
                                case UPDATE_SRM_ENQUIRY_SUCCESS :
                                    return {
                                      ...state,
                                      updateSrmEnquiryDataList: action.payload,
                                      updateSrmEnquiryDataListSuccess: true
                                      };
                                                                      
                                 case UPDATE_SRM_ENQUIRY_FAILURE:
                                      return {
                                      ...state,
                                      updateSrmEnquiryDataList: action.payload,
                                      updateSrmEnquiryDataListSuccess: false
                                    };

                                    case GET_MYTEAMS_DETAILS_LOADING:
                                      return {
                                       ...state,
                                       getMyTeamsDataList: false
                                      };
                                                                          
                                    case GET_MYTEAMS_DETAILS_SUCCESS :
                                        return {
                                          ...state,
                                          getMyTeamsDataList: action.payload,
                                          getMyTeamsDataSuccess: true
                                          };
                                                                          
                                     case GET_MYTEAMS_DETAILS_FAILURE:
                                          return {
                                          ...state,
                                          getMyTeamsDataList: action.payload,
                                          getMyTeamsDataSuccess: false
                                        };
    
                                        case ADD_ASSIGN_ENQUIRY_LOADING:
                                          return {
                                           ...state,
                                           addAssignEnquiryData: false
                                          };
                                                                              
                                        case ADD_ASSIGN_ENQUIRY_SUCCESS :
                                            return {
                                              ...state,
                                              addAssignEnquiryData: action.payload,
                                              addAssignEnquirDataSuccess: true
                                              };
                                                                              
                                         case ADD_ASSIGN_ENQUIRY_FAILURE:
                                              return {
                                              ...state,
                                              addAssignEnquiryData: action.payload,
                                              addAssignEnquirDataSuccess: false
                                            };
   
                                            case GET_RM_DETAILS_LOADING:
                                              return {
                                               ...state,
                                               getRmData: false
                                              };
                                                                                  
                                            case GET_RM_DETAILS_SUCCESS :
                                                return {
                                                  ...state,
                                                  getRmData: action.payload,
                                                  getRmDataSuccess: true
                                                  };
                                                                                  
                                             case GET_RM_DETAILS_FAILURE:
                                                  return {
                                                  ...state,
                                                  getRmData: action.payload,
                                                  getRmDataSuccess: false
                                                };  
                                                
                                                


                                                case UPDATE_EVALUATION_LOADING:
                                                  return {
                                                   ...state,
                                                   updateEvaluationDataList: false
                                                  };
                                                                                      
                                                case UPDATE_EVALUATION_SUCCESS :
                                                    return {
                                                      ...state,
                                                      updateEvaluationDataList: action.payload,
                                                      updateEvaluationDataListSuccess: true
                                                      };
                                                                                      
                                                 case UPDATE_EVALUATION_FAILURE:
                                                      return {
                                                      ...state,
                                                      updateEvaluationDataList: action.payload,
                                                      updateEvaluationDataListSuccess: false
                                                    };                                        
    


    default:
      return state;
  }
}
