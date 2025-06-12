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
import {CmpButton,CmpText1Box,CmpTextBox ,CmpLoader} from '../components';
import I18n from 'react-native-i18n';
import { testProps } from '../utills/commonFunctions';
import LoginStyles from '../styles/LoginStyles';
import { fontWeight } from './themes';
let device;


export default  Register = (props) => {
  const dispatch = useDispatch()
  const [errors, seterrors] = useState('')
  const [errorspassword, seterrorsPassword] = useState('')
  const toast = useRef(null)
  const [showLoader, setshowLoader] = useState(false);
  const mobileno = props.route?.params?.mobileno;
  const [contact, setContact] = useState(mobileno && mobileno?mobileno:'')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [passwordshow, setPasswordShow] = useState(true)
  const [rememberme, setRememberme] = useState(false)
  


  useEffect(() => {
    // AppEventsLogger.logPurchase(25, "RS", { param: "HELLO" });
    const handleBackButtonClick = () => {
      props.navigation.goBack();
      return true;
    };
    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    // const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
    //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    // });
    return unsubscribeSiFocus;
  }, [])

  const handleEmailid = (text) => {
  setEmail(text)
  seterrors('');
  };


  const handlePassword = (text) => {
    text = text.replace(' ', '');
    text = text.replace('-', '');
    text = text.replace('.', '');
    text = text.replace(/,/g, '');
    if (text && text.length >= 1) {
      seterrorsPassword('');
    }
    setPassword(text)
  };

  const onLogin = async (userinfo) => {
    setshowLoader(true)
    dispatch(loginPersonal(userinfo, (val) => {
      if(val?.data?.user_type)
      {
      setshowLoader(false)
      props.navigation.navigate('SideDrawer'); 
      }
      else{
        setshowLoader(false)
        seterrorsPassword(val?.message)
        showToastMessage(val?.message, 'fail');
      }


      }))
  
  }

  const validateForm = async () => {
  
    Keyboard.dismiss();
    Keyboard.dismiss();
    const regemail = /^(\.?[a-z]){1,}(?:\d{10}|\w+([\.-]?\w+)@\w+([\.-]?\w+)(?:\.+(com|in|org|co|net|edu|ca|us|me|mx|cc|eu|za|it|tv|world|today|ch|dev|website|space|solutions|mobi|uk){1,5})+$)$/;
    let emailtrim = email && email.trim();
    emailtrim = emailtrim.toLowerCase()
    if(emailtrim == '')
    {
      seterrors('Email Id field empty');
    } else if (emailtrim && emailtrim.length > 0 && !regemail.test(emailtrim)) {
      seterrors('Invalid Email Id');
    } else if(password == '') {
      seterrorsPassword('Password field empty');
    }
     else
    {
        seterrors('');
        seterrorsPassword('');
        const userinfo = {
          email_id: emailtrim,
          password: password,
          device_id: "",
          reg_id: "",
          type: "android",
          login_type:'mobile'
        };
        console.log('send param userlogin' +JSON.stringify(userinfo))
       onLogin(userinfo);
    }
    // const regn = /^[6789]\d{9}$/;
    // const same = /^([0-9])\1*$/
    // if (!contact) {
    //   seterrors(I18n.t('MOBILE_EMPTY'));
    //   showToastMessage(I18n.t('MOBILE_EMPTY'), 'fail');
    // }
    // else if (contact.length !== 10) {
    //   seterrors(I18n.t('MOBILE_CHAR_LIMIT'));
    //   showToastMessage(I18n.t('MOBILE_CHAR_LIMIT'), 'fail');
    // }
    // else if (contact && contact != "5400000000" && !regn.test(contact)) {
    //   seterrors(I18n.t('MOBILE_NUMERIC'));
    //   showToastMessage(I18n.t('MOBILE_NUMERIC'), 'fail');
    // }
    // else if (contact && same.test(contact)) {
    //   seterrors(I18n.t('MOBILE_NUMERIC'));
    //   showToastMessage(I18n.t('MOBILE_NUMERIC'), 'fail');
    // }
    // else {
    //   seterrors('');
    //     const userinfo = {
    //       name: "",
    //       mobile: contact,
    //       device_id: "",
    //       reg_id: "",
    //       type: "android",
    //       address: "",
    //       latitude:"",
    //       longitude:"",
    //       city:"",
    //       state:"",
    //       pincode:"",
    //       country:""
    //     };
    //     onLogin(userinfo);
     
    // }

  }


  const showToastMessage = (message, type) => {
    toast.current.show(message, 5000);
  }

  handleChange = (text) => {
    
  }

  suffixPress = () => {
    setPasswordShow(passwordshow ? false:true)
  }

  remembermeHandel = () => 
  {
    setRememberme(rememberme ? false:true)
  }

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[GlobalStyles.mainsection, { backgroundColor: Global.color.primary}]}
    >
        {/* <TouchableOpacity
                
                onPress={() => props.navigation.goBack()}
                style={{ marginLeft: normalizeWidth(22),marginTop:normalizeHeight(30) }}>
                <Image
                  style={{width:normalizeWidth(25),height:normalizeHeight(25)}}
                  source={images.Back_icon}
                />
              </TouchableOpacity> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={GlobalStyles.innerBlock}
        >
       
<View style={{marginTop: normalizeHeight(100),alignItems:'center',justifyContent:'center'}}>
{/* <Text
              style={[GlobalStyles.logotitle, { color: "#FAFAFA",textAlign:'center',justifyContent:'center',marginTop:normalizeHeight(40) }]}
            >
             {''}
            </Text> */}
<Image
              source={images.logo}
              resizeMode='contain'
              style={{
                width: normalizeWidth(250),
                height: normalizeHeight(110),
                
              }}
            />
</View>
          
 
      
        <View style={{backgroundColor:Global.color.white,marginTop: normalizeHeight(5),alignItems:'center',justifyContent:'center'}}> 


<View style={{marginBottom:normalizeHeight(20)}}>
            <Text
              style={[GlobalStyles.logotitle, { color: Global.color.blacksaid,textAlign:'center',fontWeight:'bold',justifyContent:'center',marginTop:normalizeHeight(0) }]}
            >
             {'Sign Up'}
            </Text>
           
          </View>
 

<View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(35),marginBottom:normalizeHeight(0)}}>
        <CmpButton
        name={'Sign up with Eamil'}
        hide
        onPress={() => props.navigation.navigate('RegisterInfo')}
        ButtonStyle={[GlobalStyles.enablefilledbutton5,{backgroundColor:Global.color.blue4}]}
        textStyle={[GlobalStyles.font15B]}
      />
      
          </View>


          <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(25),marginBottom:normalizeHeight(25)}}>
        <CmpButton
        name={'Sign up with Google'}
        hide
        onPress={() => alert('Coming Soon...')}
        ButtonStyle={[GlobalStyles.enablefilledbutton5,{backgroundColor:Global.color.darkorange}]}
        textStyle={[GlobalStyles.font15B]}
      />
      
          </View>

          <TouchableOpacity onPress={() =>  props.navigation.navigate('RegisterInfo')} style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(0)}}>
  <Text
              style={[GlobalStyles.texttitledonthave, { color: Global.color.black,marginTop:normalizeHeight(10),fontWeight:'bold' }]}
            >
             {'Already have an account ? '}
            </Text>
  </TouchableOpacity>  


      
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