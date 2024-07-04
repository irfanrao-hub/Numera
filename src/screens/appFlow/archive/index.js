import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {colors, routes} from '../../../services';
import {styles} from './styles';
import {Header, Button} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Archive = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'ARCHIVE'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View>
            <Text style={styles.etext}> Problems History</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.txt}>
              <Text style={styles.left}>
                Source : <Text style={styles.spanleft}>AMC</Text>
              </Text>
              <View style={styles.spacer}>
                <Text style={styles.right}>
                  Difficulty:<Text style={styles.spanright}> 37.225</Text>
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.ptxt}>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </Text>
            </View>
            <View style={styles.pv30}>
              <Button onPress={() => navigation.navigate(routes.archiveans)}>
                Open
              </Button>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.txt}>
              <Text style={styles.left}>
                Source : <Text style={styles.spanleft}>AMC</Text>
              </Text>
              <View style={styles.spacer}>
                <Text style={styles.right}>
                  Difficulty:<Text style={styles.spanright}> 37.225</Text>
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.ptxt}>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </Text>
            </View>
            <View style={styles.pv30}>
              <Button onPress={() => navigation.navigate(routes.archiveans)}>
                Open
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Archive;
