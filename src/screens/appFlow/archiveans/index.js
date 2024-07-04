import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button, AppHeader, Alert} from '../../../components';
import {CustomInput} from '../../../components/custominput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Archiveans = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'ANSWER'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.head}>
            <AppHeader
              piepic={true}
              problemtxt={'TOPICS: Algebra, Arithmetic, Addition, Counting'}
            />
          </View>

          <View style={styles.box}>
            <View style={styles.txt}>
              <Text style={styles.left}>
                Source : <Text style={styles.spanleft}>AMC</Text>
              </Text>
              <View style={styles.spacer}>
                <Text style={styles.right}>
                  Difficulty:<Text style={styles.spanright}> 37.225 </Text>
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
          </View>

          <View style={styles.boxx}>
            <View style={styles.ansbox}>
              <View style={styles.txtt}>
                <Text style={styles.leftt}>Your Input</Text>
              </View>
              <View>
                <Text style={styles.anstxt}>
                  Answer is 34, Lorem ipsum dolor sit amet, con adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud.
                </Text>
              </View>
            </View>
            <View style={styles.solbox}>
              <View style={styles.txtt}>
                <Text style={styles.leftt}>Answer</Text>
              </View>
              <View>
                <Text style={styles.ptxtt}>
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Archiveans;
