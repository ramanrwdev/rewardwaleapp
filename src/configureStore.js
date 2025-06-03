import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';

/*
 *Export default function configureStore() {
 *  return createStore(rootReducer, applyMiddleware(thunk));
 *}
 */

//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
export const store = configureStore({
    reducer:{rootReducer}
    // Automatically calls `combineReducers`
    // reducer: {
    //   posts: postsReducer,
    //   users: usersReducer
    // }
  })
export const PersistStore = persistStore(store);
