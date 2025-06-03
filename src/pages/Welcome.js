import React, { Component, useEffect } from 'react';
import { View, Image, BackHandler,Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
// import NotificationController from './NotificationController';
import { testProps } from './../utills/commonFunctions'
import { userAuth } from '../actions/userAction';
import { ENV } from '../../config';
import images from '../images/images';
import Global from '../global';
import { normalizeHeight } from '../components/ResponsiveScreen';
export default Welcome = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuth())
    setTimeout(() => {
      Decision()
    }, 5000);
    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    // const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
    //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    // });
    return unsubscribeSiFocus;
  }, [])

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
    props.navigation.goBack();
    return true;
  };

  let urserAuth = useSelector(state => state.userReducer?.userAuth)
  const Decision = () => {
   props.navigation.navigate('Login'); // Login , Dashboard
    // if (
    //   urserAuth &&
    //   Object.keys(urserAuth).length > 0 &&
    //   urserAuth.steps === 'Registered'
    // ) {
    //   if(ENV === 'DEV' ){
    //    // props.navigation.navigate('SideDrawer');
    //   }
    //   else{
    //   //  props.navigation.navigate('ScreenLock');
    //   }
     
    // } else if (urserAuth &&
    //   Object.keys(urserAuth).length > 0 &&
    //   urserAuth.steps === 'KYC') {
    //   props.navigation.navigate('KYCSetup');
    // }
    // else {
    //   props.navigation.navigate('Slider');
    // }
  }

  return (
    <View style={{ backgroundColor: Global.color.primary,alignItems:'center',flex:1,justifyContent:'center'}} >
      <Image style={{
        height: '45%',
        width: '45%',
        resizeMode: 'contain'
      }} 
     // source={require('../images/gifFiles/splashGif.gif')} 
      source={images.logo_white} 
      />
      {/* <NotificationController /> */}
    </View>
  );
}
