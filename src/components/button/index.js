import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, fontFamily, widthPixel, wp} from '../../services';

const Button = props => {
  const {style, disable, onPress, children} = props;

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        // disabled={disable}
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.label}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginBottom: wp(5),
  },
  container: {
    width: widthPixel(390),
    height: 60,
    backgroundColor: colors.lightBackground,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },

  label: {
    color: colors.background,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: 16,
  },
});

export default Button;
