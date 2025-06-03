import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  normalizeHeight,
  normalizeWidth
} from '../components/ResponsiveScreen';
import Global from '../global';

const FooterStyle = StyleSheet.create({
  footercontainer: {
    position: 'absolute',
    width: '100%',
    height: normalizeHeight(74),
    left: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: Global.color.white,
    flex: 1,
    
   // flexDirection: 'row',

  },
  menutext: {
    fontSize: normalizeHeight(11),
    lineHeight: normalizeHeight(13),
    fontWeight: '500',
    fontFamily: Global.font.font_family_fb,
    letterSpacing: 0.5,
    marginTop: normalizeHeight(2),
    textAlign: 'center'
  },
  iconsize: {
    height: normalizeHeight(22),
    width: normalizeWidth(22),
    resizeMode: 'contain'
  },
  menutextNearby: {
    fontSize: heightPercentageToDP('1.4%'),
    lineHeight: heightPercentageToDP('2.27%'),
    fontFamily: Global.font.font_family_fr,
    letterSpacing: 0.5,
    // MarginTop: heightPercentageToDP('0.8%'),
    textAlign: 'center'
  },
  iconsizeNearyby: {
    height: 28,
    width: 25,
    resizeMode: 'contain'
  }
});

export default FooterStyle;
