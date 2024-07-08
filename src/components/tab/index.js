import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../services';
const Tab = props => {
  const {style, disable, onPress, children} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPixel(40),
    backgroundColor: colors.lightBackground,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  label: {
    color: colors.background,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Tab;
