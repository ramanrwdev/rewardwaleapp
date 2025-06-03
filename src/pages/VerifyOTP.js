import React, { useRef, useState, useLayoutEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Keyboard,
  BackHandler,
  ScrollView,Image
} from 'react-native';
import images from './../images/images';
import Global from '../global';
import GlobalStyles from '../styles/GlobalStyles';
import analytics from '@react-native-firebase/analytics';
import { otpRegister, verifyotpApi } from '../actions/otpAction';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-easy-toast';
import { CmpButton, CodeField,CmpLoader } from '../components/index'
import { ENV } from '../../config';
import InternetFooter from '../components/Internetfooter';
import LoginStyles from '../styles/LoginStyles';
import {
  normalizeHeight, normalizeWidth
} from '../components/ResponsiveScreen';
import { testProps } from './../utills/commonFunctions'
import I18n from 'react-native-i18n';


export default VerifyOTP = (props) => {

  const [otpval, setotpval] = useState('')
  const [errors, seterrors] = useState('')
  const [showLoader, setshowLoader] = useState(false);
  const toast = useRef(null)
  const otpRef = useRef()
  const dispatch = useDispatch()
  let otpdata = useSelector(state => state.otpReducer?.otpData)
  let userAuth = useSelector(state => state.userReducer?.userAuth)

  useLayoutEffect(() => {

    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {

      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    });
    return unsubscribeSiFocus, unsubscribeSiBlur
  }, [])


  const handleBackButtonClick = () => {
    props.navigation.goBack(null);
    return true
  }

  const resendOtp = () => {
    otpRef.current.clearOtp()
    setotpval(null)
    const userinfo = {
      emailid: props?.route?.params?.emailid
    };


    dispatch(otpRegister(userinfo, (val) => {
      if (val) {
        props.navigation.goBack()
      }
    }))
  }

  const showToastMessage = (message, type) => {
    toast.current.show(message, 5000);
  }

 

  const _onFulfill = async () => {
    setshowLoader(true)
   // props.navigation.navigate('Dashboard')
    Keyboard.dismiss();

    if (otpval && otpval.toString().length > 3) {
      const userinfo = {
        email_id: props?.route?.params?.emailid,
        otp: otpval,
        deviceId:""
      };
    const { data, error } = await verifyotpApi(userinfo)
       setshowLoader(false)
       if (!error) {
         if(data?.response_code === 1)
         {
           props.navigation.navigate('ChangePassword', {
           emailid: data?.data?.username
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



    } else {
      setshowLoader(false)
      seterrors('Invalid OTP')

    }
  }

  return (

    <View style={[GlobalStyles.mainsection, {backgroundColor: Global.color.primary}]}
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
        style={GlobalStyles.innerBlock}
      >
        <View style={{
          marginTop: Platform.OS === 'ios' ? normalizeHeight(10) : normalizeHeight(10),
        }}>
     

          <View style={{marginTop:normalizeHeight(120)}}>
              <Text
              style={[GlobalStyles.font19Bc, {

                color: '#FAFAFA',
                textAlign: 'center',
                alignSelf: 'center'
              }]}
            >
              {'Phone/Email Verification'}
            </Text>
          </View>

         
           <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(24)}}>
              <Text
                style={{
                  fontSize: normalizeHeight(16),
                  lineHeight: normalizeHeight(20),
                  fontWeight: '400',
                  color: Global.color.white,
                  letterSpacing: 0.1,

                  fontFamily: Global.font.font_family_fr
                }}
              >

               {'Enter your OTP code here'}

              </Text>
            </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              marginTop: normalizeHeight(40)
            }}
          >
            <View>
              <CodeField otpData={(val) => {

                setotpval(val)
                seterrors('')

              }}
                ref={otpRef} />
            </View>
          </View>
          <Text
            style={{
              color: Global.color.red,
              textAlign: 'right',
              fontSize: normalizeHeight(13),
              lineHeight: normalizeHeight(18),

            }}
          >
            {errors ? errors : null}
          </Text>

          <View>
            <Text
              style={[GlobalStyles.font13R, {
                marginTop: normalizeHeight(50),
                color: Global.color.white,
                textAlign: 'center',
                fontFamily: Global.font.font_family_fr
              }]}
            >
              {'Didn’t you received any code? '}
            </Text>
            <Text
              style={[GlobalStyles.font13R, {
                color: Global.color.white,
                textAlign: 'center',
                marginHorizontal:normalizeWidth(96),
                borderBottomWidth: 1,
                borderBottomColor: Global.color.white,
                fontFamily: Global.font.font_family_fr
              }]}
            >
              {'Resent new code'}
            </Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:normalizeHeight(57)}}>
        <CmpButton
        name={'Verify'}
        hide
        onPress={() => _onFulfill()}
        ButtonStyle={[GlobalStyles.enablefilledbutton6, LoginStyles.continuebtn,{backgroundColor: Global.color.white}]}
        textStyle={[GlobalStyles.font15B, LoginStyles.buttontext,{color:Global.color.primary}]}
      />
      
          </View>
        

        </View >
      </ScrollView >
      <Toast
        style={{
          backgroundColor: "#F8D7DA",
          borderWidth: 1,
          borderColor: "#F8D7DA",
          borderRadius: 10,
        }}
        textStyle={{ color: Global.color.errortoastcolor }}
        defaultCloseDelay={10000}
        positionValue={normalizeHeight(200)}
        ref={toast}
      />
      {
        props?.screenProps?.netstatus === false ? (
          <InternetFooter />
        ) : null
      }
 <CmpLoader loading={showLoader} />
    </View >
  )
}


