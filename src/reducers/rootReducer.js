import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './userReducer';
import otpReducer from './otpReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import { LOGOUT_SUCCESS } from '../actions/constants';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer'
import themeReducer from './themeReducer';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
  // Whitelist: ['UserReducer'],
};

const appReducer = combineReducers({
  userReducer,
  otpReducer,
  registerReducer,
  loginReducer,
  profileReducer,
  authReducer,
  themeReducer: persistReducer(persistConfig, themeReducer),
});

export default function rootReducer(state, action) {
  if (action.type === LOGOUT_SUCCESS) {

    /*
     * Const { userReducer } = state;
     * State = { userReducer };
     */
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}
