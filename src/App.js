import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '../src/Navigation';
import Global from './global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalizeHeight } from './components/ResponsiveScreen';
import GlobalStyles from './styles/GlobalStyles';
import I18n from 'react-native-i18n';
import { setReferralCode } from './actions/themeAction';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import userReducer from '../src/reducers/userReducer';
function App({props})  {
  
  const [netstatus, setnetstatus] = useState(true);
  const [netInfo, setnetInfo] = useState('');



  useEffect(() => {
    dynamicLinks().getInitialLink().
    then((link) => {
      if (link) {
        const { url } = link;
        const code = url?.split('=').pop();
        if (code) {
          props.setReferralCode(code);
        }
      }
    });
  NetInfo.addEventListener((state) => {
    setnetstatus(state.isConnected);
    setnetInfo(state)
   
  });
  }, []);

  

    const { userAuth, isInitialLoading } = userReducer;
    console.log(JSON.stringify(userAuth))
    return (
      <SafeAreaProvider >
        {(netstatus === false)
          ? <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: '70%'
          }}>
            <Icon
              size={100}
              color={Global.color.pinkColor}
              name={'wifi-off'}
            />
            <Text style={{
              color: Global.color.white,
              fontSize: normalizeHeight(15),
              textAlign: 'center',
              letterSpacing: 0.3,
              lineHeight: normalizeHeight(30),
              fontFamily: Global.font.font_family_fb
            }}>
              {I18n.t('LBL_PHONE_CONNECTED_INTERNET')}
            </Text>
          </View>
          : <AppNavigator
            style={[GlobalStyles.mainsection]}
            screenProps={{
              netstatus,
              netWorkInfo: netInfo
            }}
            isUserLoggedIn={ {}}
            isInitialLoading={isInitialLoading}
          />
        }
      </SafeAreaProvider>
    );

}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    themeReducer: state.themeReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setReferralCode: (data) => dispatch(setReferralCode(data))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
