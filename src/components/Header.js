import React, { Fragment, useLayoutEffect } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import HeaderStyles from '../styles/HeaderStyles';
import Global from '../global';
import GlobalStyles from '../styles/GlobalStyles';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
import images from './../images/images';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  THREEDOTS,
  TRANHISTORY,
  SHAREICON,
  ARROWWHITE
} from './../images/Svg/index';
// import { readnotification, notificationcout } from './../actions/NotificationAction'
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.notificationReducer?.notificationcount?.count)
  // console.log(count, "counts...........................")


  const goback = () => {
    if (props.navigatetodashboard) {
      props.navigation.navigate('SideDrawer');
    } else if (props.mfdashboard) {
      props.navigation.navigate('MFDashboard');
    } else if (props.investorDashboard) {
      props.navigation.navigate('InvestorDashboard');
    } else if (props.goldDashboard) {
      props.navigation.navigate(Global.SCREENS.GOLD_DASHBOARD);
    } else if (props.navigateWealth) {
      props.navigation.navigate('WealthDashboard');
    } else if (props.navigateGoal) {
      props.navigation.navigate('GoalDashboard');
    } else if (props.navigateFd) {
      props.navigation.navigate('FdDashboard');
    } else if (props.mfdrawer) {
      props.navigation.navigate('MFDrawer');
    } else if (props.goToSell) {
      props.navigation.navigate(Global.SCREENS.SELL);
    } else if (props.goToGift) {
      props.navigation.navigate('Gift');
    } else if (props.goToDelivery === true) {
      props.navigation.navigate('DeliveryProduct')
    } else if (props.navigatetomaindashboard) {
      props.navigation.navigate('MainDashboard')
    } else if (props.bankAccount === true) {
      props.navigation.goBack()
    } else if (props.bankAccount === false) {
      props.navigation.goBack();
    } else if (props.lockerBack === 'frompage') {
      props.navigation.goBack();
    } else if (props.lockerBack === '') {
      props.navigation.navigate(Global.SCREENS.GOLD_DASHBOARD);
    } else if (props.prepaid) {
      if (props.prepaidparams.from === 'otpscreen') {
        props.navigation.navigate("ApplyCard", props.prepaidparams)
      } else if (props.prepaidparams.from === 'carddashboard') {
        props.navigation.navigate("CardDashboard")
      } else {
        props.navigation.goBack();
      }
    } else if (props.frompage) {
      if (props.frompage === 'MFDrawer') {
        props.navigation.navigate(props.frompage, { frompage: props.frompage })
      } else {
        props.navigation.navigate(props.frompage)
      }
    } else if (props.prepaidPan) {
      props.navigation.navigate("ApplyCard", { from: 'uploadpan' })
    } else if (props.insurance) {
      if (props.from == 'Dashboard') {
        props.navigation.navigate('SideDrawer');
      } else if (props.from !== undefined) {
        props.navigation.navigate(props.from)
      } else {
        props.navigation.navigate('SideDrawer');
      }
    } else if (props.goldhistory) {
      props.nav()
    } else if (props.cartsummarry) {
      props.nav()
    } else if (props.managesip) {
      props.nav()
    } else if (props.mfDashboard) {
      props.nav()
    } else if (props.bankAccountList) {
      props.nav()
    } else if (props?.navigatebudget) {
      props.nav()
    }
    else {
      props.navigation.goBack(null);
    }
  }
  const goToDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const goToSideDrawer = () => {
    props.resetpanel();
    props.navigation.toggleDrawer();
  };

  const goToNotificationPoint = () => {
    // console.log(first)
    // dispatch(readnotification())
    props.resetpanel();
   // props.navigation.navigate('NotificationList');
    props.navigation.navigate('SearchArea');
  };

  const navigatetoHistory = () => {
    props.navigation.navigate('TransactionHistory', {
      goalName: props.goalName
    });
  };

  const svg = (img, onPress, size) => (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={() => onPress()}
      style={HeaderStyles.notificationblock}>
      {/* <Image
        name={img}
        width={size ? normalizeHeight(size) : normalizeHeight(22)}
        height={size ? normalizeHeight(size) : normalizeHeight(22)}
      /> */}
    </TouchableOpacity>
  )

  const img = (img, onPress, size, tintColor, width) => (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={() => onPress ? onPress() : null}>
      <Image
        style={{
          height: size ? normalizeHeight(size) : normalizeHeight(22),
          width: width ? normalizeHeight(width) : size ? normalizeHeight(size) : normalizeHeight(22),
          resizeMode: 'contain',
          tintColor: tintColor ? tintColor : null
        }}
        source={img}
      />
    </TouchableOpacity>
  )

  const img2 = (img, size, tintColor, width) => (
    <View>
      <Image
        style={{
          height: size ? normalizeHeight(size) : normalizeHeight(22),
          width: width ? normalizeHeight(width) : size ? normalizeHeight(size) : normalizeHeight(22),
          resizeMode: 'contain',
          tintColor: tintColor ? tintColor : null
        }}
        source={img}
      />
    </View>
  )

  const icon = (name, onPress) => (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={() => onPress()}
      style={HeaderStyles.notificationblock}>
      <Icon name={name} size={normalizeHeight(22)} color={Global.color.white} />
    </TouchableOpacity>
  )

  const cart = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {props.cartText ? <Text style={HeaderStyles.cartText}>{props.cartText}</Text> : null}
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={() => props?.cartPress()}>
        <Image
          style={HeaderStyles.cartImg}
          tintColor={props.cartText ? Global.color.cyanblue : Global.color.white}
          source={require('../images/cart1.png')}
        />
      </TouchableOpacity>
    </View>
  )

  return (
    <Fragment>
      <View style={HeaderStyles.headercontainer}>
        <View style={HeaderStyles.headermainview}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {props.backicon || props.ismethod ? (
              <TouchableOpacity
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              onPress={() => props.navigation.goBack()}
              style={{ position: 'relative', marginLeft: normalizeWidth(10) }}>
              <Image
                style={HeaderStyles.profileimage}
                source={images.Back_icon}
              />
            </TouchableOpacity>
            ) : props.hamburger ? (
              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => goToSideDrawer()}
                style={{ position: 'relative', marginLeft: normalizeWidth(10) }}>
                <Image
                  style={HeaderStyles.profileimage}
                  source={images.hamburger}
                />
              </TouchableOpacity>
            ) : null}
            <View style={{ paddingLeft: normalizeWidth(16) }}>
              <Text style={[GlobalStyles.lblwhite16b]}>{props.name}</Text>
            </View>
          </View>
          <View>
            {props.backicon || props.ismethod || !props.hamburger ? null : (
              img(count <= 0 ? images.notification_bell : images.notification_bell_active, goToNotificationPoint, 24)
            )}
            {props.close ? (img(images.close, props?.closePress, 16)) : <View />}
            {props.cart ? cart() : <View />}
            {props.capital ? (img(images.addwhite, kycback)) : <View />}
            {props.edit ? (img(images.edit, props?.editPress, 16)) : <View />}
            {props.file ? (img(images.file_icon, props?.filePress)) : <View />}
            {props.dot ? (svg(THREEDOTS, goToDrawer)) : <View />}
            {props.history ? (svg(TRANHISTORY, navigatetoHistory)) : <View />}
            {props.shareIconPress ? (svg(SHAREICON, props.shareIconPress)) : <View />}
            {props.deleteicon ? (icon('trash', props.deleteiconOnpress)) : <View />}
            {props.home ? (img(images.home_menu, props?.homePress, 18, Global.color.white)) : <View />}
            {props.bbpsheader ? (img2(images.bbpslogo, 20, '', 60)) : <View />}
          </View>
        </View>
      </View>
    </Fragment>
  );
}
export default Header;