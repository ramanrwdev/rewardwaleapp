import React, { useState, useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Image, Text, TouchableOpacity, BackHandler, FlatList, StyleSheet } from 'react-native';
import { userLogout } from '../actions/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { SERVERURL } from '../../config';
import { normalizeHeight, normalizeWidth } from './../components/ResponsiveScreen';
import { testProps } from '../utills/commonFunctions';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import global from '../global';
import I18n from 'react-native-i18n';
import axiosInstance from '../helpers/axiosInstance';

export default function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const [drawerItems, setDrawerItems] = useState([
    {
      name: I18n.t('ACCOUNT_DRC'),
      icon: ''
    },
    { name: 'Bank & Mandate', icon: '' },
    {
      name: 'Manage SIPs',
      icon: ''
    },
    {
      name: 'FAQ',
      icon: ''
    },
    {
      name: I18n.t('LBL_REWARDS'),
      icon: ''
    },
    {
      name: I18n.t('LBL_SUPPORT'),
      icon: ''
    },
    {
      name: I18n.t('LBL_FEEDBACK'),
      icon: ''
    },
    {
      name: I18n.t('REFER_DRC'),
      icon: ''
    },
    {
      name: I18n.t('LBL_PRIVACY_POLICY'),
      icon: ''
    },
    {
      name: I18n.t('TERMS_OF_USEDRAWER'),
      icon: ''
    },
    {
      name: I18n.t('LBL_LOGOUT'),
      icon: ''
    }])
  const [videoPopUp, setVideopopup] = useState(false);
  const [userData, setUserData] = useState(null)
  const [bankAdded, setBankAdded] = useState(false)

  // const checkBankList = async () => {
  //   const { data, error } = await getBankList()
  //   if (!error) {
  //     if (data.length != 0) {
  //       setBankAdded(true)
  //     }
  //   }
  //   // const response = await axiosInstance.get('user/profile')
  //   // if(response.data?.kyc_verified){
  //   //   const add = drawerItems
  //   //   add.splice(1,0, { name: 'Bank & Mandate', icon: BANKANDMANDATE })
  //   //   setDrawerItems(add)
  //   // }
  // }

  useEffect(() => {
    getUserData()
    // checkBankList()
    const unsubscribe = props.navigation.addListener('focus', () => {
      getUserData()
    });
    return unsubscribe

  }, []);



  const getUserData = async () => {
    try {
      const response = await axiosInstance.get('user/profile')
      setUserData(response.data)
    } catch (error) {
    }
  }

  const videoId = useSelector((state) => state?.wealthReducer?.smallcaseHolding?.data?.video_id);
  const onLogout = React.useCallback(async () => {
    const data = {};
    try {
      const action = userLogout(data);
      await dispatch(action);
      BackHandler.addEventListener('hardwareBackPress', () => true);
    } catch (err) {
    }
  }, [dispatch]);

  const logout = async () => {
    await AsyncStorage.removeItem('usercrendentials');
    props.navigation.closeDrawer();
    onLogout();
  };

  const navigateToPages = (name) => {
    props.navigation.closeDrawer();
    if (name == 'My Account') {
      props.navigation.navigate('KYCSetup', { frompage: 'SideDrawer' });
    } else if (name == 'Bank & Mandate') {
      if (bankAdded) {
        props.navigation.navigate('BankAccountList');
      } else {
        props.navigation.navigate('AddBank');
      }
    } else if (name == 'Manage SIPs') {
      props.navigation.navigate('ManageSIP');
    } else if (name == 'FAQ') {
      props.navigation.navigate('FAQ');

    } else if (name == 'Rewards') {
      props.navigation.navigate('RewardCenter');
    } else if (name == 'Support') {
      props.navigation.navigate('Support');
    } else if (name == 'Feedback') {
      props.navigation.navigate('Feedback');
    } else if (name == 'Refer') {
      props.navigation.navigate('Referral');
    } else if (name == 'Privacy Policy') {
      props.navigation.navigate('PrivacyPolicy');
    } else if (name == 'Terms of use') {
      props.navigation.navigate('TermsOfUse');
    } else if (name == 'Logout') {
      logout();
    }
  };

  const VideoPlayer = () => (
    <View style={{
      flex: 1
    }}>
      <TouchableOpacity onPress={() => setVideopopup(false)}
        hitSlop={{
          top: 15,
          bottom: 15,
          left: 15,
          right: 15
        }}
        style={{
          position: 'absolute',
          right: 0,
          top: -2,
          zIndex: 1
        }}>
        {/* <Image name={CROSS} height={normalizeWidth(30)} width={normalizeWidth(30)} /> */}
      </TouchableOpacity>

      <View style={{
        width: '100%',
        height: normalizeHeight(200),
        marginTop: normalizeHeight(30),
        marginBottom: normalizeHeight(15)
      }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}?&autoplay=1` }}
        />
      </View>
    </View>
  );
  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}
      {...props} {...testProps('IPDRAWERCONTENT')}>
      <View style={{ flex: 1 }}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('Aboutme');
          }} style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            {userData?.profile_photo
              ? <Image
                style={{
                  width: normalizeWidth(40),
                  height: normalizeHeight(40),
                  borderRadius: normalizeHeight(20)
                }}
                source={{ uri: `${SERVERURL + userData.profile_photo}?${new Date()}` }}
              />
              :
              <Image
                style={{
                  width: normalizeWidth(40),
                  height: normalizeHeight(40),
                  borderRadius: normalizeHeight(20)
                }}
                source={require('../images/dummyDp.png')}
              />
            }
            <View style={{ paddingLeft: normalizeWidth(16) }}>
              <Text style={styles.displayname}>{userData?.displayname}</Text>
              {userData?.email ? <Text style={styles.email}>{userData?.email}</Text> : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity hitSlop={{
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          }} onPress={() => props.navigation.closeDrawer()}>
            {/* <Image
              name={BLUECROSS}
              width={normalizeWidth(18)}
              height={normalizeHeight(18)}
            /> */}
          </TouchableOpacity>
        </View>
        <FlatList
          data={drawerItems}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item, index }) => {
            if (item.name == 'Bank & Mandate' && userData?.kyc_verified != null || userData?.kyc_verified != undefined) {
              return (
                <TouchableOpacity onPress={() => {
                  navigateToPages(item.name);
                }}
                  style={styles.drawerItemStyle}>
                  {/* <Image name={item.icon}
                    height={normalizeHeight(16)}
                    width={normalizeWidth(16)}
                  /> */}
                  <Text style={styles.drawerItemName}>{item.name}</Text>
                </TouchableOpacity>
              )
            } else if (item.name != 'Bank & Mandate') {
              return (
                <TouchableOpacity onPress={() => {
                  navigateToPages(item.name);
                }}
                  style={styles.drawerItemStyle}>
                  {/* <Image
                    name={item.icon}
                    height={normalizeHeight(16)}
                    width={normalizeWidth(16)}
                  /> */}
                  <Text style={styles.drawerItemName}>{item.name}</Text>
                </TouchableOpacity>
              )
            }

          }}
        />
      </View>
      <Modal
        backdropColor={'#1A2E49'}
        backdropOpacity={0.8}
        animationOut="zoomOutUp"
        animationInTiming={10}
        animationOutTiming={10}
        isVisible={videoPopUp}
        onBackButtonPress={() => setVideopopup(false)}
        onBackdropPress={() => setVideopopup(false)}
        style={{
          position: 'absolute',
          top: normalizeHeight(250),
          left: -4,
          width: '92%',
          backgroundColor: 'black',
          borderRadius: normalizeHeight(10),
          overflow: 'hidden'
        }}>
        <View style={{ flex: 1 }}>
          {VideoPlayer()}
        </View>
      </Modal>
    </DrawerContentScrollView >
  );
}


const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalizeWidth(16),
    marginTop: normalizeHeight(24)
  },
  displayname: {
    fontFamily: global.font.semiBold,
    fontWeight: '600',
    fontSize: normalizeHeight(16),
    color: global.color.white
  },
  email: {
    fontWeight: '400',
    fontFamily: global.font.regular,
    fontSize: normalizeHeight(10),
    color: global.color.nebula,
    marginTop: normalizeHeight(2)
  },
  flatListContainer: {
    marginTop: normalizeHeight(34),
    marginLeft: normalizeWidth(12)
  },
  drawerItemStyle: {
    height: normalizeHeight(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalizeHeight(8),
    backgroundColor: 'rgba(111, 115, 122, 0.01)'
  },
  drawerItemName: {
    fontSize: normalizeHeight(14),
    fontFamily: global.font.regular,
    fontWeight: '400',
    color: global.color.white,
    paddingLeft: normalizeWidth(16)
  }
});