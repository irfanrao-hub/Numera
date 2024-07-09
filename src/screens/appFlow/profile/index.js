import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {appIcons, colors, heightPixel, routes, widthPixel} from '../../../services';
import {AppHeader, Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomCard} from '../../../components/customcard';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
const Profile = ({navigation}) => {
  const[image, setImage]= useState('');
  
  const imagePicker = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image);
      console.log('img', image);
    });
  };


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
          <View style={styles.profilemain}>
            <Image style={{
               width: widthPixel(150),
               height: heightPixel(150),
               borderRadius:100,
            }} source={image ? {uri:image.path} : appIcons.profilelogo}  />
            <TouchableOpacity
              style={styles.edit}
              onPress={()=>imagePicker()}>
              <Image style={styles.editprofile} source={appIcons.editprofile} 
              />
            </TouchableOpacity>
          </View>
  
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
              leftIcon={appIcons.lockk}
              rightarrow={true}
              navigation={navigation}
              onPress={() => navigation.navigate(routes.contactus)}
            />
            <CustomCard
              title={'Feedback'}
              leftIcon={appIcons.check}
              rightarrow={true}
              navigation={navigation}
              onPress={() => navigation.navigate(routes.feedback)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;
