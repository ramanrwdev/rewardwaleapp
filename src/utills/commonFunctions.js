/**
 * Common Functions Utility
 * @author Raman Kant Kamboj
 * @flow
 */

import { Alert, Platform, Linking } from 'react-native';
import GLOBAL from '../global';
import Toast from 'react-native-tiny-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { ENV } from '../../config';
import I18n from 'react-native-i18n';
import analytics from '@react-native-firebase/analytics';

const getISTTime = (d) => d.getTime() + 5.5 * 60 * 60 * 1000;
export const getDateDetails = function (date) {
  if (date) {
    const newdate = new Date(new Date(date).getTime() + 5.5 * 60 * 60 * 1000);
    if (newdate) {
      // Console.log(newdate, date)
      const monthSet =
        newdate.getMonth() + 1 < 10
          ? `0${newdate.getMonth() + 1}`
          : newdate.getMonth() + 1; // Months from 1-12
      const daySet =
        newdate.getDate() < 10 ? `0${newdate.getDate()}` : newdate.getDate();
      const yearSet = newdate.getFullYear();
      const monthnameSet = moment(monthSet, 'MM').format('MMM');
      const hoursSet =
        newdate.getHours() < 10 ? `0${newdate.getHours()}` : newdate.getHours();
      const timeTypeSet = hoursSet <= 11 ? 'AM' : 'PM';

      const minuteSet =
        newdate.getMinutes() < 10
          ? `0${newdate.getMinutes()}`
          : newdate.getMinutes();
      const secondsSet =
        newdate.getSeconds() < 10
          ? `0${newdate.getSeconds()}`
          : newdate.getSeconds();
      const day =
        typeof daySet !== 'undefined' && daySet !== null ? daySet : '';
      const monthname =
        typeof monthnameSet !== 'undefined' && monthnameSet !== null
          ? monthnameSet
          : '';
      const year =
        typeof yearSet !== 'undefined' && yearSet !== null ? yearSet : '';
      let hours =
        typeof hoursSet !== 'undefined' && hoursSet !== null ? hoursSet : '';
      const minute =
        typeof minuteSet !== 'undefined' && minuteSet !== null ? minuteSet : '';
      const seconds =
        typeof secondsSet !== 'undefined' && secondsSet !== null
          ? secondsSet
          : '';
      const month =
        typeof monthSet !== 'undefined' && monthSet !== null ? monthSet : '';
      const timeType =
        typeof timeTypeSet !== 'undefined' && timeTypeSet !== null
          ? timeTypeSet
          : '';
      hours = hours > 12 ? (hours - 12) : hours;
      const returnval = {
        day,
        month,
        year,
        hours,
        minute,
        seconds,
        monthname,
        timeType,
      };

      return returnval;
    }

    return { error: I18n.t('VLD_INVALDE_DATE_FORMAT') };
  }

  return { error: I18n.t('VLD_INVALID_DATA') };
};
export const getDateFormat = function (date) {
  if (date) {
    const newdate = new Date(new Date(date).getTime() + 5.5 * 60 * 60 * 1000);
    if (newdate) {
      // Console.log(newdate, date)
      const monthSet =
        newdate.getMonth() + 1 < 10
          ? `0${newdate.getMonth() + 1}`
          : newdate.getMonth() + 1; // Months from 1-12
      const daySet =
        newdate.getDate() < 10 ? `0${newdate.getDate()}` : newdate.getDate();
      const yearSet = newdate.getFullYear();
      const monthnameSet = moment(monthSet, 'MM').format('MMM');
      const hoursSet =
        newdate.getHours() < 10 ? `0${newdate.getHours()}` : newdate.getHours();
      const timeTypeSet = hoursSet <= 11 ? 'am' : 'pm';

      const minuteSet =
        newdate.getMinutes() < 10
          ? `0${newdate.getMinutes()}`
          : newdate.getMinutes();
      const secondsSet =
        newdate.getSeconds() < 10
          ? `0${newdate.getSeconds()}`
          : newdate.getSeconds();
      const day =
        typeof daySet !== 'undefined' && daySet !== null ? daySet : '';
      const monthname =
        typeof monthnameSet !== 'undefined' && monthnameSet !== null
          ? monthnameSet
          : '';
      const year =
        typeof yearSet !== 'undefined' && yearSet !== null ? yearSet : '';
      let hours =
        typeof hoursSet !== 'undefined' && hoursSet !== null ? hoursSet : '';
      const minute =
        typeof minuteSet !== 'undefined' && minuteSet !== null ? minuteSet : '';
      const seconds =
        typeof secondsSet !== 'undefined' && secondsSet !== null
          ? secondsSet
          : '';
      const month =
        typeof monthSet !== 'undefined' && monthSet !== null ? monthSet : '';
      const timeType =
        typeof timeTypeSet !== 'undefined' && timeTypeSet !== null
          ? timeTypeSet
          : '';
      hours = hours > 12 ? (hours - 12) : hours;

      const createYearGet = year;
      const createTimeGet = `${hours}:${minute}${timeType}`;
      const createDateGet = `${day} ${monthname}`;
      const createDate =
        typeof day !== 'undefined' && day != null
          ? createDateGet
          : '';
      const createYear =
        typeof year !== 'undefined' && year != null
          ? createYearGet
          : '';
      const createTime =
        typeof hours !== 'undefined' && hours != null
          ? createTimeGet
          : '';
      const time = createDate + ' ' + createYear + ', ' + createTime;
      return time;
    }

    return { error: I18n.t('VLD_INVALDE_DATE_FORMAT') };
  }

  return { error: I18n.t('VLD_INVALID_DATA') };
};

export function customAlert(message) {
  setTimeout(() => {
    Alert.alert('rewardwale', message, [{ text: I18n.t('BTN_OK'), onPress: callback }], {
      cancelable: false,
    });
  }, 0);
}

export const callNumber = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.openURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        customAlert(I18n.t('LBL_CALL_DEVICES'));
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => err);
};

export const callDirections = (location) => {
  const url = GLOBAL.URL.DIRECTIONS_MAP_API + location;
  Linking.openURL(url)
    .then((supported) => {
      if (!supported) {
        customAlert(I18n.t('LBL_CANONT_WAY_THERE'));
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => err);
};

export const setAsync = async function (key, data) {
  try {
    let newdata = data;
    if (typeof data !== 'string') {
      newdata = JSON.stringify(data);
    }
    await AsyncStorage.setItem(key, newdata);
  } catch (error) {
    console.log(error, 'errororro');
    return error;
  }
};

export const getAsync = async function (key, isParsed = false) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data && isParsed) {
      data = JSON.parse(data);
    }

    return data;
  } catch (error) {
    return error;
  }
};

// export function commaNumber(number) {
//   if (number) {
//     let x = number;
//     x = x.toString();
//     let afterPoint = '';
//     if (x.indexOf('.') > 0) {
//       afterPoint = x.substring(x.indexOf('.'), x.length);
//     }
//     x = Math.floor(x);
//     x = x.toString();
//     let lastThree = x.substring(x.length - 3);
//     const otherNumbers = x.substring(0, x.length - 3);
//     if (otherNumbers !== '') {
//       lastThree = `,${lastThree}`;
//     }
//     const res =
//       otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
//       lastThree +
//       afterPoint;

// return res;
//   }

// return '';

// }

export function commaNumber(number) {
  if (parseFloat(number)) {
    let numbertype = 'positive';
    if (number < 0) {
      numbertype = 'negative';
    }
    let x = parseFloat(number) * (numbertype === 'negative' ? -1 : 1);
    x = x.toString();
    let afterPoint = '';
    if (x.indexOf('.') > 0) {
      afterPoint = x.substring(x.indexOf('.'), x.length);
    }
    x = Math.floor(x);
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = `,${lastThree}`;
    }
    let newnumber =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
      lastThree +
      afterPoint;

    if (numbertype === 'negative') {
      newnumber = '- ' + newnumber;
    }
    return newnumber;
  }
}

export function percentNumber(number) {
  let numbertype = 'positive';
  if (number < 0) {
    numbertype = 'negative';
  }
  let x = parseFloat(number) * (numbertype === 'negative' ? -1 : 1);
  let newnumber = parseFloat(x).toFixed(2)
  if (numbertype === 'positive') {
    newnumber = '+ ' + newnumber + " %"
  } else {
    newnumber = '- ' + newnumber + " %"
  }
  return newnumber
}

export function commaNumberDecimal(val) {
  let x = parseFloat(val).toFixed(2);
  x = x.toString();
  const splitarr = x.split('.');
  const y = splitarr[0];
  const deci = splitarr[1];
  let lastThree = y.substring(y.length - 3);
  const otherNumbers = y.substring(0, y.length - 3);
  if (otherNumbers != '')
    lastThree = ',' + lastThree;
  const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + '.' + deci;
  return res;
}

export function amountFormat(val, datatype, fixed) {
  let numbertype = 'positive';
  if (parseFloat(val) < 0) {
    numbertype = 'negative';
  }
  let newval = parseFloat(val) * (numbertype === 'negative' ? -1 : 1);
  if (fixed) {
    newval = `${commaNumber(newval)}`;
  }
  else if (newval >= 10000000) {
    newval = `${commaNumberDecimal(newval)} Cr`;
  } else if (!newval) {
    newval = '0.00';
  } else {
    newval = `${commaNumberDecimal(newval)}`;
  }

  if (numbertype === 'positive' && datatype) {
    newval = "+ " + '₹' + newval
  } else {
    newval = '₹' + newval;
  }
  if (numbertype === 'negative') {
    newval = '- ' + newval;
  }

  return newval;
}

export function customAlertWithCancel(message) {
  setTimeout(() => {
    Alert.alert(
      'rewardwale',
      message,
      [{ text: I18n.t('LBL_DISCARD'), onPress: callback }, { text: I18n.t('LBL_CANCEL') }],
      { cancelable: true },
    );
  }, 100);
}

/**
 * @author Raman Kant Kamboj
 * @description Generic field validation
 * @param fieldName name to be shown on alert.
 * @param regexType pass the regex.
 * @param data data to be tested.
 */
export function validation(fieldName, regexType, data) {
  if (regexType.test(data) === false) {
    customAlert(`${I18n.t('LBL_INVALID')} ${fieldName}.`);

    return false;
  }

  return true;
}

/**
 * @author Raman Kant Kamboj
 * @description Conditional rendering.
 * @param condition to be passed on which render will be checked.
 * @param content to be rendered on condition true.
 */
export function renderIf(condition, content) {
  if (condition) {
    return content;
  }

  return null;
}

/**
 * @author Raman Kant Kamboj
 * @description Returns current timestamp
 */
export function getTimeStamp() {
  const dateTime = new Date();
  const date = dateTime.toISOString().slice(0, 10);
  const time = dateTime.toISOString().slice(11, 19);
  const timestamp = `${date} ${time}`;

  return timestamp;
}

/**
 * @author Raman Kant
 * @description alert box
 */
export function showAlertWithDelay(message) {
  setTimeout(() => {
    Alert.alert('rewardwale', message);
  }, 100);
}

export function rupeesAmountFormat(text) {
  return text && text.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}

// export function amountFormat(val) {
//   let newval = val;
//   if (val >= 10000000) {
//     newval = `₹${(val / 10000000).toFixed(2)} Cr`;
//     return newval;
//   } else if (val === 0 || val === undefined) {
//     newval = '₹0.00';
//     return newval;
//   }
//     newval = `₹${rupeesAmountFormat(val.toString())}`;

// return newval;
// }

export const initTimer = (duration, onClear, onInterval, type = 's') => {
  const endTime = moment().add(duration, type).add(2, 's');
  const durationTimer = setInterval(() => {
    const durationData = moment.duration(endTime.diff(moment()))._data;
    const minutes =
      durationData.minutes < 10
        ? `0${durationData.minutes}`
        : durationData.minutes;
    const seconds =
      durationData.seconds < 10
        ? `0${durationData.seconds}`
        : durationData.seconds;
    if (durationData.milliseconds < 0) {
      clearInterval(durationTimer);
      onClear();
    } else {
      onInterval(minutes, seconds);
    }
  }, 1000);

  return durationTimer;
};

// Get distance between two coordinates
export const getDistance = (initial, final) => {
  let lat1 = initial.coords?.latitude;
  const lng1 = initial.coords?.longitude;
  let lat2 = final.coords?.latitude;
  const lng2 = final.coords?.longitude;
  const toRad = (Value) => (Value * Math.PI) / 180;
  const R = 6371; // Km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d.toFixed(1);
};

// Get distance between two coordinates
export const getUniqueid = async (firstname, user_id) => {
  const username = await getAsync('@uniqueid');

  // Let name = firstname && firstname.length > 10 ? `${firstname.substring(0, 10)}` : firstname
  const name =
    username && username.length > 10
      ? `${username.substring(0, 10)}`
      : username;
  const uniqueId = name + user_id;

  return uniqueId;
};

export function customToast(message, type, duration) {
  const errorstyle = {
    position: 0,
    duration: duration ? duration : 3000,
    containerStyle: {
      backgroundColor: GLOBAL.color.toasterrorbg,
      borderColor: GLOBAL.color.toasterrorbr,
      borderRadius: 5,
    },
    textStyle: {
      color: GLOBAL.color.toasterrorcolor,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 15,
      lineHeight: 18,
      letterSpacing: 0.1,
    },
    mask: true,
    maskColor: GLOBAL.color.primaryrgb,
  };
  const proderrorstyle = {
    // Position: 0,
    duration: duration ? duration : 3000,
    containerStyle: {
      backgroundColor: GLOBAL.color.toasterrorbg,
      borderColor: GLOBAL.color.toasterrorbr,
      borderRadius: 5,
    },
    textStyle: {
      color: GLOBAL.color.toasterrorcolor,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      lineHeight: 25,
      letterSpacing: 0.1,
    },

    /*
     * Mask: true,
     * maskColor: GLOBAL.color.primaryrgb,
     */
  };
  const successstyle = {
    position: 0,
    duration: duration ? duration : 3000,
    containerStyle: {
      backgroundColor: GLOBAL.color.toastsuccessbg,
      borderColor: GLOBAL.color.toastsuccessbr,
      borderRadius: 5,
    },
    textStyle: {
      color: GLOBAL.color.toastsuccesscolor,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 15,
      lineHeight: 18,
      letterSpacing: 0.1,
    },
    mask: true,
    maskColor: GLOBAL.color.primaryrgb,
  };

  const prodsuccessstyle = {
    // Position: 0,
    duration: duration ? duration : 3000,
    containerStyle: {
      backgroundColor: GLOBAL.color.toastsuccessbg,
      borderColor: GLOBAL.color.toastsuccessbr,
      borderRadius: 5,
    },
    textStyle: {
      color: GLOBAL.color.toastsuccesscolor,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,

      /*
       * FontSize: 15,
       * lineHeight: 18,
       * letterSpacing: 0.1,
       */
      fontSize: 12,
      lineHeight: 25,
      letterSpacing: 0.1,
    },

    /*
     * Mask: true,
     * maskColor: GLOBAL.color.primaryrgb,
     */
  };
  let style = '';
  if (type === 'error') {
    style = errorstyle;
  } else if (type === 'prodsuccess') {
    style = prodsuccessstyle;
  } else if (type === 'proderror') {
    style = proderrorstyle;
  } else {
    style = successstyle;
  }

  /*
   * Const style =
   *   type === 'error'
   *     ? errorstyle
   *     : type === 'prodsuccess'
   *       ? prodsuccessstyle
   *       : type === 'proderror'
   *         ? proderrorstyle
   *         : successstyle;
   */
  Toast.show(message, style);
}

function validateDictionary(dictionary) {
  for (let i = 0; i < dictionary.length; i++) {
    if (
      dictionary.indexOf(dictionary[i]) !==
      dictionary.lastIndexOf(dictionary[i])
    ) {
      // Console.log('Error: The dictionary in use has at least one repeating symbol:', dictionary[i]);

      return undefined;
    }
  }

  return dictionary;
}
export const getAge = (dateString) => {
  var now = new Date();
  var today = new Date(now.getYear(), now.getMonth(), now.getDate());
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(0, 4),
    dateString.substring(5, 7) - 1,
    dateString.substring(8, 10)
  );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};

  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };
  return age;
}

function getDictionary() {
  return validateDictionary('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

function numToLetter(number) {
  // Takes a letter between 0 and max letter length and returns the corresponding letter
  if (number > dictionary.length || number < 0) {
    return undefined;
  }
  if (number === 0) {
    return '';
  }

  return dictionary.slice(number - 1, number);
}

function numberToEncodedLetter(number) {
  /*
   * Takes any number and converts it into a base (dictionary length) letter combo. 0 corresponds to an empty string.
   * It converts any numerical entry into a positive integer.
   */
  if (isNaN(number)) {
    return undefined;
  }
  const newnumber = Math.abs(Math.floor(number));

  const dictionary = getDictionary();
  let index = newnumber % dictionary.length;
  let quotient = newnumber / dictionary.length;
  let result = '';

  if (newnumber <= dictionary.length) {
    return numToLetter(newnumber);
  } // Number is within single digit bounds of our encoding letter alphabet

  if (quotient >= 1) {
    // This number was bigger than our dictionary, recursively perform this function until we're done
    if (index === 0) {
      quotient--;
    } // Accounts for the edge case of the last letter in the dictionary string
    result = numberToEncodedLetter(quotient);
  }

  if (index === 0) {
    index = dictionary.length;
  } // Accounts for the edge case of the final letter; avoids getting an empty string

  return result + numToLetter(index);
}

export function truncateNumber(numb) {
  if (parseFloat(numb) > 0) {
    const truncatednumb = numb.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0];

    return truncatednumb;
  }

  const numbreturn = 0;

  return numbreturn;

  // Rounded.value = with2Decimals
}

const crypt = (salt, text) => {
  const textToChars = (txt) => txt.split('').map((c) => c.charCodeAt(0));
  const byteHex = (n) => `0${Number(n).toString(10)}`.substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('');
};

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 10))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join('');
};

export const pad = (num, size) => {
  let newnum = num.toString();
  while (newnum.length < size) {
    newnum = `0${newnum}`;
  }

  return `FLTR${newnum}`;
};

export const encrypted_text = async (id) => {
  const encryptedtext = await crypt('MyGourmet2021', id.toString());
  const numtoencoded = await numberToEncodedLetter(encryptedtext);

  return numtoencoded;
};

function encodedLetterToNumber(encoded) {
  // Takes any number encoded with the provided encode dictionary
  const dictionary = getDictionary();
  let result = 0;
  let index = 0;

  for (let i = 1; i <= encoded.length; i++) {
    index = dictionary.search(encoded.slice(i - 1, i)) + 1;
    if (index === 0) {
      return undefined;
    } // Attempted to find a letter that wasn't encoded in the dictionary
    result += index * Math.pow(dictionary.length, encoded.length - i);
  }

  return result;
}

export const decrypted_text = async (encryptedtext) => {
  const lettertoencoded = await encodedLetterToNumber(encryptedtext);
  let decrypted_string = decrypt('MyGourmet2021', lettertoencoded.toString());
  decrypted_string = parseInt(decrypted_string);

  return decrypted_string;
};


export const testProps = (id) => {
  // return {
  //   testID: id,
  //   accessibilityLabel: id,
  // }
  return Platform.OS == 'android' ?
    { accessible: true, accessibilityLabel: id } :
    { testID: id }
}

export function amountFormat1(val, datatype) {
  let numbertype = 'positive';
  if (parseFloat(val) < 0) {
    numbertype = 'negative';
  }
  let newval = parseInt(val) * (numbertype === 'negative' ? -1 : 1);
  if (`${newval}`.length >= 8) {
    newval = newval / 10000000
    newval = newval.toFixed(2)
    newval = `${newval} Crores`;
  } else if (`${newval}`.length >= 6) {
    newval = newval / 100000
    newval = newval.toFixed(2)
    newval = `${newval} Lakhs`;
  } else if (!newval) {
    newval = '0.00';
  } else {
    newval = val.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')
  }
  if (numbertype === 'positive' && datatype) {
    newval = "+ " + '₹' + newval
  } else {
    newval = '₹' + newval;
  }
  if (numbertype === 'negative') {
    newval = '- ' + newval;
  }

  return newval;
}
// export function amountFormat2(val, datatype) {
//   let numbertype = 'positive';
//   if (parseFloat(val) < 0) {
//     numbertype = 'negative';
//   }
//   let newval = parseInt(val) * (numbertype === 'negative' ? -1 : 1);
//   if (`${newval}`.length >= 8) {
//     newval = newval / 10000000
//     newval = newval.toFixed(2)
//     newval = `${newval} Cr`;
//   } else if (`${newval}`.length >= 6) {
//     newval = newval / 100000
//     newval = newval.toFixed(2)
//     newval = `${newval} L`;
//   } else if (!newval) {
//     newval = '0.00';
//   } else {
//     //newval = parseInt(val).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')
//     newval = `${commaNumberDecimal(newval)}`;
//   }
//   if (numbertype === 'positive' && !datatype) {
//     newval = "+ " + '₹' + newval
//   } else if(datatype){
//     newval = '₹' + newval;
//   }

//   if (numbertype === 'negative') {
//     newval =  "- " + '₹' + newval;
//   }

//   return newval;
// }
export function amountFormat2(val, decimal, datatype) {
  let numbertype = 'positive';
  if (parseFloat(val) < 0) {
    numbertype = 'negative';
  }
  let newval = parseInt(val) * (numbertype === 'negative' ? -1 : 1);
  if (`${newval}`.length >= 8) {
    newval = newval / 10000000
    newval = newval.toFixed(decimal ? decimal : 2)
    newval = `${newval} Cr`;
  } else if (`${newval}`.length >= 6) {
    newval = newval / 100000
    newval = newval.toFixed(2)
    newval = `${newval} L`;
  } else if (!newval) {
    newval = '0.00';
  } else {
    newval = parseInt(val).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')
  }
  if (numbertype === 'positive' && datatype) {
    newval = "+ " + '₹' + newval
  } else {
    newval = '₹' + newval;
  }
  if (numbertype === 'negative') {
    newval = newval;
  }

  return newval;
}
export function amountFormat4(val, decimal, datatype) {
  let numbertype = 'positive';
  if (parseFloat(val) < 0) {
    numbertype = 'negative';
  }
  let newval = parseInt(val)
  newval = Math.abs(newval);

  if (`${newval}`.length >= 8) {
    newval = newval / 10000000
    newval = newval.toFixed(decimal ? decimal : 2)
    newval = `${newval} Cr`;
  } else if (`${newval}`.length >= 6) {
    newval = newval / 100000
    newval = newval.toFixed(2)
    newval = `${newval} L`;
  } else if (!newval) {
    newval = '0.00';
  } else {
    newval = parseInt(newval).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')
  }
  if (numbertype === 'positive' && datatype) {
    newval = "+ " + '₹' + newval
  } else {
    newval = '₹' + newval;
  }
  if (numbertype === 'negative') {
    newval = '- ' + newval;
  }
  return newval;
}




export function maskPAN(panno) {
  let maskpan = '';
  if (panno) {
    let first3 = panno.substring(0, 3);
    let last2 = panno.substring(panno.length - 2);
    maskpan = first3 + 'XXXXX' + last2
  }
  return maskpan;
}



export function maskBankaccount(accountno) {
  let maskaccountno = '';
  if (accountno) {
    const accountNumber = accountno.substr(
      accountno.length - 4,
    );
    maskaccountno = `XXXX XXXXX ${accountNumber}`;

  }
  return maskaccountno;
}

export const firebaseAnalytics = (key, params) => {
  if (ENV === "PROD") {
    analytics().logEvent({ key, params })
  }
}


export const amtformat = (val) => {
  return `₹${parseInt(val).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}`
}

export const amtformatfloat = (val) => {
  val = parseFloat(val);
  val = val.toFixed(2);
  return `₹${val.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}`
}

export const truncatestring = (str, n) => {
  if (str && str.length > 0) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  }
}