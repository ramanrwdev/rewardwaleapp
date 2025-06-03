import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Linking
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, PersistStore } from './src/configureStore';
import AppContainer from './src/App';
import { ENV, FORCE_UPDATE } from './config';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
//import InAppUpdate from './src/pages/InAppUpdate';
import I18n from 'react-native-i18n';
//import VersionCheck from 'react-native-version-check';
import { normalizeHeight, normalizeWidth } from './src/components/ResponsiveScreen';
//import SplashScreen from 'react-native-splash-screen';
import { ImageModal } from './src/components';
import checkVersion from 'react-native-store-version';

function App() {
  const [isShowingModal, setIsShowingModal] = useState({
    show: false,
    storeUrl: ''
  });
  console.log({ isShowingModal })
  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
  if (TextInput.defaultProps == null) TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;

  useEffect(() => {
  //  SplashScreen.hide();
    init();
    // if (Platform.OS === 'android' && ENV === "PROD") {
    //   InAppUpdate.checkUpdate();
    // }
    // if (Platform.OS === 'ios' && ENV === "PROD") {
    //   trackPermission()
    //   VersionCheck.needUpdate()
    //     .then(async res => {
    //       if (res.isNeeded) {
    //         setIsShowingModal({
    //           show: true,
    //           storeUrl: res.storeUrl
    //         });
    //       }
    //     });
    // }
  }, []);


  const init = async () => {
    try {
      const check = await checkVersion({
        version: '1.0', // app local version
        iosStoreURL: 'ios app store url',
        androidStoreURL: 'https://play.google.com/store/apps/details?id=com.rewardwale',
        country: 'in', // default value is 'jp'
      });
//alert(JSON.stringify(check))
      if (check.result === 'new') {
       // alert('new')
        // if app store version is new
      }
    } catch (e) {
      console.log(e);
    }
  };

  const trackPermission = async () => {
    const trackingStatus = await getTrackingStatus();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
    } else {
      const trackingStatus = await requestTrackingPermission();
      if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      }
    }
  }

  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={PersistStore}>
        <AppContainer />
      </PersistGate>
      <ImageModal
        isVisible={isShowingModal?.show}
        message={FORCE_UPDATE ? I18n.t('LBL_MANDATORY_UPDATE') : I18n.t('LBL_OPTIONAL_UPDATE')}
        title={I18n.t('LBL_APP_UPDATE')}
        image={require('./src/images/appUpdate.png')}
        imageStyle={{ height: normalizeHeight(127), width: normalizeWidth(120) }}
        ButtonOnPress={() => {
          if (!FORCE_UPDATE) {
            setIsShowingModal({ ...isShowingModal, show: false })
          }
          Linking.openURL(isShowingModal?.storeUrl)
        }}
        closeIconOnPress={FORCE_UPDATE ? null : () => setIsShowingModal({ ...isShowingModal, show: false })}
        ButtonText={I18n.t('BTN_UPDATE_NOW')}
      />
    </Provider>
  );
}

export default App;