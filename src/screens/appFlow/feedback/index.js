import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {appIcons, colors, routes} from '../../../services';
import {AppHeader, Button, Header} from '../../../components';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Feedback = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'FEEDBACK'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <Text style={styles.textstyle}>Submit feedback for Numera app</Text>
          <View style={styles.ratecontainer}>
            <Text style={styles.ratetextstyle}>Rate in Stars</Text>
            <View style={styles.starcontainer}>
              <Image style={styles.staricon} source={appIcons.ratestar} />
              <Image style={styles.staricon} source={appIcons.ratestar} />
              <Image style={styles.staricon} source={appIcons.ratestar} />
              <Image style={styles.staricon} source={appIcons.ratestar} />
              <Image style={styles.staricon} source={appIcons.unratestar} />
            </View>
          </View>

          <View style={styles.reviewcontainer}>
            <Text style={styles.reviewtext}>Review</Text>
            <View style={styles.reviewtextcontainer}></View>
          </View>
          <View style={styles.pv30}>
            <Button onPress={() => navigation.navigate(routes.profile)}>
              Save
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Feedback;
