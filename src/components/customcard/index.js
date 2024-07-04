import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import {
  colors,
  items,
  fontFamily,
  heightPixel,
  widthPixel,
  appIcons,
  routes,
} from '../../services';

export const CustomCard = ({
  
  leftIcon,
 title,
 navigation,
  inputstyle,
  rightarrow,
  onPress,
  
}) => {
  return (
  
      <TouchableOpacity onPress={onPress} style={[styles.formInput]}>
        <View style={styles.input}>
        <Image source={leftIcon} style={styles.leftIcon}  />
       
      <Text style={styles.inputTextStyle}>{title}</Text>
      </View>
        
            {rightarrow && (
          <TouchableOpacity onPress={onPress} >
            <Image style={styles.rightarrow} source={appIcons.arrowright} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    
   
  );
};

const styles = StyleSheet.create({
  dropDownText: {
    fontSize: 30,
    color: colors.grey,
    paddingBottom: heightPixel(20),
  },
  dropDownView: {
    position: 'absolute',
    bottom: -heightPixel(85),
    zIndex: 10,
    width: '100%',
    maxHeight: heightPixel(100),
    paddingVertical: heightPixel(10),
    marginTop: heightPixel(10),
    backgroundColor: '#F5F5F5',
    paddingHorizontal: widthPixel(16),
    borderRadius: widthPixel(8),
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  leftIcon: {
    width: widthPixel(28),
    height: widthPixel(28),
    marginRight: widthPixel(12),
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
    tintColor: colors.showcolor,
  },

  inputTextStyle: {
    marginTop: heightPixel(6),
    fontSize: 18,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
  },
  icon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  },
  formInput: {
    paddingBottom: heightPixel(20),
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'


  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',    
    paddingHorizontal: widthPixel(10),
  },
  rightarrow:{
    width: widthPixel(32),
    height: widthPixel(32),
  }
});
