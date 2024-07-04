import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, fontFamily, heightPixel, widthPixel, wp} from '../../services';

const Submitbtn = props => {
  const {style, disable, onPress, children ,textstyle} = props;

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}>
        <Text style={[styles.label, textstyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginBottom: wp(5),
  },
  container: {
    width: widthPixel(164),
    height: heightPixel(48),
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth:1,
    borderColor: colors.lightBackground,
    
  },

  label: {
    color: colors.background,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Submitbtn;
