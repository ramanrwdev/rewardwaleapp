import { StyleSheet } from 'react-native';
import Global from '../global';
import { widthPercentageToDP, heightPercentageToDP, normalizeHeight, normalizeWidth } from '../components/ResponsiveScreen';

const CameraStyles = StyleSheet.create({
  multiplecontainer: {

    /*
     * Position: 'absolute',
     * width: '100%',
     */
    height: '100%',

    /*
     * PaddingLeft: 15,
     * paddingRight: 15,
     * left: 0,
     * right: 0,
     * top: 0,
     */
    backgroundColor: Global.color.oppwhite

    /*
     * Flex:1,
     * flexDirection:'row',
     */
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Global.color.primary
  },
  topheaderDesign: {
    color: Global.color.white,
    top: normalizeHeight(25),
    marginLeft: normalizeWidth(95)
  },
  menulisticon: {
    height: normalizeHeight(40),
    width: normalizeWidth(30),
    marginLeft: normalizeWidth(10),
    marginTop: normalizeHeight(15)
    // height: 40,
    // width: 30,
    // marginLeft: 10,
    // marginTop: 15
  },
  calendericon: {
    height: normalizeHeight(20),
    width: normalizeHeight(20),
    marginLeft: normalizeWidth(60),
    marginTop: normalizeHeight(25)
  },
  iconbellicon: {
    height: normalizeHeight(20),
    width: normalizeHeight(20),
    marginLeft: normalizeWidth(30),
    marginTop: normalizeHeight(25)
  },
  whitefont: {
    fontSize: heightPercentageToDP('2.27%'),
    color: Global.color.white,
    fontFamily: Global.font.font_family_fb,
    lineHeight: heightPercentageToDP('2.55%'),
    letterSpacing: 0.1
  },
  whitefontopacity: {
    fontSize: heightPercentageToDP('2.27%'),
    color: Global.color.white,
    fontFamily: Global.font.font_family_fb,
    lineHeight: heightPercentageToDP('2.55%'),
    opacity: 0.5,
    letterSpacing: 0.1
  },
  cropimagebottomsingle: {

    /*
     * Flex: 0,
     * flexDirection: 'row',
     * justifyContent: 'space-between',
     */
    marginTop: normalizeHeight(15),
    paddingBottom: normalizeHeight(50),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Global.color.primary,
    height: Global.structure.screenHeight / 5
  },
  cropimagebottommultiple: {

    /*
     *  Flex: 0,
     *  flexDirection: 'row',
     *  justifyContent: 'space-between',
     * bottom:50,
     */
    height: normalizeHeight(135),
    paddingBottom: normalizeHeight(50),
    backgroundColor: Global.color.primary,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  closeiconborder: {
    backgroundColor: Global.color.white,
    borderRadius: heightPercentageToDP('2.12%'),
    padding: heightPercentageToDP('0.42%')
  },
  closeiconcontainer: {
    flex: 0,
    alignItems: 'flex-end',
    marginTop: heightPercentageToDP('2.0%'),
    padding: heightPercentageToDP('0.71%')
  },
  multipagecount: {
    position: 'absolute',
    bottom: normalizeHeight(10),
    right: 10,
    padding: normalizeHeight(5),
    borderWidth: 1,
    borderColor: Global.color.primary,
    backgroundColor: Global.color.white
  },
  multipagecounttext: {
    fontSize: heightPercentageToDP('2.27%'),
    color: Global.color.white,
    lineHeight: heightPercentageToDP('2.55%'),
    fontFamily: Global.font.font_family_fr
  },
  multipagecountcont: {
    display: 'flex',
    flexDirection: 'row'
  },
  gallerystyle: {
    flex: 0,
    backgroundColor: Global.color.white,
    height: heightPercentageToDP('5.67%'),
    width: heightPercentageToDP('5.67%'),
    borderRadius: heightPercentageToDP('4.25%'),
    padding: heightPercentageToDP('1.42%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: heightPercentageToDP('2.83%')
  },
  disablegallerystyle: {
    flex: 0,
    backgroundColor: Global.color.whiteopacity,
    height: heightPercentageToDP('5.67%'),
    width: heightPercentageToDP('5.67%'),
    borderRadius: heightPercentageToDP('4.25%'),
    padding: heightPercentageToDP('1.42%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: heightPercentageToDP('2.83%')

  },

  manualstyle: {
    flex: 0,
    backgroundColor: Global.color.white,
    height: heightPercentageToDP('5.67%'),
    width: heightPercentageToDP('5.67%'),
    borderRadius: heightPercentageToDP('4.25%'),
    padding: heightPercentageToDP('1.42%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: heightPercentageToDP('2.83%')
  },
  multipagecontainer: { flex: 0,
padding: heightPercentageToDP('0.71%'),
alignSelf: 'flex-end' },
  cameraclickcontainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around'
  },
  singlepagecontainer: { flex: 0,
padding: heightPercentageToDP('0.71%'),
alignSelf: 'flex-start' },
  midborder: {
    flex: 0,
    borderLeftWidth: 2,
    borderLeftColor: Global.color.whiteopacity
  },
  singlemultiplecont: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    paddingTop: heightPercentageToDP('1.42%'),
    borderBottomWidth: 1,
    borderBottomColor: Global.color.whiteopacity,
    paddingBottom: heightPercentageToDP('1.42%')
  },

  multiplemultiplecont: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    paddingTop: heightPercentageToDP('1.42%'),
    paddingBottom: heightPercentageToDP('1.42%')
  },

  snapbuttoncont: {
    flex: 0,
    backgroundColor: Global.color.primary,
    height: heightPercentageToDP('7.08%'),
    width: heightPercentageToDP('7.08%'),
    borderRadius: heightPercentageToDP('5.67%'),
    padding: heightPercentageToDP('1.42%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: heightPercentageToDP('2.83%'),
    borderWidth: 2,
    borderColor: Global.color.white
  },
  snapbuttoninside: {
    width: heightPercentageToDP('5.67%'),
    height: heightPercentageToDP('5.67%'),
    margin: heightPercentageToDP('0.71%'),
    backgroundColor: Global.color.white,
    borderRadius: heightPercentageToDP('4.25%')
  },
  changebuttontext: {
    color: Global.color.white,
    fontSize: heightPercentageToDP('2.27%'),
    fontFamily: Global.font.font_family_fr,
    letterSpacing: 0.1
  },
  nextbuttoncont: {
    flexDirection: 'row',
    alignItems: 'center',
    // MarginRight: 15,
    justifyContent: 'center',
    alignSelf: 'center'
    // Top: 20,
  },

  nextcambuttoncont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: widthPercentageToDP('4%'),
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: heightPercentageToDP('4.25%')
  },

  backbutton: {
    alignItems: 'center',
    right: 0
  },
  forwardicon: { alignItems: 'center',
left: 0 },
  prevbutoncont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    top: 20
  },

  prevcambutoncont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentageToDP('4%'),
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: heightPercentageToDP('4.25%')
  },

  cropimagecont: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'

    /*
     * JustifyContent: 'center',
     * alignContent: 'center',
     * alignItems: 'center',
     * alignSelf: 'center',
     * resizeMode: 'contain',
     * flex: 1
     *  position: 'absolute',
     *   top: 0,
     *   left: 0,
     *   bottom: 0,
     *   right: 0,
     */
  },
  closecropimage: {
    paddingLeft: widthPercentageToDP('2.66%'),
    paddingRight: widthPercentageToDP('2.66%'),
    paddingBottom: heightPercentageToDP('1.42%')
  },
  modalmaincont: {
    backgroundColor: Global.color.oppwhite,
    borderRadius: 5,
    elevation: 4
  },
  modalmaintext: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: normalizeHeight(56),
    padding: normalizeHeight(10)
  },
  titlefont: {
    fontFamily: Global.font.font_family_fr,
    fontSize: normalizeHeight(18),
    lineHeight: normalizeHeight(22),
    letterSpacing: 0.1,
    color: Global.color.darkgrey
  },
  discardfont: {
    fontFamily: Global.font.font_family_fr,
    fontSize: normalizeHeight(12),
    lineHeight: normalizeHeight(18),
    letterSpacing: 0.1,
    color: Global.color.darkgrey,
    textAlign: 'center'
  },
  modalbuttoncont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: normalizeWidth(1),
    borderTopColor: Global.color.primaryborder
  },
  modalCancelfont: {
    fontFamily: Global.font.font_family_fb,
    fontSize: normalizeHeight(14),
    lineHeight: normalizeHeight(18),
    letterSpacing: 0.1,
    color: Global.color.boldgrey
  },
  btndiscardfont: {
    fontFamily: Global.font.font_family_fb,
    fontSize: normalizeHeight(14),
    lineHeight: normalizeHeight(18),
    letterSpacing: 0.1,
    color: Global.color.red
  },
  centerborder: {
    borderRightWidth: 1,
    borderRightColor: Global.color.primaryborder
  },
  buttonspacing: { flex: 5,
alignItems: 'center',
padding: normalizeHeight(15) },
  multiplebuttonspacing: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  singlebuttonspacing: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: normalizeHeight(30)
  },
  // Crop image styles
  cropimageicon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // PaddingTop: 15,
    marginTop: heightPercentageToDP('2.0%')

    /*
     * Height:heightPercentageToDP('7.08%'),
     *  paddingBottom: 15,
     *  height:50,
     * backgroundColor:'red'
     */
  },
  nextprecbtncont: {
    height: heightPercentageToDP('7.08%'),
    backgroundColor: Global.color.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: heightPercentageToDP('0.71%'),
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  imagecount: {
    alignItems: 'center',
    paddingTop: heightPercentageToDP('1.42%'),
    color: Global.color.white
  },
  displayimagecont: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('94.9%'),
    paddingBottom: 100,
    // MarginBottom: heightPercentageToDP('2.12%'),
    justifyContent: 'center',
    alignItems: 'center'

  },
  bottomimagecont: {
    height: heightPercentageToDP('14.16%'),
    borderTopWidth: 1,
    borderTopColor: Global.color.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  snapbuttonview: {
    height: heightPercentageToDP('14.16%'),
    borderTopWidth: 2,
    borderTopColor: Global.color.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Global.color.lightgrey
  },
  snapbtncont: {
    // backgroundColor: Global.color.white,
    height: heightPercentageToDP('8.22%'),
    width: heightPercentageToDP('8.22%'),
    borderRadius: heightPercentageToDP('4.92%'),
    padding: heightPercentageToDP('1.42%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: heightPercentageToDP('2.46%'),
    borderWidth: 2,
    borderColor: Global.color.primary

  },
  snapbtninside: {
    width: heightPercentageToDP('6.8%'),
    height: heightPercentageToDP('6.8%'),
    margin: heightPercentageToDP('0.71%'),
    backgroundColor: Global.color.primary,
    borderRadius: heightPercentageToDP('3.69%')
  },
  cameracont: {
    width: '100%',
    height: '100%',
  },
  pdfmainview: {
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'flex-end',
    margin: heightPercentageToDP('2.46%'),
    flex: 3
  }
});

export default CameraStyles;
