import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel} from '../../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background,
  },
  alertcontainer: {
    flex: 1,
  },
  wrapper: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
  },
  head: {
    marginVertical: -30,
    marginRight: 45,
  },
  headtext: {
    marginRight: 30,
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    justifyContent: 'space-evenly',
        // gap:15,

  },

  rowEvenly: {
    width: widthPixel(190),
    height: heightPixel(179),
    backgroundColor: colors.background,
    marginTop: 10,
    // gap:15,
    borderRadius: 8,
    elevation: 4,
  },
  socialView: {
    backgroundColor: colors.background,
    resizeMode: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialIcon: {
    width: widthPixel(53),
    height: widthPixel(80),
    marginBottom: 8,
  },
  modetitle: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.4),
    color: colors.black,
  },
  pie: {
    resizeMode: 'contain',
    width: widthPixel(14),
    height: heightPixel(14),
    alignItems: 'center',
  },
  cardshead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 90,
  },
  rectangleview: {
    width: 100,
    height: 90,
    borderRadius: 8,
    
  },
  cosmaticmain: {
    width: widthPixel(190),
    height: heightPixel(179),
    // marginTop:-5,
    marginVertical: 5,
    borderRadius: 4,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    backgroundColor: colors.background,
  },
  textcosm: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2.2),
    color: colors.black,
  },
  textpie: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  tiltetext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.background,
  },
  pi: {
    resizeMode: 'contain',
    width: widthPixel(14),
    height: heightPixel(14),
    alignItems: 'center',
  },
});
