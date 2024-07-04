import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
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
    gap: 20,
  },

  title: {
    marginTop: heightPixel(100),
    paddingBottom: heightPixel(10),
    fontSize: 20,
    color: colors.lightBlack,
    fontFamily: 'Poppins-Bold',
  },
  forgetcontainer: {
    alignItems: 'flex-end',
  },
  forgetText: {
    color: colors.lightBackground,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  pv30: {
    paddingVertical: heightPixel(60),
  },
  texthead: {
    alignItems: 'center',
    flex: 1,
  },
  dontHaveText: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -100,
  },
  spanedit: {
    color: colors.lightBackground,
    textDecorationLine: 'underline',
  },
  ortext: {
    color: colors.lightBlack,
    fontSize: 20,
    lineHeight: 1,
    paddingTop: heightPixel(45),
    marginTop: 8,
  },
  rowEvenly: {
    flexDirection: 'row',
    marginBottom: 130,
    justifyContent: 'space-evenly',
    marginHorizontal: 80,
  },
  socialView: {
    width: widthPixel(50),
    height: heightPixel(50),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 18,
    elevation: 6,
  },
  socialIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});
