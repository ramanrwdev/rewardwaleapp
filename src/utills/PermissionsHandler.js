/**
 * Permissions Handler Component
 * @author Raman Kant Kamboj
 * @description Permissions Handler  of the Application
 * @flow
 */

import { Platform, PermissionsAndroid } from 'react-native';
import I18n from 'react-native-i18n';
import { PERMISSIONS, check, RESULTS, checkMultiple, requestMultiple, request } from 'react-native-permissions';
export const requestLocation = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: I18n.t('LBL_LOCATION_PERMISON'),
          message: I18n.t('LBL_GOLD_APP_NEED'),
          buttonNeutral: I18n.t('LBL_ASK_MELATER'),
          buttonNegative: I18n.t('LBL_CANCEL'),
          buttonPositive: I18n.t('BTN_OK')
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Console.log('Android Location Granted');

        return true;
      }
      // Console.log('Android Location permission denied');

      return false;

    }
    const granted = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (granted === RESULTS.GRANTED) {
      // Console.log('iOS Location Granted');

      return true;
    }
    // Console.log('iOS Location permission denied');

    return false;


  } catch (error) {
    // Console.log('Error:', error);
  }
};

export const checkLocation = async () => {
  try {
    let granted = null;
    if (Platform.OS === 'android') {
      granted = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      granted = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
    if (granted === RESULTS.GRANTED) {
      return true;
    }

    return false;

  } catch (error) {
    // Console.log('Error:', error);
  }
};

export const checkCamera = async () => {
  try {
    let granted = null;
    if (Platform.OS === 'android') {
      granted = await check(PERMISSIONS.ANDROID.CAMERA);
    } else {
      granted = await check(PERMISSIONS.IOS.CAMERA);
    }
    if (granted === RESULTS.GRANTED) {
      return true;
    }

    return false;

  } catch (error) {
    // Console.log('Error:', error);
  }
};

export const requestCamera = async () => {
  try {
    let granted = null;
    if (Platform.OS === 'android') {
      granted = await request(PERMISSIONS.ANDROID.CAMERA);
    } else {
      granted = await request(PERMISSIONS.IOS.CAMERA);
    }
    if (granted === RESULTS.GRANTED) {
      return true;
    }

    return false;

  } catch (error) {
    // Console.log('Error:', error);
  }
};

export const checkContact = async () => {
  try {
    let granted = null;
    if (Platform.OS === 'android') {
      granted = await check(PERMISSIONS.ANDROID.READ_CONTACTS);
    } else {
      granted = await check(PERMISSIONS.IOS.READ_CONTACTS);
    }
    if (granted === RESULTS.GRANTED) {
      return true;
    }

    return false;

  } catch (error) {
    // Console.log('Error:', error);
  }
};

export const requestContact = async () => {
  try {
    let granted = null;
    if (Platform.OS === 'android') {
      granted = await request(PERMISSIONS.ANDROID.READ_CONTACTS);
    } else {
      granted = await request(PERMISSIONS.IOS.READ_CONTACTS);
    }
    if (granted === RESULTS.GRANTED) {
      return true;
    }

    return false;

  } catch (error) {
    // Console.log('Error:', error);
  }
};
