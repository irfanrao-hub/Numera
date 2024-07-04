import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../../services';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width:widthPixel(430),
    height:heightPixel(932),
  },
  fg1:{
    flexGrow:1,

  },
  

  wrapper: {
    paddingHorizontal: widthPixel(20),
    backgroundColor:colors.background,
  },
 

mainlogo:{
  flex:1,
width:widthPixel(116),
  height:heightPixel(110),
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:110,
  marginVertical:180,

  
  
  
},
  
  rowEvenly: {
    
    width:'100%',
    height: heightPixel(416),
    flexDirection: "column",
    alignItems:'flex-end',
    justifyContent:'space-evenly',
    marginTop:-430,
 
  },
  icons:{
    width: widthPixel(170),
    height: widthPixel(161),
    resizeMode: 'contain',
  },
socialView: {
  width: widthPixel(60),
  height: heightPixel(60),
  backgroundColor: colors.background,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  borderColor:colors.lightBackground,
  borderWidth:1,
  
  
  // elevation: 6,
},
socialIcon: {
  width: widthPixel(40),
  height: widthPixel(40),
  resizeMode: 'contain',
},




});
