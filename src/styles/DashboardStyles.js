import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  normalizeHeight,
  normalizeWidth
} from '../components/ResponsiveScreen';
import Global from '../global';

const DashboardStyles = StyleSheet.create({
  dashboardblock: {
    flex: 1,
    backgroundColor: Global.color.skycolorbk,
    // Height: '100%',
  },
  graphblock: {
    height: heightPercentageToDP('28.53%')
  },
  graphinnerblock: {
    height: heightPercentageToDP('21.53%'),
    backgroundColor: Global.color.bgrfaintblue,
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: Global.color.bgrfaintblue,
    shadowColor: '#000',
    elevation: heightPercentageToDP('0.85%'),
    shadowRadius: heightPercentageToDP('1.42%'),
    borderTopLeftRadius: heightPercentageToDP('2.83%'),
    borderTopRightRadius: heightPercentageToDP('2.83%'),
    borderBottomLeftRadius: heightPercentageToDP('2.83%'),
    borderBottomRightRadius: heightPercentageToDP('2.83%')
  },
  bulletblock: {
    marginTop: heightPercentageToDP('1.42%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: heightPercentageToDP('2.83%')
  },
  bullets: {
    width: heightPercentageToDP('1.42%'),
    height: heightPercentageToDP('1.42%'),
    marginLeft: widthPercentageToDP('0.8%'),
    marginRight: widthPercentageToDP('0.8%'),
    borderTopLeftRadius: heightPercentageToDP('0.71%'),
    borderTopRightRadius: heightPercentageToDP('0.71%'),
    borderBottomLeftRadius: heightPercentageToDP('0.71%'),
    borderBottomRightRadius: heightPercentageToDP('0.71%'),
    backgroundColor: '#697593'
  },
  bulletactive: {
    width: heightPercentageToDP('1.42%'),
    height: heightPercentageToDP('1.42%'),
    marginLeft: widthPercentageToDP('0.8%'),
    marginRight: widthPercentageToDP('0.8%'),
    borderTopLeftRadius: heightPercentageToDP('0.71%'),
    borderTopRightRadius: heightPercentageToDP('0.71%'),
    borderBottomLeftRadius: heightPercentageToDP('0.71%'),
    borderBottomRightRadius: heightPercentageToDP('0.71%'),
    backgroundColor: Global.color.white
  },
  featurenavblock: {
    marginTop: heightPercentageToDP('2.83%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: heightPercentageToDP('3.54%'),
    paddingBottom: heightPercentageToDP('3.54%'),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Global.color.bgrfaintblue,
    borderBottomColor: Global.color.bgrfaintblue
  },
  featurenav: {
    width: widthPercentageToDP('13.87%'),
    height: heightPercentageToDP('6.66%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  featureicon: {
    marginBottom: heightPercentageToDP('0.71%'),
    width: heightPercentageToDP('3.54%'),
    height: heightPercentageToDP('3.54%'),
    flex: 1,
    resizeMode: 'contain'
  },
  featuretext: {
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('2.27%'),
    textAlign: 'center',
    color: Global.color.white,
    letterSpacing: 0.1
  },
  duesblock: {
    marginTop: heightPercentageToDP('2.83%')
  },
  dueshead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bluebtn: {
    backgroundColor: Global.color.navyblueColor,
    borderRadius: heightPercentageToDP('0.71%'),
    fontSize: heightPercentageToDP('1.98%'),
    lineHeight: heightPercentageToDP('3.54%'),
    letterSpacing: 0.1,
    paddingHorizontal: widthPercentageToDP('2.66%'),
    paddingVertical: heightPercentageToDP('0.71%'),
    color: Global.color.white,
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: Global.color.navyblueColor,
    shadowColor: '#000',
    elevation: heightPercentageToDP('0.71%'),
    shadowRadius: heightPercentageToDP('1.42%')
  },
  bluebtnText: {
    color: Global.color.lightgrey,
    fontSize: 13,
    fontFamily: Global.font.font_family_fb
  },
  reminderlbl: {
    color: Global.color.yellow,
    fontSize: heightPercentageToDP('2.27%'),
    lineHeight: heightPercentageToDP('3.54%'),
    letterSpacing: 0.1
  },
  duesbody: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: heightPercentageToDP('1.42%'),
    paddingBottom: heightPercentageToDP('1.42%')
  },
  dues: {
    backgroundColor: Global.color.bgrfaintblue,
    width: widthPercentageToDP('34.66%'),
    height: heightPercentageToDP('21.25%'),
    shadowColor: Global.color.black,
    elevation: heightPercentageToDP('0.85%'),
    shadowRadius: heightPercentageToDP('1.42%'),
    borderTopLeftRadius: heightPercentageToDP('2.83%'),
    borderTopRightRadius: heightPercentageToDP('2.83%'),
    borderBottomLeftRadius: heightPercentageToDP('2.83%'),
    borderBottomRightRadius: heightPercentageToDP('2.83%'),
    marginLeft: widthPercentageToDP('1.33%'),
    marginRight: widthPercentageToDP('1.33%')
  },
  addexpense: {
    position: 'absolute',
    right: widthPercentageToDP('5%'),
    bottom: heightPercentageToDP('13.74%'),
    borderRadius: heightPercentageToDP('7.08%'),
    backgroundColor: Global.color.gradientblue,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Global.color.gradientblue,
    elevation: heightPercentageToDP('0.71%'),
    width: widthPercentageToDP('16%'),
    height: widthPercentageToDP('16%')
  },
  expenseicon: {
    padding: heightPercentageToDP('1.42%'),
    color: Global.color.primary,
    fontSize: heightPercentageToDP('5.67%')
  },
  expensepopup: {
    position: 'absolute',
    bottom: -heightPercentageToDP('3.12%'),
    left: -widthPercentageToDP('5.2%'),
    width: Global.structure.screenWidth
  },
  opencamera: {
    backgroundColor: Global.color.primary,
    height: heightPercentageToDP('11.76%'),
    borderTopRightRadius: heightPercentageToDP('1.42%'),
    borderTopLeftRadius: heightPercentageToDP('1.42%'),
    elevation: heightPercentageToDP('0.71%'),
    width: Global.structure.screenWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: heightPercentageToDP('2.12%')
  },
  iconsize: {
    height: heightPercentageToDP('3.54%'),
    width: heightPercentageToDP('3.54%'),
    marginBottom: heightPercentageToDP('0.71%')
  },

  // New Dashboard Design
  salutationBlock: {
    marginBottom: heightPercentageToDP('2.46%'),
    marginHorizontal: 15
  },
  salutationText: {
    // lineHeight: normalizeHeight(21),
    color: Global.color.lightgrey,
    fontSize: normalizeHeight(17),
    fontFamily: Global.font.font_family_fb,
    fontWeight: '500', letterSpacing: 0.3
  },
  bannerBlock: {
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: '#455A8A'
  },
  shadowBannerBox: {
    shadowColor: '#000',
    elevation: heightPercentageToDP('0.85%'),
    shadowRadius: heightPercentageToDP('1.42%'),
    borderTopLeftRadius: heightPercentageToDP('2.83%'),
    borderTopRightRadius: heightPercentageToDP('2.83%'),
    borderBottomLeftRadius: heightPercentageToDP('2.83%'),
    borderBottomRightRadius: heightPercentageToDP('2.83%')
  },
  bannerBox: {
    height: heightPercentageToDP('21.53%'),
    width: widthPercentageToDP('92%'),
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: Global.color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerMargin: {
    marginRight: widthPercentageToDP('6%')
  },
  defaultImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  borderBlock: {
    marginTop: 25
  },
  splitBills: {
    marginTop: 17
  },
  splitBillsView: {

    /*
     * MarginTop: 17,
     * alignItems: 'center',
     * justifyContent: 'center',
     */
    /*shadowColor: Global.color.black*/

    /*
     * ShadowOffset: {
     *   width: 0,
     *   height: 6,
     * },
     * shadowOpacity: 0.2,
     * shadowRadius: 8,
     * elevation: 6,
     */
  },
  bannerHeaderText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 24
  },
  borderBlockSave: {
    marginTop: 30
    // MarginBottom: 20,
  },
  bannerImage: {
    height: heightPercentageToDP('14.16%'),
    resizeMode: 'contain'
  },
  bannerText: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('1.98%'),
    lineHeight: heightPercentageToDP('2.26%'),
    marginTop: heightPercentageToDP('1.42%')
  },
  shadowBox: {
    shadowColor: '#000',
    elevation: heightPercentageToDP('0.85%'),
    shadowRadius: heightPercentageToDP('1.42%'),
    borderRadius: heightPercentageToDP('1.42%'),
    justifyContent: 'center'
  },
  centerAlign: {
    alignItems: 'center'
  },
  centerAlignset: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  serviceBlock: {
    // marginTop: normalizeHeight(20),
    flexDirection: 'row',
    paddingVertical: normalizeHeight(10),
    paddingHorizontal: normalizeWidth(15),
    // borderWidth: 1
  },
  serviceBox: {
    width: widthPercentageToDP('26.97%'),
    height: widthPercentageToDP('26.97%'),
    backgroundColor: '#24345A',
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: '#24345A'
  },
  serviceMargin: {
    marginRight: widthPercentageToDP('5.55%')
  },
  flexset: {

    /*
     * Commented for gold uncomment it later
     *   flex: 0.2,
     */
    flex: 0.25
  },
  serviceImage: {
    height: heightPercentageToDP('5.66%'),
    resizeMode: 'contain'
  },
  serviceicon: {
    marginLeft: 5,
    width: 35,
    height: 45
  },
  serviceText: {
    color: Global.color.white,
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('2.83%'),
    marginTop: heightPercentageToDP('0.7%')
  },
  serviceTextheading: {
    color: Global.color.white70,
    fontSize: 11,
    fontFamily: Global.font.font_family_fb,
    lineHeight: 14
    // MarginTop: heightPercentageToDP('0.1%'),
  },
  moduleNameText: {
    fontSize: normalizeHeight(12),
    lineHeight: normalizeHeight(17),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fr,
    color: Global.color.lightgrey,
    marginTop: normalizeHeight(8),
    textAlign: 'center'
  },
  investText: {
    fontSize: normalizeHeight(11),
    lineHeight: normalizeHeight(13),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb,
    color: Global.color.lightgrey,
    marginTop: heightPercentageToDP('0.65%')
  },
  insuranceText: {
    fontSize: normalizeHeight(11),
    lineHeight: normalizeHeight(13),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb,
    color: Global.color.lightgrey,
    marginTop: heightPercentageToDP('0.65%'),
    textAlign: "center"
  },
  prepaidCartText: {
    fontSize: normalizeHeight(17),
    lineHeight: normalizeHeight(22),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb,
    color: Global.color.lightgrey,
    //marginTop: heightPercentageToDP('0.65%'),
    textAlign: "center"
  },

  prepaidCart2Text: {
    fontSize: normalizeHeight(13),
    lineHeight: normalizeHeight(16),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb,
    color: Global.color.white70,
    //marginTop: heightPercentageToDP('0.65%'),
    //textAlign: "center"
  },
  prepaidCart3Text: {
    fontSize: normalizeHeight(13),
    lineHeight: normalizeHeight(16),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb,
    color: Global.color.white70,
    //marginTop: heightPercentageToDP('0.65%'),
    // textAlign: "center"
  },
  learnBlock: {
    width: 256,
    height: heightPercentageToDP('18.63%'),
    borderWidth: 0
  },
  horizontalLine: {
    marginTop: 7,
    borderBottomColor: 'rgba(250, 250, 250, 0.1)',
    borderBottomWidth: 0.5,
    marginHorizontal: 0
  },
  learnMargin: {
    marginRight: widthPercentageToDP('4.16%')
  },
  learnBox: {
    flexDirection: 'row',
    marginHorizontal: widthPercentageToDP('2.22%'),
    marginLeft: 11
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: widthPercentageToDP('2.22%'),
    marginLeft: 11
  },
  learnImage: {
    height: 42,
    width: 42,
    marginTop: 5,
    marginRight: widthPercentageToDP('2.22%'),
    resizeMode: 'contain'
  },
  learnHeading: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('1.56%'),
    lineHeight: heightPercentageToDP('1.98%'),
    fontWeight: '500',
    marginBottom: heightPercentageToDP('0.7%')
  },
  learnHeadingDashBoard: {
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fb,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: heightPercentageToDP('0.7%')
  },
  infoHeadingStyle: {
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fb,
    // fontSize: heightPercentageToDP('2.40%'),
    // lineHeight: heightPercentageToDP('2.97%'),
    fontSize: normalizeHeight(15),
    lineHeight: normalizeHeight(20),
    letterSpacing: 0.3,
    fontWeight: '500',
    marginTop: normalizeHeight(5),
    marginBottom: normalizeHeight(5)
  },
  listInfoStyle: {
    width: normalizeWidth(300),
    // height: normalizeHeight(140),
    // paddingTop: normalizeHeight(15),
    // paddingBottom: normalizeHeight(5),
    // paddingHorizontal: normalizeWidth(10),
    // paddingLeft: widthPercentageToDP('3.2%'),
    // paddingRight: widthPercentageToDP('3.46%'),
    // borderRadius: normalizeHeight(20)
  },
  cardInfoStyle: {
    // width: widthPercentageToDP('44%'),
    // marginRight: widthPercentageToDP('2.66%'),
    // paddingVertical: heightPercentageToDP('1.97%'),
    // paddingLeft: widthPercentageToDP('3.2%'),
    // paddingRight: widthPercentageToDP('3.46%'),
    // borderRadius: 20
    width: normalizeWidth(165),
    height: normalizeHeight(224),
    paddingTop: normalizeHeight(15),
    // paddingBottom: normalizeHeight(5),
    paddingHorizontal: normalizeWidth(15),
    borderRadius: normalizeHeight(20)
  },
  cardaction: {
    width: normalizeWidth(106),
    height: normalizeHeight(20),
    borderRadius: normalizeHeight(6),
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardactiontxt: {
    fontSize: normalizeHeight(11),
    lineHeight: normalizeHeight(20),
    fontWeight: '500',
    letterSpacing: 0.3,
    fontFamily: Global.font.font_family_fb
  },
  learnHeadingDashBoardDesc: {
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fr,
    fontSize: normalizeHeight(13),
    lineHeight: normalizeHeight(18),
    fontWeight: '300',
    letterSpacing: 0.1,
    textAlign: 'center',
    marginBottom: normalizeHeight(10)
  },
  learningText: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('1.56%'),
    lineHeight: heightPercentageToDP('1.98%')
  },
  lblHeading: {
    color: Global.color.white25080,
    fontSize: normalizeHeight(15),
    fontFamily: Global.font.font_family_fb,
    lineHeight: normalizeHeight(20),
    letterSpacing: 0.3,
    fontWeight: '500',
    marginBottom: normalizeHeight(5)
  },
  hotdealTextViewtitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 8,
    flex: 0.9
  },

  infotitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 8
  },
  hotdealTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginRight: 13,
    marginLeft: 25,
    flex: 0.9
  },
  infodescTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginHorizontal: 15
  },
  spendingBlock: {
    flexDirection: 'row',
    paddingTop: heightPercentageToDP('2.84%')
  },
  spendingflatlistBlock: {
    // Flex: 1,
    paddingTop: heightPercentageToDP('2.84%')
  },
  spendingflatlistInfo: {
    flex: 1
    // PaddingTop: heightPercentageToDP('2.84%'),
  },
  spendingBox: {
    width: widthPercentageToDP('33%'),
    height: heightPercentageToDP('9.21%'),
    backgroundColor: Global.color.oppwhite,
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: Global.color.oppwhite
  },
  spendingBoxHot: {

    /*
     * Width: widthPercentageToDP('33%'),
     * height: heightPercentageToDP('9.21%'),
     */
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Global.color.oppwhite,
    borderWidth: heightPercentageToDP('0.14%'),
    borderColor: Global.color.oppwhite,
    marginHorizontal: 5
  },
  spendingTitle: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('1.42%'),
    lineHeight: heightPercentageToDP('1.7%'),
    marginBottom: heightPercentageToDP('0.28%')
  },
  spendingAmount: {
    fontSize: heightPercentageToDP('1.7%'),
    lineHeight: heightPercentageToDP('1.98%'),
    letterSpacing: 0.1,
    color: '#0084E1',
    marginBottom: heightPercentageToDP('0.7%')
  },
  spendingDate: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('1.42%'),
    lineHeight: heightPercentageToDP('1.7%')
  },
  hoatdealText: {
    color: Global.color.primary,
    fontSize: heightPercentageToDP('2.42%'),
    lineHeight: heightPercentageToDP('1.7%')
  },
  storeImage: {
    height: heightPercentageToDP('5.66%'),
    resizeMode: 'contain',
    marginBottom: heightPercentageToDP('0.7%')
  },
 
 
 
  cardImageDefault: {
    opacity: 0.9,
    backgroundColor: Global.color.primary,
    borderRadius: 10
  },
  textContentDefault: {
    opacity: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: normalizeWidth(5),
    paddingVertical:normalizeHeight(5),
    backgroundColor: Global.color.primary
  },
 
  cardtitle1: {
    top: 73,
    alignSelf: 'center',
    fontSize: normalizeHeight(15),
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fb,
    lineHeight: normalizeHeight(18)
  },
  cardtitle2: {
    top: 86,
    alignSelf: 'center',
    fontSize: 13,
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fr,
    lineHeight: 16
  },
  cardtitleDefaultImg: {
    top: 66,
    alignSelf: 'center',
    fontSize: 15,
    color: Global.color.lightgrey,
    fontFamily: Global.font.font_family_fb,
    lineHeight: 16
  },
  gauge: {
    position: 'absolute',
    top: normalizeHeight(16),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  gaugeText: {
    color: Global.color.white,
    fontSize: normalizeHeight(12),
    fontFamily: Global.font.font_family_fb,
    fontWeight: '700'
  },
  gaugeTextPercentage: {
    color: Global.color.white,
    fontSize: normalizeHeight(12),
    fontFamily: Global.font.font_family_fb,
    fontWeight: '700',
    paddingLeft: normalizeWidth(1)
  },

  gauge1: {
    position: 'absolute',
    // width: 100,
    // height: 95,
    // height: 100,
    top: normalizeHeight(37),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  gaugeText1: {
    color: Global.color.white70,
    fontSize: normalizeHeight(15),
    // lineHeight: normalizeHeight(18),
    fontFamily: Global.font.font_family_fr
  },
  rightTextView: {
    position: 'absolute',
    left: 80,
    right: 5,
    top: 68,
    bottom: 5
  },
  leftTextView: {
    position: 'absolute',
    left: 75,
    right: 5,
    top: 70,
    bottom: 5
  },
  pieView: {
    width: normalizeWidth(150),
    alignItems: 'center',
    flex: 0.5,
  },
  pieMainView: {
    paddingBottom: normalizeHeight(20),
    paddingTop: normalizeHeight(10),
    justifyContent: 'space-between',
    backgroundColor: 'rgba(36, 58, 88, 0.25)'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Global.color.clearLightBlack2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    height: 250,
    opacity: 1,
    marginHorizontal: 47,
    backgroundColor: Global.color.white,
    borderRadius: 5
  },
  modelView: {
    // Width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height / 7,
    // Height: CARD_height,
    opacity: 1,
    marginHorizontal: 10,
    backgroundColor: Global.color.white,
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: Global.color.black,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 8
  },
  confirmMsg: {
    marginHorizontal: 15,
    marginTop: 8,
    marginBottom: 8,
    // AlignSelf: "stretch",
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmText: {
    // FontSize: 12,
    fontWeight: '400',
    fontFamily: Global.font.font_family_fr,
    color: Global.color.black
  },
  defaultMsgView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: heightPercentageToDP('1.31%'),
    left: 0,
    right: 0,
    paddingHorizontal: normalizeWidth(15)
  },
  defaultsMsgText: {
    textAlign: 'center',
    fontSize: normalizeHeight(15),
    fontWeight: '500',
    lineHeight: normalizeHeight(18),
    letterSpacing: normalizeWidth(0.3),
    fontFamily: Global.font.font_family_fb,
    color: Global.color.lightgrey
  },
  horizontalLineViewpopup: {
    marginTop: 5,
    borderBottomColor: Global.color.lightGrey2,
    borderBottomWidth: 2
  },
  actionButtonText: {
    fontSize: 11,
    fontFamily: Global.font.font_family_fr,
    color: Global.color.black
  },
  verticleLinepopup: {
    height: 44,
    width: 2,
    backgroundColor: Global.color.lightGrey2
  },
  addtoBtn: {
    marginVertical: 10,

    /*
     * Height: 20,
     * width: '44%',
     */
    backgroundColor: Global.color.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartBuyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  mainView: {
    backgroundColor: Global.color.primary,
    alignItems: 'center'
  },
  card1: {
    marginVertical: 10,
    backgroundColor: Global.color.white,
    borderRadius: 10,
    shadowColor: Global.color.black,
    shadowOffset: {
      width: 3,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  subtitle: {
    fontFamily: Global.font.font_family_fb,
    fontSize: normalizeHeight(14),
    color: Global.color.lightgrey,
    fontWeight: '600'
    // marginLeft: normalizeWidth(15),
    // paddingTop: normalizeHeight(10),
    // paddingBottom: normalizeHeight(5)
  },
  imgBackground: {
    // width: normalizeWidth(140),
    // height: normalizeHeight(161),
    minWidth: normalizeWidth(140),
    marginRight: normalizeHeight(10),
    alignItems: 'center',
    paddingHorizontal: normalizeWidth(17)
  },
  cardContainer: {
   paddingHorizontal: normalizeWidth(10),
     marginVertical: normalizeHeight(16),
  },
  bbpsStrip: {
    height: normalizeHeight(28),
    width: '100%',
    backgroundColor: Global.color.verydarkblue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalizeHeight(16)
  },
  stripText: {
    fontFamily: Global.font.font_family_fb,
    fontWeight: '700',
    fontSize: normalizeHeight(14),
    color: Global.color.white,
    letterSpacing: 0.3
  },
  snap: {
    flexDirection: 'row',
    marginHorizontal: normalizeWidth(16),
    justifyContent: 'space-between',
    marginTop: normalizeHeight(24)
  },
  snapView: {
    height: normalizeHeight(64),
    width: normalizeWidth(164),
    backgroundColor: Global.color.navyblueColor,
    borderRadius: normalizeHeight(10),
    paddingHorizontal: normalizeWidth(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  pieTitle: {
    fontFamily: Global.font.font_family_fb,
    fontWeight: '600',
    fontSize: normalizeHeight(16),
    color: Global.color.newWhite70,
  },
  shimmer: {
    height: normalizeHeight(64),
    width: normalizeWidth(164),
    borderRadius: normalizeHeight(10),
  },
  textStyle: {
    fontFamily: Global.font.font_family_fr,
    fontSize: normalizeHeight(16),
    fontWeight: '400',
    minHeight: normalizeHeight(50),
    minWidth: normalizeWidth(160),
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalizeWidth(16),
},

browsertext:
{
  fontFamily:Global.font.bold,
  fontWeight:'700',
  marginLeft:normalizeWidth(5),
  fontSize: normalizeHeight(15),
  color: Global.color.white,
  lineHeight: normalizeHeight(18),
},

headingViewStyle: {
  fontFamily: Global.font.TextMedium,
  fontSize: normalizeHeight(14),
  lineHeight:normalizeHeight(18),
  fontWeight: '600',
  color:Global.color.drkgrey,
},

headingdesViewStyle: {
  fontFamily: Global.font.semiBold,
  fontSize: normalizeHeight(24),
  lineHeight:normalizeHeight(28),
  fontWeight: '600',
  color:Global.color.blackc,
},
imageStyle: {
    marginLeft: normalizeWidth(12),
    height: normalizeHeight(20),
    width: normalizeHeight(20),
    resizeMode: 'contain',
},
containerSearch: {
  backgroundColor: Global.color.white,
  borderWidth: normalizeWidth(1),
  borderColor: Global.color.white,
  borderRadius: normalizeHeight(50),
  flexDirection: 'row',
  marginVertical: normalizeHeight(16),
  alignItems: 'center'
},
  line: { height: normalizeHeight(1), backgroundColor: Global.color.newWhite10, borderRadius: normalizeHeight(10) },

  card: {
    marginVertical: normalizeHeight(10),
    backgroundColor: Global.color.white,
    borderRadius: 8,
    shadowColor: Global.color.darkGrey,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardlead: {
    marginVertical: normalizeHeight(10),
    backgroundColor: Global.color.white,
    borderRadius: 0,
    shadowColor: Global.color.darkGrey,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 0,
  },
  cardImage: {
    backgroundColor: Global.color.white25,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  popularbannerContainer: {
    position: 'absolute',
    top: 8,
    left: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagebannerContainer: {
    position: 'absolute',
    top: 9,
    right: 6,
    alignItems: 'center',
    justifyContent: 'center',
    //width: 20,
    //height: 20,
    //borderRadius: 20 / 2,
    //backgroundColor: GlobalStyles.colorCodes.white,
  },
  wishlistbannerImage: {
    width: normalizeWidth(20),
    height: normalizeHeight(20),
  },
  cartImage: {
    width: normalizeWidth(26),
    height: normalizeHeight(26),
  },
  popularbannerImage: {
    width: normalizeWidth(80),
    height: normalizeHeight(24),
  },
  bannerboxContainer: {
    position: 'absolute',
    top: 28,
    right: 13,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Global.color.grey,
  },
  wishlistbannerText: {
    fontSize: normalizeHeight(9),
    fontWeight: 'bold',
    padding: 5,
    paddingLeft: normalizeWidth(8),
    paddingRight: normalizeWidth(8),
    paddingTop: normalizeHeight(3),
    paddingBottom:normalizeHeight(3),
    color: Global.color.black,
  },
  productTypeStyle: {
    marginHorizontal: 8,
    alignSelf: 'flex-start',
    marginTop: 12,
    borderRadius: 2,
    backgroundColor: Global.color.taelBlue,
  },
  productPopularityText: {
    position: 'absolute',
    top: 2,
    left: 6,
    fontSize: normalizeHeight(12),
    fontFamily: Global.font.font_family_fl,
    color: Global.color.white,
  },
  textContent: {
    marginTop: normalizeHeight(8),
    marginHorizontal: normalizeWidth(8),
  },
  textPriceContent:
  {
    //marginTop: 5,
    marginHorizontal: normalizeWidth(8),
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalizeHeight(9),
  },
  priceContent: {
    //marginTop:normalizeHeight(5),
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal:normalizeWidth(8),
    //marginBottom: 11,
  },
  pricemaxContent: {
    //marginTop:5,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal:normalizeWidth(8),
    marginBottom: normalizeHeight(11),
  },
  cardtitle: {
   // alignSelf: 'center',
   fontSize: normalizeHeight(12),
   fontFamily: Global.font.TextMedium,
   fontWeight:'600',
   color: Global.color.blackCC,
   lineHeight: normalizeHeight(16),
  },
  brandtitle: {
    // alignSelf: 'center',
    fontSize: normalizeHeight(11),
     fontFamily: Global.font.font_family_fl,
     fontWeight:'600',
     color: Global.color.blackCC,
     lineHeight: normalizeHeight(15),
   },
  cardskutitle:
  {
    fontFamily: Global.font.semiBold,
    fontWeight:'700',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(12),
    color: Global.color.white,
    lineHeight: normalizeHeight(15),
  },
  allleadtitle:
  {
    fontFamily: Global.font.TextMedium,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(14),
    color: Global.color.white,
    lineHeight: normalizeHeight(17),
  },
  cardsName:
  {
    fontFamily: Global.font.TextMedium,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(13),
    color: Global.color.white,
    lineHeight: normalizeHeight(16),
  },
  showName:
  {
    fontFamily: Global.font.TextMedium,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(14),
    color: Global.color.white,
    lineHeight: normalizeHeight(17),
  },
  leadName:
  {
    fontFamily: Global.font.semiBold,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(14),
    color: Global.color.black3color,
    lineHeight: normalizeHeight(17),
  },
  leadtitleName:
  {
    fontFamily: Global.font.TextMedium,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(12),
    color: Global.color.darkgrey45,
    lineHeight: normalizeHeight(15),
  },
  radioName:
  {
    fontFamily: Global.font.semiBold,
    fontWeight:'500',
    alignSelf: 'flex-start',
    fontSize: normalizeHeight(14),
    color: Global.color.dune,
    lineHeight: normalizeHeight(17),
  },
  filtertitle:
  {
    marginLeft:normalizeWidth(5),
    fontSize: normalizeHeight(14),
    color: Global.color.white,
    lineHeight: normalizeHeight(17),
  },
  setmarginRating: {
    marginLeft: normalizeHeight(4),
  },
  cardPrice: {
    fontSize: normalizeHeight(15),
    lineHeight:normalizeHeight(18),
    fontWeight: '600',
    fontFamily: Global.font.font_family_fb,
    color: Global.color.primary,
  },
  gstprice: {
    fontSize: normalizeHeight(9),
    lineHeight:normalizeHeight(13),
    fontWeight: '500',
    fontFamily: Global.font.font_family_fb,
    color: Global.color.black,
  },
  cardMaxPrice: {
    fontSize: normalizeHeight(14),
    fontWeight:normalizeHeight(17),
    // marginLeft: 6,
    fontWeight:'bold',
     fontFamily: Global.font.font_family_fb,
     color: Global.color.grey2,
     textDecorationLine: 'line-through',
     textDecorationStyle: 'solid',
     textDecorationColor: Global.color.grey2,
  },

  cardMaxPricedetails: {
    fontSize: normalizeHeight(15),
    fontWeight:normalizeHeight(19),
    // marginLeft: 6,
    fontWeight:'bold',
     fontFamily: Global.font.font_family_fb,
     color: Global.color.grey2,
     textDecorationLine: 'line-through',
     textDecorationStyle: 'solid',
     textDecorationColor: Global.color.grey2,
  },

  cardPriceDetails: {
    fontSize: normalizeHeight(18),
    lineHeight:normalizeHeight(21),
    fontWeight: '600',
    fontFamily: Global.font.font_family_fb,
    color: Global.color.primary,
  },

  cardPercentageDetails: {
    fontSize: normalizeHeight(15),
    lineHeight:normalizeHeight(18),
    fontWeight: '600',
    fontFamily: Global.font.font_family_fb,
    color: Global.color.primary,
  },

   containerBox: {
          backgroundColor: Global.color.transparent,
          borderWidth: normalizeWidth(1),
          borderColor: Global.color.borderColor2,
          borderRadius: normalizeHeight(20),
          flexDirection: 'row',
          marginVertical: normalizeHeight(10),
          alignItems: 'center'
      },
      textStyleBox: {
          fontFamily: Global.font.font_family_fr,
          fontSize: normalizeHeight(16),
          fontWeight: '400',
          minHeight: normalizeHeight(35),
          minWidth: normalizeWidth(180),
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: normalizeWidth(5),
      },
      imageStyleBox: {
          marginLeft: normalizeWidth(5),
          height: normalizeHeight(24),
          width: normalizeHeight(24),
          resizeMode: 'contain',
      },
});

export default DashboardStyles;
