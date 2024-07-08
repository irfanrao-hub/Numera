import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
  wp,
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
  head: {
    marginTop: -40,
  },
  box: {
    width: widthPixel(390),
    height: heightPixel(170),
    backgroundColor: colors.background,
    elevation: 2,
    padding: 15,
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
    paddingLeft: 90,
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
    marginTop: 50,
  },
  txtt: {
    fontFamily: fontFamily.appTextRegular,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ptxt: {
    color: colors.blacklight,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 2,
    paddingTop: 20,
  },

  leftt: {
    fontSize: responsiveFontSize(2.3),
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBackground,
  },
  ptxtt: {
    color: colors.blacklight,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 10,
    paddingTop: 10,
    borderRadius: 8,
    borderColor: colors.grey,
    backgroundColor:colors.background,
    marginTop: 8,
    elevation:3,
  },
  ansbox: {
    width: widthPixel(390),
    height: heightPixel(190),
    backgroundColor: colors.background,
    marginTop: -20,
  },
  anstxt: {
    color: colors.black,
    fontSize: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    padding: 15,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    backgroundColor: colors.lightpink,
    marginTop: 15,
  },
  solbox: {
    width: widthPixel(390),
    height: heightPixel(190),
    backgroundColor: colors.background,
    marginTop: 30,
  },

  pv30: {
    paddingVertical: heightPixel(200),
    marginTop: -180,
  },
});
