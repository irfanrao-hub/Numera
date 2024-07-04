import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Forgetpasword = ({navigation}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
 

    const socialArray = [
      {
        id: 1,
        title: 'Continue with FaceBook',
        icon: appIcons.facebook,
        onPress: () => facebookLogin()
  
      },
      {
        id: 2,
        title: 'Continue with Google',
        icon: appIcons.google,
        onPress: () => appleLogin()
      },
    ]
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'FORGET PASSWORD'}/>
  
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
           <View style={[styles.wrapper]}>
           <View >
              <Text style={styles.etext}> Enter your Email to Reset Password.</Text>
            </View>
           <CustomInput
              onChangeText={text => setAge(text)}
              placeholder={'Email ID'}
              leftIcon={appIcons.attherate}
            />

<View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.otpscreen)} >
          NEXT
          </Button>
        </View>


           </View>




        </KeyboardAwareScrollView>

    </View>
  );
};

export default Forgetpasword;
