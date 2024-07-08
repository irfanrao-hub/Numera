import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, routes, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, Button, AppHeader, Alert} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Problem = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const modeArray = [
    {
      id: 1,
      icon: appIcons.hint,
      onPress: () => setShowAlert(true),
    },
    {
      id: 2,
      icon: appIcons.whiteboard,
      onPress: () => navigation.navigate(routes.whiteboard),
    },
    {
      id: 3,
      icon: appIcons.next,
      onPress: () => navigation.navigate(routes.whiteboard),
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'PROBLEMS'} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.head}>
            <AppHeader
              righticon={true}
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
          </View>
          <View style={styles.rowEvenly}>
            {modeArray.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={styles.socialView}>
                <Image source={item.icon} style={styles.socialIcon} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.boxx}>
            <View style={styles.txtt}>
              <Text style={styles.leftt}>Type Your Answer</Text>
              <View style={styles.spacer}>
                <Text style={styles.rightt}>01:03</Text>
              </View>
            </View>
            <View>
              <Text style={styles.ptxtt}>
                Answer is 34,Lorem ipsum dolor sit amet, adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>
            </View>
            <View style={styles.pv30}>
              <Button onPress={() => navigation.navigate(routes.answer)}>
                SUBMIT
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Alert
        leftIcon={true}
        visible={showAlert}
        onClose={() => setShowAlert(false)}
        title="HINT"
        message="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
    </View>
  );
};

export default Problem;
