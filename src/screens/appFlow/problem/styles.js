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
    marginVertical: -30,
  },
  etext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.9),
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
  rowEvenly: {
    width: '100%',
    height: heightPixel(116),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  socialView: {
    width: widthPixel(70),
    height: heightPixel(70),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: colors.lightBackground,
    borderWidth: 1,
  },
  socialIcon: {
    width: widthPixel(40),
    height: widthPixel(40),
    resizeMode: 'contain',
  },
  modetitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.2),
    color: colors.black,
    paddingTop: 8,
  },
  ptext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
    paddingTop: 30,
  },
  box: {
    width: widthPixel(390),
    height: heightPixel(190),
    backgroundColor: colors.background,
    elevation: 2,
    padding: 15,
    marginTop: 10,
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
  boxx: {
    width: widthPixel(390),
    height: heightPixel(190),
    backgroundColor: colors.background,
    padding: 15,
    marginTop: 10,
  },
  txtt: {
    fontFamily: fontFamily.appTextRegular,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    paddingBottom: 15,
  },
  ptxt: {
    color: colors.blacklight,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 2,
    paddingTop: 20,
  },
  rightt: {
    fontSize: responsiveFontSize(1.9),
    paddingLeft: 120,
    color: colors.textRed,
  },
  leftt: {
    fontSize: responsiveFontSize(2.3),
    color: colors.lightBackground,
  },
  ptxtt: {
    color: colors.blacklight,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    backgroundColor: colors.lightgrey,
  },

  pv30: {
    paddingVertical: heightPixel(200),
    marginTop: -180,
  },
});
