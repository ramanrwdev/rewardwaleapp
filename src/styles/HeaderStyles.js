import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  normalizeHeight,
  normalizeWidth
} from '../components/ResponsiveScreen';
import Global from '../global';

const HeaderStyles = StyleSheet.create({

  headercontainer: {
    backgroundColor: Global.color.primary,
    height: Platform.OS == 'android' ? normalizeHeight(53) : normalizeHeight(83),
    justifyContent: 'center',
    paddingTop: Platform.OS !== 'android' ? normalizeHeight(25) : 0,
    //  marginTop: 30
  },

  headerwhitecontainer: {
    width: '100%',
    backgroundColor: Global.color.primary,
    paddingHorizontal: widthPercentageToDP('4%'),
    justifyContent: 'center'
  },


  headermainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalizeWidth(16)
  },

  headernameview: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: normalizeWidth(15),
    paddingRight: normalizeWidth(15)
  },

  headersubcontainerone: {
    flex: 0.1,

    justifyContent: 'center'
  },
  headersubcontainerright: {
    flex: 0.1

  },
  headersubcontainertwo: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 0.1,
    // PaddingLeft: 30,
    fontFamily: Global.font.font_family_fb
  },
  headersubcontainerwhitetwo: {
    flex: 0.88,
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 0.1,
    fontFamily: Global.font.font_family_fb
    // PaddingTop: heightPercentageToDP('0.71%')
  },
  financegoalsubcontainer: {
    flex: 0.88,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  financegoalcircles: {
    width: heightPercentageToDP('4.25%'),
    height: heightPercentageToDP('4.25%'),
    backgroundColor: Global.color.gradientblue,
    borderRadius: heightPercentageToDP('2.12%'),
    marginRight: widthPercentageToDP('1.86%')
  },
  financegoalgreycircles: {
    width: heightPercentageToDP('4.25%'),
    height: heightPercentageToDP('4.25%'),
    backgroundColor: Global.color.primary,
    borderRadius: heightPercentageToDP('2.12%'),
    marginRight: widthPercentageToDP('1.86%'),
    opacity: 0.5
  },
  financegoallastcircle: {
    width: heightPercentageToDP('4.25%'),
    height: heightPercentageToDP('4.25%'),
    backgroundColor: Global.color.gradientblue,
    borderRadius: heightPercentageToDP('2.12%')
  },
  financegoalinsidetext: {
    textAlign: 'center',
    color: Global.color.primary,
    padding: heightPercentageToDP('0.71%')
  },
  profileblock: {
    height: heightPercentageToDP('4.25%'),
    width: heightPercentageToDP('4.25%'),
    // BorderRadius: heightPercentageToDP('2.12%'),
    overflow: 'hidden'
  },
  profileimage: {
    height: normalizeHeight(22),
    width: normalizeHeight(22),
    resizeMode: 'contain'
  },
  hamburger: {
    height: heightPercentageToDP('2.27%'),
    width: heightPercentageToDP('2.27%'),
    resizeMode: 'contain',
    position: 'absolute',
    left: widthPercentageToDP('4.8%'),
    top: heightPercentageToDP('2.12%')
  },
  notificationblock: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  notificationicon: {
    height: normalizeHeight(22),
    width: normalizeHeight(22),
    resizeMode: 'contain'
  },
  cartText: {
    fontSize: normalizeHeight(10),
    fontFamily: Global.font.font_family_fb,
    fontWeight: '600',
    color: Global.color.white,
    paddingRight: normalizeWidth(4)
  },
  cartImg: {
    height: normalizeHeight(16),
    width: normalizeHeight(16),
    resizeMode: 'contain'
  }
});

export default HeaderStyles;
