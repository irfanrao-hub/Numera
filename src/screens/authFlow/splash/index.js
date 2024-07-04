import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {styles} from './styles';
import {colors, appIcons, routes} from '../../../services';
const Splash = ({navigation}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    perfomeTimeconsumingTask();
  }, []);
  const perfomeTimeconsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(user == null ? routes.onboarding : routes.splash);
      }, 3000),
    );
  };
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.lightBackground} />
      <Image
        source={appIcons.logo}
        style={{width: 170, height: 161, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
