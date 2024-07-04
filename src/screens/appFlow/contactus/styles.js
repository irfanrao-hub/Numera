import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fg1: {
    flexGrow: 1,
  },
  wrapper: {
    width: widthPixel(260),
    height: heightPixel(81),
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  text: {
    width: widthPixel(260),
    height: heightPixel(62),
    backgroundColor: colors.lightBackground,
    borderRadius: 8,
    padding: 9,
    elevation: 3,
  },
  textstyle: {
    color: colors.background,
    textAlign: 'auto',
    paddingLeft: 8,
  },
  timestyle: {
    color: colors.blacklight,
    alignSelf: 'flex-end',
    paddingHorizontal: 9,
  },
  leftcontainer: {
    width: widthPixel(190),
    height: heightPixel(81),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 12,
    marginVertical: 15,
  },
  lefttext: {
    width: widthPixel(190),
    height: heightPixel(62),
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 9,
    elevation: 3,
  },
  lefttextstyle: {
    color: colors.lightBackground,
    textAlign: 'auto',
    paddingLeft: 8,
  },
  lefttimestyle: {
    color: colors.blacklight,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  },
  typecontainer: {
    width: widthPixel(395),
    height: heightPixel(60),
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    gap: 15,
  },
  sendcontainer: {
    backgroundColor: colors.lightBackground,
    width: widthPixel(60),
    height: heightPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  sendicon: {
    width: widthPixel(26),
    height: heightPixel(26),
  },
});
