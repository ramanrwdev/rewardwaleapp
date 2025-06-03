/**
 * Async Storage Util
 * @author Raman Kant Kamboj
 * @description Util functions to set and get data from async storage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsync = async function(key, data) {
  try {
    let newdata = data;
    if (typeof data !== 'string') {
      newdata = JSON.stringify(data);
    }
    await AsyncStorage.setItem(key, newdata);
  } catch (error) {
    return error;
  }
};

export const getAsync = async function(key, isParsed = false) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data && isParsed) {
      data = JSON.parse(data);
    }

return data;
  } catch (error) {

  }
};

export const removeAsync = async function(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {

  }
};

export const clearAsync = async function() {
  try {
    await AsyncStorage.clear();
  } catch (error) {

  }
};
