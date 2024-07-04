import React from 'react';
import {View, StatusBar} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Button, Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../../components/custominput';
const EditProfile = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'EDIT PROFILE'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.inputmain}>
            <CustomInput
              placeholder={'Full Name'}
              leftIcon={appIcons.profile}
            />
            <CustomInput
              placeholder={'Email ID'}
              leftIcon={appIcons.attherate}
            />
            <CustomInput
              placeholder={'Enter Your Age'}
              leftIcon={appIcons.calendar}
            />
            <CustomInput placeholder={'Gender'} leftIcon={appIcons.profile} />
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.profile)}>
              Save Change
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProfile;
