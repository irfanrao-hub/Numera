import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {AppHeader, Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomCard} from '../../../components/customcard';
const Profile = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'PROFILE'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.head}>
            <AppHeader profileicon={true} />
            <Text style={styles.nametext}>Alex Matheson</Text>
          </View>
          <View style={styles.inputmain}>
            <CustomCard
              title={'Edit Profile'}
              leftIcon={appIcons.edit}
              rightarrow={true}
              navigation={navigation}
              onPress={() => navigation.navigate(routes.editprofile)}
            />
            <CustomCard
              title={'Change Password'}
              leftIcon={appIcons.lockk}
              rightarrow={true}
              navigation={navigation}
              onPress={() => navigation.navigate(routes.changepassword)}
            />
            <CustomCard
              title={'Privacy Policy'}
              leftIcon={appIcons.check}
              rightarrow={true}
              navigation={navigation}
              onPress={() => navigation.navigate(routes.privacypolicy)}
            />
            <CustomCard
              title={'Contact Us'}
              rightarrow={true}
              onPress={() => navigation.navigate(routes.contactus)}
            />
            <CustomCard
              title={'Feedback'}
              rightarrow={true}
              onPress={() => navigation.navigate(routes.feedback)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;
