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
  },
  head: {
    alignSelf: 'center',
    marginVertical: -10,
  },
  nametext: {
    color: colors.lightBackground,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.2),
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputmain: {
    padding: 15,
    marginVertical: 15,
    gap: 20,
  },
  pv30: {
    paddingVertical: heightPixel(200),
    marginTop: -70,
  },
});
