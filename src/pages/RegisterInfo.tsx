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
import analytics from '@react-native-firebase/analytics';
import Global from '../global';
import images from './../images/images';
import Toast from 'react-native-easy-toast';
import { loginPersonal,registerUserPersonal, otpSuccess ,verifyotpRegister} from '../actions/otpAction';
import { NetworkInfo } from "react-native-network-info";
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ENV } from '../../config';
import {
  normalizeHeight,
  normalizeWidth,
} from '../components/ResponsiveScreen';
import { RESEND_OTP_TIME } from '../../config';
// import { checknotificationpermission } from '../actions/NotificationAction';
import {CmpButton,CmpTextBox,CmpLoader } from '../components';
import I18n from 'react-native-i18n';
import { testProps } from '../utills/commonFunctions';
import LoginStyles from '../styles/LoginStyles';
let device;

const RegisterInfo = ({navigation}) => {
  const dispatch = useDispatch()
  const [errors, seterrors] = useState('')
  const [contact, setContact] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [showLoader, setshowLoader] = useState(false);
  const [disableresend, setdisableresend] = useState(false)
  const [agree, setagree] = useState(false)
  const [authorise, setauthorise] = useState(false)
  
  
  const toast = useRef(null)
//   const notify = async () => {
//     device = await checknotificationpermission();
//     navigation.addListener('focus', () => {
//       setdisableresend(false)
//     });
//   }

  useEffect(() => {
    // AppEventsLogger.logPurchase(25, "RS", { param: "HELLO" });
    const handleBackButtonClick = () => {
      navigation.goBack();
      return true;
    };
    const unsubscribeSiFocus = navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    // const unsubscribeSiBlur = navigation.addListener('blur', (e) => {
    //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    // });
    return unsubscribeSiFocus;
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


  const actionOtpApi = (userdata) =>
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

  const handleMobileChange = (text) => {
    
    setContact(text)
  }

  const handleFirstNameChange = (text) =>
  {
    setFirstName(text)
  }

  const handleLastNameChange = (text) =>
  {
    setLastName(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }
  const handleRePasswordChange = (text) =>
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
          marginTop: normalizeHeight(25),
        }}>

<View style={{marginTop: normalizeHeight(0),alignItems:'center',justifyContent:'center'}}>

<Image
              source={images.logo}
              resizeMode='contain'
              style={{
                width: normalizeWidth(250),
                height: normalizeHeight(110),
                
              }}
            />
</View>

<View style={{marginBottom:normalizeHeight(20)}}>
            <Text
              style={[GlobalStyles.logotitle, { color: Global.color.blacksaid,textAlign:'center',fontWeight:'bold',justifyContent:'center',marginTop:normalizeHeight(0) }]}
            >
             {'Sign Up'}
            </Text>
           
          </View>

        </View>
 <View
          style={[ {
            marginTop: normalizeHeight(25),}]}
        >
            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.5}}>
          <CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={'First Name'}
                  label2={' *'}
                  placeholder={'First Name'}
                  authoCapitalize="none"
                  maxLength={90}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleFirstNameChange(text);
                  }}
                  errorMessage={
                    errors && errors.firstname ? errors.firstname : ''
                  }
                
                />
</View>
<View style={{marginHorizontal:normalizeWidth(5)}}></View>
<View style={{flex:0.5}}>
<CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={'Last Name'}
                  label2={' *'}
                  placeholder={'Last Name'}
                  authoCapitalize="none"
                  maxLength={90}
                  secureTextEntry={false}
                  onChangeText={text => {
                    handleLastNameChange(text);
                  }}
                  errorMessage={
                    errors && errors.lastname ? errors.lastname : ''
                  }
                
                />
                </View>
</View>


<CmpTextBox
                 // value={fields.guardianname ? fields.guardianname : ''}
                  keyboardType="default"
                  label={'Email'}
                  label2={' *'}
                  placeholder={'name@domain.com'}
                  authoCapitalize="none"
                  maxLength={90}
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
                  keyboardType="numeric"
                  label={'Phone Number '}
                  label2={' *'}
                  placeholder={'1234567890'}
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
                  keyboardType="numeric"
                  label={'User Name'}
                  label2={' *'}
                  placeholder={'User Name'}
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
                  label={'Password'}
                  label2={' *'}
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
{/* 
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
                
                /> */}

         

        </View>
       

                   <View 
                          
                            style={ { flexDirection: 'row',
                               // alignItems: 'center',
                                marginTop: normalizeHeight(20),
                                marginLeft:normalizeWidth(10),
                            }
                            }>
                                <TouchableOpacity   onPress={() => {
                               setagree(agree? false:true)
                              
                            }}>
                                <Image
              source={agree ? images.checkbox:images.uncheckbox}
              resizeMode='contain'
              tintColor={agree ? Global.color.cyanblue : Global.color.black}
              style={{
                
                width: normalizeWidth(20),
                height: normalizeHeight(20),
                
              }}
            />
            </TouchableOpacity>
                          
                            <Text style={{
                                paddingLeft: normalizeWidth(8),
                                fontSize: normalizeHeight(14),
                                lineHeight:normalizeHeight(17),
                                fontWeight: '400',
                                fontFamily: Global.font.font_family_fb,
                                letterSpacing: 0.3,
                                color: Global.color.lightblackclr
                            }}>{'I have read and agree to accept and abide by the'} <Text onPress={() =>  navigation.navigate('PrivacyPolicy')} style={{color:Global.color.cyanblue}}>{'Community Guidelines, Term & Conditions, Privacy Policy'}</Text></Text>
  
                        </View>



                        <View 
                          
                          style={ { flexDirection: 'row',
                             // alignItems: 'center',
                             marginLeft:normalizeWidth(10),
                              marginTop: normalizeHeight(20)
                          }
                          }>
                              <TouchableOpacity   onPress={() => {
                             setauthorise(authorise? false:true)
                            
                          }}>
                              <Image
            source={authorise ? images.checkbox:images.uncheckbox}
            resizeMode='contain'
            tintColor={authorise ? Global.color.cyanblue : Global.color.black}
            style={{
              
              width: normalizeWidth(20),
              height: normalizeHeight(20),
              
            }}
          />
          </TouchableOpacity>
                        
                          <Text style={{
                              paddingLeft: normalizeWidth(8),
                              fontSize: normalizeHeight(14),
                              lineHeight:normalizeHeight(17),
                              fontWeight: '400',
                              fontFamily: Global.font.font_family_fb,
                              letterSpacing: 0.3,
                              color: Global.color.lightblackclr
                          }}>{'I authorise and allow Rewardwale and its associates, partners, participating merchants and brands to contact me on Email, SMS, WhatsApp and Push Notifications'}</Text>

                      </View>


                       
      
    


  <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(38),marginBottom:normalizeHeight(50)}}>
        <CmpButton
        name={'Next'}
        hide
        onPress={() => validateForm()}
        ButtonStyle={[GlobalStyles.enablefilledbutton5, LoginStyles.continuebtn]}
        textStyle={[GlobalStyles.font15B, LoginStyles.buttontext]}
      />
      

       <TouchableOpacity onPress={() =>  navigation.navigate('Login')} style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(0)}}>
  <Text
              style={[GlobalStyles.texttitledonthave, { color: Global.color.black,marginTop:normalizeHeight(10),fontWeight:'bold' }]}
            >
             {'Already have an account ? '}
            </Text>
  </TouchableOpacity>  

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
export default RegisterInfo;