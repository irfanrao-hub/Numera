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
    // marginVertical: -10,
  },
  profilemain:{
flexDirection:'row',
// justifyContent:'center'
  },
  editprofile: {
    width: widthPixel(20),
    height: heightPixel(20),
    position:'absolute',
    
  },
  edit: {
    width: widthPixel(30),
    height: heightPixel(30),
    backgroundColor: colors.lightBackground,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    bottom: 10,
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
  },
});
