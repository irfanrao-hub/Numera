import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'PRIVACY POLICY'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <Text style={styles.policytext}>
            It's important to carefully read and understand the privacy policy
            of any website or service you use, as it informs you about your data
            rights and how your information is being handled. Privacy policies
            are required by various data protection regulations around the
            world, such as the General Data Protection Regulation (GDPR) in
            Europe and the California Consumer Privacy Act (CCPA) in the United
            States. Keep in mind that privacy policies can be quite complex and
            legal in nature, so if you have specific questions about a
            particular privacy policy, it's a good idea to consult legal experts
            or professionals who specialize in privacy law.It's important to
            carefully read and understand the privacy policy of any website or
            service you use, as it informs you about your data rights and how
            your information is being handled. Privacy policies are required by
            various data protection regulations around the world, such as the
            General Data Protection Regulation (GDPR) in Europe and the
            California Consumer Privacy Act (CCPA) in the United States. Keep in
            mind that privacy policies can be quite complex and legal in nature,
            so if you have specific questions about a particular privacy policy,
            it's a good idea to consult legal experts or professionals who
            specialize in privacy law.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PrivacyPolicy;
