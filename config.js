const environment = 'DEV';

import dev from './config_dev';
import prod from './config_prod';


function envSwitcher() {
  switch (environment) {
    case 'DEV':
      return dev;
    case 'PROD':
      return prod;
  }
}

const config = envSwitcher();

export const { SERVERURL } = config;
export const { MF_SERVER_URL } = config;
export const { GOOGLE_CLIENT_ID } = config;
export const { LANG } = config;
export const { MAX_AMOUNT } = config;
export const { RESEND_OTP_TIME } = config;
export const { SERVERASSETURL } = config;
export const { GEOCODERAPI } = config;
export const { AMOUNT_MAX_LENGTH } = config;
export const { ACCOUNT_TYPE } = config;
export const { GOLD_SERVER_URL } = config;
export const { GOLD_EMAIL_ID } = config;
export const { GOLD_PASSWORD } = config;
export const { DIFENZ_BASE_URL } = config;
export const { DIFENZ_KEY } = config;
export const { RAZORPAY_KEY_WOTPV } = config;
export const { RAZORPAY_KEY_SECRET_WOTPV } = config;
export const { RAZORPAY_KEY } = config;
export const { RAZORPAY_KEY_SECRET } = config;
export const { RAZORPAY_MERCHANT } = config;
export const { RAZORPAY_CURRENCY } = config;
export const { RAZORPAY_COMPANY_NAME } = config;
export const { RAZORPAY_COMPANY_LOGO } = config;
export const ENV = environment;
export const { PLAY_STORE_URL } = config;
export const SMALLCASE_GATEWAYNAME = config.SMALLCASE_GATEWAYNAME;
export const ISLEPRECHAUN = config.ISLEPRECHAUN;
export const INCOMETAX_URL = config.INCOMETAX_URL;
