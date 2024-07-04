import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fg1: {
    flexGrow: 1,
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
    backgroundColor: colors.background,
  },
  etext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.3),
    color: colors.black,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: -10,
  },
  title: {
    marginTop: heightPixel(100),
    paddingBottom: heightPixel(10),
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextBold,
  },
  box: {
    width: widthPixel(390),
    height: heightPixel(225),
    backgroundColor: colors.background,
    elevation: 3,
    padding: 15,
    marginVertical: 20,
    borderRadius: 8,
  },
  txt: {
    fontFamily: fontFamily.appTextRegular,

    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    fontSize: responsiveFontSize(2),
    color: colors.lightBackground,
    textDecorationLine: 'underline',
  },
  spanleft: {
    color: colors.black,
  },
  spacer: {
    flex: 1,
  },
  right: {
    fontSize: responsiveFontSize(1.9),
    paddingLeft: 95,
    color: colors.textRed,
    textDecorationLine: 'underline',
  },
  spanright: {
    color: colors.black,
  },
  ptxt: {
    color: colors.blacklight,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 2,
    paddingTop: 20,
  },
  pv30: {
    paddingVertical: heightPixel(200),
    marginTop: -180,
  },
});
