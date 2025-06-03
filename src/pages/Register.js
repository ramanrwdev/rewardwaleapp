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
  Platform
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import analytics from '@react-native-firebase/analytics';
import Global from '../global';
import Toast from 'react-native-easy-toast';
import { loginPersonal,registerUserPersonal, otpSuccess ,verifyotpRegister} from '../actions/otpAction';
import { NetworkInfo } from "react-native-network-info";
import { useDispatch } from 'react-redux';
import { ENV } from '../../config';
import {
  normalizeHeight,
  normalizeWidth,
} from '../components/ResponsiveScreen';
import { RESEND_OTP_TIME } from '../../config';
import { checknotificationpermission } from '../actions/NotificationAction';
import {CmpButton,CmpTextBox,CmpLoader } from '../components';
import I18n from 'react-native-i18n';
import { testProps } from '../utills/commonFunctions';
import LoginStyles from '../styles/LoginStyles';
let device;


export default Register = ({ navigation }) => {
  const dispatch = useDispatch()
  const [errors, seterrors] = useState('')
  const [contact, setContact] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [showLoader, setshowLoader] = useState(false);
  const [disableresend, setdisableresend] = useState(false)
  const toast = useRef(null)
  const notify = async () => {
    device = await checknotificationpermission();
    navigation.addListener('focus', () => {
      setdisableresend(false)
    });
  }

  useEffect(() => {
    // AppEventsLogger.logPurchase(25, "RS", { param: "HELLO" });
    notify()
    const handleBackButtonClick = () => {
      navigation.goBack();
      return true;
    };
    const unsubscribeSiFocus = navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    const unsubscribeSiBlur = navigation.addListener('blur', (e) => {
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

  const onRegister = async (userinfo) => {
    setshowLoader(true)
    const { resp, error } = await registerUserPersonal(userinfo)
    setshowLoader(false)
    console.log('response api final '+JSON.stringify(resp)+'--'+error)
    const val = resp;
    if (!error) {
      if(val?.user_id !='')
      {
        navigation.navigate('LoginViaOtp',{mobileno:val?.mobile})
    }
    else 
    {
      showToastMessage(resp?.message, 'fail');
    }
      //dispatch(otpSuccess(data))
    } else {
      showToastMessage(resp?.message, 'fail');
    }
  }


  actionOtpApi = (userdata) =>
  {
   
    const userinfo = {
      contact: userdata.contact,
      otp: userdata.otp,
      deviceId:""
    };
   dispatch(verifyotpRegister(userinfo, (val) => {
    setshowLoader(false)
      if (
        val?.steps === 'Registered'
      ) {
        navigation.navigate('SideDrawer');
      }
      else if (val?.steps === 'Otp') {
        if (ENV === 'PROD') {
          analytics().logEvent('sign_up', {
            registration: true
          })
        }
        navigation.navigate('Register')
      }
      else if (val?.steps === 'Firstname') {
        navigation.navigate('ReFercode')
      } else if (val?.steps === 'Referral') {
        navigation.navigate('Congratulations')
      } else if (val?.steps === 'KYC') {
        navigation.navigate('KYCSetup', { frompage: 'referral' })
      }


    }))

  }

  const validateForm = async () => {
    Keyboard.dismiss();
    const regn = /^[6789]\d{9}$/;
    const same = /^([0-9])\1*$/
    if (!firstname && !contact && !password && !repassword) {
      seterrors(I18n.t('NOT_EMPTY'));
      showToastMessage(I18n.t('NOT_EMPTY'), 'fail');
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
    else if(password !== repassword) {
      seterrors('Password mismatch');
      showToastMessage('Password mismatch', 'fail');
    }
    else {
      seterrors('');
    
        const userinfo = {
          fullname:firstname+' '+lastname,
          mobile: contact,
          password:password,
          device_id: "",
          reg_id: "",
          type: "android",
        };
        onRegister(userinfo);
    
    }

  }


  const showToastMessage = (message, type) => {
    if (type === 'fail') {
      toast.current.show(message, 5000);
      clearTimeout(disableresend);
      setdisableresend(false)
    }
  }

  handleMobileChange = (text) => {
    
    setContact(text)
  }

  handleFirstNameChange = (text) =>
  {
    setFirstName(text)
  }

  handleLastNameChange = (text) =>
  {
    setLastName(text)
  }

  handlePasswordChange = (text) => {
    setPassword(text)
  }
  handleRePasswordChange = (text) =>
  {
    setRePassword(text)
  }

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[GlobalStyles.mainsection, { backgroundColor: Global.color.primary}]}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={GlobalStyles.innerBlock}>
        <View style={{
          marginTop: normalizeHeight(45),
        }}>

          <View

          >
            <Text
              style={[GlobalStyles.font19B, { color: "#FAFAFA",textAlign:'center',justifyContent:'center',marginTop:normalizeHeight(90) }]}
            >
              {'Welcome to rewardwale Connect'}
            </Text>
            <Text
              style={[GlobalStyles.font13R, {
                color: Global.color.white,
                marginTop: normalizeHeight(43),
                textAlign:'center',
                justifyContent:'center',
              }]}
            >
              {'Signup to your account'}
            </Text>
          </View>

        </View>
 <View
          style={[GlobalStyles.JustAlignCenter, {
            marginTop: normalizeHeight(25),}]}
        >
          <CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={''}
                  placeholder={'First Name'}
                  authoCapitalize="none"
                  maxLength={10}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleFirstNameChange(text);
                  }}
                  errorMessage={
                    errors && errors.firstname ? errors.firstname : ''
                  }
                
                />

<CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={''}
                  placeholder={'Last Name'}
                  authoCapitalize="none"
                  maxLength={10}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleLastNameChange(text);
                  }}
                  errorMessage={
                    errors && errors.lastname ? errors.lastname : ''
                  }
                
                />

<CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="numeric"
                  label={''}
                  placeholder={'Mobile Number'}
                  authoCapitalize="none"
                  maxLength={10}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleMobileChange(text);
                  }}
                  errorMessage={
                    errors && errors.mobile ? errors.mobile : ''
                  }
                
                />
  <CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={''}
                  placeholder={'Password'}
                  authoCapitalize="none"
                  maxLength={10}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handlePasswordChange(text);
                  }}
                  errorMessage={
                    errors && errors.password ? errors.password : ''
                  }
                
                />

<CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={''}
                  placeholder={'Re-enter Password'}
                  authoCapitalize="none"
                  maxLength={50}
                  secureTextEntry={true}
                  onChangeText={text => {
                    handleRePasswordChange(text);
                  }}
                  errorMessage={
                    errors && errors.repassword ? errors.repassword : ''
                  }
                
                />

         

        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(38)}}>
        <CmpButton
        name={'Create'}
        hide
        onPress={() => validateForm()}
        ButtonStyle={[GlobalStyles.enablefilledbutton5, LoginStyles.continuebtn]}
        textStyle={[GlobalStyles.font15B, LoginStyles.buttontext]}
      />
       <View
            style={{
              marginTop: normalizeHeight(33),marginBottom:normalizeHeight(50)
            }}
          >
           
<View style={{flexDirection:'row'}}>
            <Text
              style={[GlobalStyles.font13R, LoginStyles.otptext1]}
            >
              {'Have an account ?'}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={[GlobalStyles.font13R1, LoginStyles.otptext1]}
            >
              {' Sign in'}
            </Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
      </ScrollView>
      
      {/* <TouchableOpacity
        {...testProps('continue')}
        style={[GlobalStyles.enablefilledbutton5, LoginStyles.continuebtn]}
        onPress={() => validateForm()}
      >
        <Text
          style={[GlobalStyles.font15B, LoginStyles.buttontext]}
        >
          {'CONTINUE'}
        </Text>
      </TouchableOpacity> */}
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