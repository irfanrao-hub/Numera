import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailValue =
    email.length > 0 && /\S+@\S+\.\S+/.test(email) ? 'Email format error' : null;
  const passwordValue =
    password.length > 0 && password.length < 8
      ? 'Password must be 8 character long'
      : null;

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
      <Header leftIcon={true} mainLogo={true} />

      <View style={[styles.wrapper]}>
        <Text style={styles.title}>SIGN IN</Text>
        <View>
          <CustomInput
            onChangeText={text => setEmail(text)}
            placeholder={'Email ID'}
            leftIcon={appIcons.attherate}
          />
          <CustomInput
            onPressIcon={() => setShowPassword(!showPassword)}
            secureTextEntry={!showPassword}
            placeholder={'Password'}
            leftIcon={appIcons.lock}
            rightIcon={true}
            eyeValue={showPassword ? appIcons.show : appIcons.hide}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.forgetcontainer}>
          <Text style={styles.forgetText} onPress={()=> navigation.navigate(routes.forgetpasword)}>Forget Password?</Text>
        </View>

        <View style={styles.pv30}>
          <Button onPress={() => navigation.navigate(routes.drawer)} >
            Login
          </Button>
        </View>

        <View style={styles.texthead}>
        <Text onPress={() => navigation.navigate(routes.signup)} style={styles.dontHaveText}>Don’t have an account? <Text style={styles.spanedit}>Sign Up</Text></Text>
        <Text style={styles.ortext}>OR</Text>
        </View>
        <View style={styles.rowEvenly}>
            {socialArray.map((item, index) => (
              <TouchableOpacity onPress={item.onPress} key={index} style={styles.socialView}>
                <Image source={item.icon} style={styles.socialIcon} />
              </TouchableOpacity>
            ))}
          </View>

      </View>
    </View>
  );
};

export default LoginScreen;
