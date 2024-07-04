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
  },
  textstyle: {
    color: colors.black,
    paddingLeft: 20,
  },
  ratecontainer: {
    marginVertical: 20,
    justifyContent: 'center',
  },

  ratetextstyle: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    paddingLeft: 20,
  },
  starcontainer: {
    width: widthPixel(390),
    height: heightPixel(60),
    backgroundColor: colors.background,
    elevation: 3,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 60,
  },
  staricon: {
    width: widthPixel(24),
    height: heightPixel(24),
  },
  reviewcontainer: {
    width: widthPixel(390),
    height: heightPixel(271),
    marginVertical: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  reviewtext: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
  },
  reviewtextcontainer: {
    width: widthPixel(390),
    height: heightPixel(239),
    backgroundColor: colors.lightgrey,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  pv30: {
    paddingVertical: heightPixel(130),
  },
});
