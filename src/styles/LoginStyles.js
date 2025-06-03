import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP, normalizeHeight } from '../components/ResponsiveScreen';
import Global from '../global';
import { fontFamily } from '../pages/themes';

const LoginStyles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  imageblock: {
    paddingHorizontal: widthPercentageToDP('4%'),
    marginTop: heightPercentageToDP('9.85%'),
    marginBottom: heightPercentageToDP('2.46%'),
    height: heightPercentageToDP('24.63%'),
    alignItems: 'center'
  },
  tabblock: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: heightPercentageToDP('3.69%')
  },
  lineblock: {
    height: heightPercentageToDP('0.15%'),
    backgroundColor: '#DDDDDD',
    width: '100%'
  },
  tabcontainer: {
    height: heightPercentageToDP('4.25%'),
    width: widthPercentageToDP('65.6%'),
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: heightPercentageToDP('1.13%'),
    elevation: 2,
    backgroundColor: '#FFFFFF',
    padding: heightPercentageToDP('0.45%')
  },
  activecellpersonal: {
    borderRadius: heightPercentageToDP('1.13%'),
    backgroundColor: '#354876',
    width: widthPercentageToDP('32%')
  },
  activecellbusiness: {
    borderRadius: heightPercentageToDP('1.13%'),
    backgroundColor: '#56715F',
    width: widthPercentageToDP('32%')
  },
  activecell: {
    color: '#FFFFFF',
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('3.4%'),
    fontWeight: '600',
    letterSpacing: 0.2,
    textAlign: 'center'
  },
  cellblock: {
    width: widthPercentageToDP('32%')
  },
  celltext: {
    color: '#000000',
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('3.4%'),
    letterSpacing: 0.2,
    textAlign: 'center'
  },
  formblock: {
    paddingHorizontal: widthPercentageToDP('4%'),
    paddingTop: heightPercentageToDP('9.85%')
  },
  messagetext: {
    // MarginTop:heightPercentageToDP('1.84%'),
    marginBottom: heightPercentageToDP('9.24%'),
    fontFamily: Global.font.font_family_fr,
    // TextAlign: 'center',
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('2.55%'),
    color: '#666666'
  },
  buttonblock: {
    flex: 1
    // MarginTop:heightPercentageToDP('2.83%')
  },
  largebuttonpersonal: {
    borderRadius: heightPercentageToDP('1.48%'),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#293A64',
    borderColor: '#293A64'
  },
  largebuttonbusiness: {
    borderRadius: heightPercentageToDP('1.48%'),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#56715F',
    borderColor: '#56715F'
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: normalizeHeight(16),
    textAlign: 'center',
   // fontWeight: 'normal',
    lineHeight: normalizeHeight(19),
    letterSpacing: 0.1
  },
  buttontext2:
  {
    color: '#FFFFFF',
    fontSize: normalizeHeight(18),
    textAlign: 'center',
   // fontWeight: 'normal',
   fontFamily:Global.font.TextMedium,
    lineHeight: normalizeHeight(21),
    letterSpacing: 0.1
  },
  disclaimerblock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disclaimer: {
    textAlign: 'center',
    fontFamily: Global.font.font_family_fr,
    fontSize: heightPercentageToDP('1.56%'),
    lineHeight: heightPercentageToDP('2.84%'),
    color: '#666666',
    letterSpacing: 0.2
  },
  logoblock: {
    display: 'flex',
    width: '100%',
    maxHeight: heightPercentageToDP('4.25%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP('4.93%'),
    marginBottom: heightPercentageToDP('5%')
  },

  // ..................styles .......
  errortext: {
    color: Global.color.yellow,

    fontSize: heightPercentageToDP("1.56%"),
    marginTop: normalizeHeight(10),
    lineHeight: heightPercentageToDP("1.64%"),
    fontFamily: Global.font.font_family_fr,
    alignSelf: 'flex-end'
    // width: "100%",
  },
  
  inputbox: {
    backgroundColor: "#FAFAFA",
    width: widthPercentageToDP("92%"),
    height: heightPercentageToDP("6.77%"),
    borderRadius: 8,
    borderColor: "#D9D9D9",
    marginTop: heightPercentageToDP("1.97%"),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: heightPercentageToDP('0.65')
  },
  inputboxinside: {
    marginLeft: widthPercentageToDP("5.6%"),
    marginRight: widthPercentageToDP("5.06%"),
  },
  inputboxinside1: {
    height: "100%",
    width: widthPercentageToDP("0.31%"),
    backgroundColor: "#000000",

  },
  textinput: {
    height: "100%",
    marginLeft: widthPercentageToDP("4.53%"),

    color: Global.color.black,
    width: "100%",
  },
  otptext: {
    color: "#FAFAFA",
    paddingHorizontal: widthPercentageToDP("4%"),
    textAlign: "center"
  },
  otptext1: {
    color: Global.color.white,
    textAlign: "center"
  },
  continuebtn: {
    // position: "absolute",
    //bottom: heightPercentageToDP("6.15%"),
    //left: 0,
   // zIndex: 1,
   // justifyContent: "center",
   // marginHorizontal: widthPercentageToDP("10%"),
  },
  image: {
    marginTop: heightPercentageToDP("6.28%"),
    height: heightPercentageToDP("28.44%"),
    width: widthPercentageToDP("92%"),
  }




});

export default LoginStyles;
