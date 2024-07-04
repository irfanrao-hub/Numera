import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../../services';
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
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
    color: colors.blacklight,
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
  pv30: {
    paddingVertical: heightPixel(200),
    marginTop: -150,
  },
  otpContainerTopView: {
    height: heightPixel(100),
  },
  otpContainer: {
    width: '100%',
  },
  otp: {
    width: widthPixel(60),
    height: heightPixel(60),
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    lineHeight: responsiveFontSize(3),
    paddingBottom: heightPixel(10),
    borderRadius: widthPixel(8),
    color: colors.heading2,
    backgroundColor: colors.lightgrey,
  },
  texthead: {
    alignItems: 'center',
    flex: 1,
  },
  dontHaveText: {
    color: colors.heading2,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -5,
  },
  spanedit: {
    color: colors.lightBackground,
    textDecorationLine: 'underline',
  },
});
