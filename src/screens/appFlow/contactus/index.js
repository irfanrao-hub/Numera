import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors} from '../../../services';
import {Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../../components/custominput';
const ContactUs = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'SUPPORT TEAM'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.text}>
            <Text style={styles.textstyle}>
              Hi, where to show my progress and how can i mange this?
            </Text>
          </View>
          <Text style={styles.timestyle}>08:53 am</Text>
        </View>
        <View style={[styles.leftcontainer]}>
          <View style={styles.lefttext}>
            <Text style={styles.lefttextstyle}>
              ok please let us know what is issue
            </Text>
          </View>
          <Text style={styles.lefttimestyle}>08:53 am</Text>
        </View>
        <View style={styles.typecontainer}>
          <CustomInput
            placeholder={'Type a message'}
            width="80%"
            height={60}
            borderRadius={40}
            borderWidth={0}
            backgroundColor={colors.background}
            elevation={3}
            rightcamera={true}
          />
          <View style={styles.sendcontainer}>
            <Image style={styles.sendicon} source={appIcons.send} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default ContactUs;
