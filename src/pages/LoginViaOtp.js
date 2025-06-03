import React, { useEffect, useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Keyboard,
  Text,
  ScrollView,
  BackHandler,
  TextInput,
  KeyboardAvoidingView,
  Platform,Image
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Global from '../global';
import images from './../images/images';
import Toast from 'react-native-easy-toast';
import { loginPersonal, otpSuccess } from '../actions/otpAction';
import { NetworkInfo } from "react-native-network-info";
import { useDispatch } from 'react-redux';

import {
  normalizeHeight,
  normalizeWidth,
} from '../components/ResponsiveScreen';
import { RESEND_OTP_TIME } from '../../config';
import { checknotificationpermission } from '../actions/NotificationAction';
import {CmpButton,CmpTextBox ,CmpLoader} from '../components';
import I18n from 'react-native-i18n';
import { testProps } from '../utills/commonFunctions';
import LoginStyles from '../styles/LoginStyles';
let device;


export default  LoginViaOtp = (props) => {
  const dispatch = useDispatch()
  const [errors, seterrors] = useState('')
 
  const toast = useRef(null)
  const [showLoader, setshowLoader] = useState(false);
  const mobileno = props.route?.params?.mobileno;
  const [contact, setContact] = useState(mobileno && mobileno?mobileno:'')


  useEffect(() => {
    // AppEventsLogger.logPurchase(25, "RS", { param: "HELLO" });
    const handleBackButtonClick = () => {
      props.navigation.goBack();
      return true;
    };
    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    });
    return unsubscribeSiFocus, unsubscribeSiBlur;
  }, [])

  const handleContact = (text) => {
    text = text.replace(' ', '');
    text = text.replace('-', '');
    text = text.replace('.', '');
    text = text.replace(/,/g, '');
    if (text && text.length >= 1) {
      seterrors('');
    }
    setContact(text)
  };

  const onLogin = async (userinfo) => {
    setshowLoader(true)
   //alert('userinfo'+JSON.stringify(userinfo))
    const { data, error } = await loginPersonal(userinfo)
    setshowLoader(false)
    if (!error) {
      if(data?.response_code === '1')
      {
        props.navigation.navigate('VerifyOTP', {
        contact: data?.data?.mobile
      });
      dispatch(otpSuccess(data))
    }
    else 
    {
      showToastMessage(data?.message, 'fail');
    }
    } else {
      showToastMessage(data?.message, 'fail');
    }
  }

  const validateForm = async () => {
    // props.navigation.navigate('VerifyOTP', {
    //     contact: '9729799040'
    //   });
    Keyboard.dismiss();
    const regn = /^[6789]\d{9}$/;
    const same = /^([0-9])\1*$/
    if (!contact) {
      seterrors(I18n.t('MOBILE_EMPTY'));
      showToastMessage(I18n.t('MOBILE_EMPTY'), 'fail');
    }
    else if (contact.length !== 10) {
      seterrors(I18n.t('MOBILE_CHAR_LIMIT'));
      showToastMessage(I18n.t('MOBILE_CHAR_LIMIT'), 'fail');
    }
    else if (contact && contact != "5400000000" && !regn.test(contact)) {
      seterrors(I18n.t('MOBILE_NUMERIC'));
      showToastMessage(I18n.t('MOBILE_NUMERIC'), 'fail');
    }
    else if (contact && same.test(contact)) {
      seterrors(I18n.t('MOBILE_NUMERIC'));
      showToastMessage(I18n.t('MOBILE_NUMERIC'), 'fail');
    }
    else {
      seterrors('');
        const userinfo = {
          name: "",
          mobile: contact,
          device_id: "",
          reg_id: "",
          type: "android",
          address: "",
          latitude:"",
          longitude:"",
          city:"",
          state:"",
          pincode:"",
          country:""
        };
        onLogin(userinfo);
     
    }

  }


  const showToastMessage = (message, type) => {
    toast.current.show(message, 5000);
  }

  handleChange = (text) => {
    
  }

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[GlobalStyles.mainsection, { backgroundColor: Global.color.primary}]}
    >
        <TouchableOpacity
                
                onPress={() => props.navigation.goBack()}
                style={{ marginLeft: normalizeWidth(22),marginTop:normalizeHeight(30) }}>
                <Image
                  style={{width:normalizeWidth(25),height:normalizeHeight(25)}}
                  source={images.Back_icon}
                />
              </TouchableOpacity>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={GlobalStyles.innerBlock}>
        <View style={{
          marginTop: normalizeHeight(45),
        }}>

          <View>
            <Text
              style={[GlobalStyles.font19Bc, { color: "#FAFAFA",textAlign:'center',justifyContent:'center',marginTop:normalizeHeight(90) }]}
            >
              {'Verify your phone number'}
            </Text>
            <Text
              style={[GlobalStyles.font13R, {
                color: Global.color.white,
                marginTop: normalizeHeight(15),
                textAlign:'center',
                justifyContent:'center',
              }]}
            >
              {'We have sent you an SMS with a code to enter number'}
            </Text>
          </View>

        </View>
 <View
          style={[GlobalStyles.JustAlignCenter, {
            marginTop: normalizeHeight(25),}]}
        >
  <CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="numeric"
                  label={''}
                  value={contact}
                  placeholder={'Mobile Number'}
                  authoCapitalize="none"
                  textPrefix={'+91'}
                  maxLength={10}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleContact(text);
                  }}
                  errorMessage={
                    errors && errors ? errors : ''
                  }
                
                />

        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(102)}}>
        <CmpButton
        name={'Next'}
        hide
        onPress={() => validateForm()}
        ButtonStyle={[GlobalStyles.enablefilledbutton5, LoginStyles.continuebtn]}
        textStyle={[GlobalStyles.font15B, LoginStyles.buttontext]}
      />
      
          </View>
      </ScrollView>
      
     
      <Toast
        style={{ backgroundColor: Global.color.primary }}
        textStyle={{ color: Global.color.white }}
        defaultCloseDelay={10000}
        positionValue={normalizeHeight(200)}
        ref={toast}
      />
       <CmpLoader loading={showLoader} />

    </KeyboardAvoidingView>
  );
}