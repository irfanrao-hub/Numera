import React, {useState} from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, appIcons} from '../../../services';
import {styles} from './styles';
import {Header} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Whiteboard = ({navigation}) => {
  const modeArray = [
    {
      id: 1,
      title: 'Standard Mode',
      icon: appIcons.write,
      // onPress: () => mode1(),
    },
    {
      id: 2,
      title: 'Focus Mode',
      icon: appIcons.line,
      // onPress: () => mode2(),
    },
    {
      id: 3,
      title: 'Broswer',
      icon: appIcons.arase,
      // onPress: () => mode3(),
    },
    {
      id: 4,
      title: 'Broswer',
      icon: appIcons.left,
      // onPress: () => mode3(),
    },
    {
      id: 5,
      title: 'Broswer',
      icon: appIcons.right,
      // onPress: () => mode3(),
    },
    {
      id: 6,
      title: 'Broswer',
      icon: appIcons.del,
      // onPress: () => mode3(),
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'WHITE BOARD'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.mainlogo}>
            <Image source={appIcons.mainlogo} style={styles.icons} />
          </View>
          <View style={styles.rowEvenly}>
            {modeArray.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={styles.socialView}>
                <Image source={item.icon} style={styles.socialIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Whiteboard;
