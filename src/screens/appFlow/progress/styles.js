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
  mainhead: {
    flexDirection: 'row',
    marginVertical: -20,
  },
  head: {
    flexDirection: 'row',
  },
  headtext: {
    marginHorizontal: 80,
    marginLeft: -320,
  },
  numtxt: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3.1),
    marginLeft: -320,
    marginTop: -110,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: widthPixel(20),
    paddingBottom: heightPixel(20),
    backgroundColor: colors.background,
  },
  etext: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.2),
    color: colors.lightBackground,
    paddingLeft: 70,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalview: {
    backgroundColor: colors.transperant,
    width: widthPixel(430),
    height: heightPixel(932),
    borderRadius: 8,
    padding: 20,
  },
  calendermain: {
    flex: 1,
    justifyContent: 'center',
    width: widthPixel(388),
    height: heightPixel(500),
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
  rowEvenly: {
    width: widthPixel(390),
    height: heightPixel(387),
    backgroundColor: colors.background,
    marginTop: 30,
    borderRadius: 4,
    elevation: 5,
  },
  streak: {
    width: widthPixel(390),
    height: heightPixel(110),
    backgroundColor: colors.background,
    marginTop: 25,
    borderRadius: 4,
    elevation: 5,
  },
  etxt: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.6),
    color: colors.lightBackground,
    paddingLeft: 130,
    marginTop: -30,
  },
  probtxt: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.2),
    color: colors.black,
    paddingLeft: 60,
  },
  fire: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  row: {
    paddingLeft: 90,
    marginTop: 15,
  },
  chartContainer: {
    paddingLeft: 50,
    marginTop: -60,
  },
  xAxisLabelTextStyle:{
    color:colors.grey,
    fontSize:15,
  },
  yAxisTextStyle:{
    color:colors.grey,
    fontSize:15,
  },

});
