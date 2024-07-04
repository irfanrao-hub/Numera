import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button, AppHeader} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Dashboard = ({navigation}) => {
  const modeArray = [
    {
      id: 1,
      title: 'Standard Mode',
      icon: appIcons.mode1,
      onPress: () => mode1(),
    },
    {
      id: 2,
      title: 'Focus Mode',
      icon: appIcons.mode2,
      onPress: () => mode2(),
    },
    {
      id: 3,
      title: 'Broswer',
      icon: appIcons.mode3,
      onPress: () => mode3(),
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'HOME'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.head}>
            <AppHeader
              leftIcon={true}
              title={'Good Morning'}
              titletxt={'Alex Matheson'}
              onPress={() => navigation.navigate(routes.profile)}
            />
          </View>
          <View>
            <Text style={styles.etext}> Select Your Traning Mode</Text>
          </View>
          <View style={styles.rowEvenly}>
            {modeArray.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={styles.socialView}>
                <Image source={item.icon} style={styles.socialIcon} />
                <Text style={styles.modetitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View>
            <Text style={styles.ptext}> Problems </Text>
          </View>

          <View style={styles.box}>
            <View style={styles.txt}>
              <Text style={styles.left}>
                Source : <Text style={styles.spanleft}>AMC</Text>
              </Text>
              <View style={styles.spacer}>
                <Text style={styles.right}>
                  Difficulty:<Text style={styles.spanright}>37.225</Text>
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
              <Button onPress={() => navigation.navigate(routes.problem)}>
                Open
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Dashboard;
