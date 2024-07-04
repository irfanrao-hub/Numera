import React from 'react';
import {View, StatusBar} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {Button, Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../../components/custominput';
const ChangePassword = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'CHANGE PASSWORD'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.inputmain}>
            <CustomInput
              placeholder={'Old Password'}
              leftIcon={appIcons.lockk}
              rightarrow={true}
            />
            <CustomInput
              placeholder={'New Password'}
              leftIcon={appIcons.lockk}
              rightarrow={true}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lockk}
              rightarrow={true}
            />
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
export default ChangePassword;
