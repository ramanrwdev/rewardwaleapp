import { USER_DATA_LOGOUT ,USER_DATA_LOGIN} from "../actions/constants";


const initialState = {
    isSignIn: false,
    loginRes: {}
  };
  
  export default function authReducer(state, action) {
      if (typeof state === 'undefined') {
          return initialState;
      }
      switch (action.type) {
        case USER_DATA_LOGOUT:
            return {
                ...state,
                isSignIn: false,
                loginRes: action.payload
            }
            case USER_DATA_LOGIN:
            return {
                ...state,
                isSignIn: true,
                loginRes: action.payload
            }
        default:
            return state
    }
  }

