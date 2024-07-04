import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otpscreen = ({navigation}) => {
  const [otp, setOtp] = useState('')
  
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'CREATE PASSWORD'}/>
  
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
           <View style={[styles.wrapper]}>
           <View>
              <Text style={styles.etext}> Create New Password Here.</Text>
            </View>
            <CustomInput
              onChangeText={text => setAge(text)}
              placeholder={'Password'}
              leftIcon={appIcons.lock}
            />
            <CustomInput
           
           onChangeText={text => setGender(text)}
              placeholder={'Confirm Password'}
              leftIcon={appIcons.lock}
            />

          

<View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.login)} >
          Continue
          </Button>
        </View>


           </View>




        </KeyboardAwareScrollView>

    </View>
  );
};

export default Otpscreen;
