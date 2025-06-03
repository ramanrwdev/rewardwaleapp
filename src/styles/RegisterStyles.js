import { StyleSheet } from 'react-native';
import { normalizeWidth, normalizeHeight } from '../components/ResponsiveScreen';
import Global from '../global';

const RegisterStyles = StyleSheet.create({
  flexD: {
    flexDirection: 'row'
  },
  registercontainer:
  {
    height: normalizeWidth(140),
    width: normalizeWidth(140),
    borderRadius: normalizeWidth(70),
    backgroundColor: Global.color.lightBlue,
    marginTop: normalizeHeight(30),
    marginBottom: normalizeHeight(10),
    justifyContent: 'center',

  },
  icon: {
    marginRight: Global.structure.screenWidth * 0.015,
    position: 'absolute',
    right: Global.structure.screenWidth * 0,
    bottom: 10
  },
  image: {
    height: normalizeWidth(140),
    width: normalizeWidth(140),
    borderRadius: normalizeWidth(70),
  },
  upldtext: {
    color: Global.color.white50,
    fontSize: normalizeHeight(13),
    lineHeight: normalizeHeight(16),
    fontWeight: '400',
    fontFamily: Global.font.font_family_fr,
    marginBottom: normalizeHeight(50),
    opacity: 0.5
  },
  errtxt: {
    color: Global.color.errorRed,
    textAlign: 'left',
    fontFamily: Global.font.font_family_fr,
    fontSize: normalizeHeight(13),
    lineHeight: normalizeHeight(18),
    marginHorizontal: normalizeWidth(15),
    marginBottom: normalizeHeight(5),
  }
});

export default RegisterStyles;
