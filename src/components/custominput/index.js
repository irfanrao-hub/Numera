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
} from '../../services';

export const CustomInput = ({
  dropDownShow,
  leftIcon,
  onPressValue,
  dropdownArray,
  numberOfLines,
  eyeValue,
  onPressIcon,
  inputstyle,
  rightarrow,
  rightIcon,
  value,
  placeholder,
  keyboardType,
  editable,
  secureTextEntry,
  onChangeText,
  multiline,
  maxLength,
  errorText,
}) => {
  return (
    <View style={[styles.formInput]}>
      <View style={[styles.input]}>
        <Image source={leftIcon} style={styles.leftIcon} />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => rightIcon && onPressIcon()}>
          <TextInput
            selectionColor={colors.grey}
            style={[styles.inputTextStyle]}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#C7C7C7'}
            rightIcon={true}
            keyboardType={keyboardType}
            editable={editable}
            onChangeText={onChangeText}
          />
        </TouchableOpacity>
        {rightIcon && (
          <TouchableOpacity onPress={onPressIcon}>
            <Image source={eyeValue} style={styles.eyeIcon} />
          </TouchableOpacity>
        )}
            {rightarrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.rightarrow} source={appIcons.show} />
          </TouchableOpacity>
        )}
      </View>
      {dropDownShow && (
        <View style={styles.dropDownView}>
          {dropdownArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressValue(item.title)}
                key={index}>
                <Text style={styles.dropDownText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
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
    width: widthPixel(26),
    height: widthPixel(26),
    marginRight: widthPixel(12),
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: widthPixel(23),
    height: widthPixel(23),
    resizeMode: 'contain',
    tintColor: colors.showcolor,
  },

  inputTextStyle: {
    marginTop: heightPixel(10),
    fontSize: 17,
    fontFamily: fontFamily.appTextRegular,
    color: colors.lightBlack,
  },
  icon: {
    width: widthPixel(23),
    height: widthPixel(23),
    resizeMode: 'contain',
  },
  formInput: {
    width: '100%',
    paddingBottom: heightPixel(20),
    // paddingHorizontal: widthPixel(20),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightgrey,
    paddingHorizontal: widthPixel(10),
    borderRadius: widthPixel(14),
    borderColor: colors.grey,
    borderWidth: 2,
  },
  rightarrow:{
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
  }
});
