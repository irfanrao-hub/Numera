import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {colors, appIcons} from '../../../services';
import {styles} from './styles';
import {Header, AppHeader, Alert, Tab, Submitbtn} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Shop = ({navigation}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentArray, setCurrentArray] = useState('modeArray');

  const cancelButtonStyle = {
    backgroundColor: colors.white,
  };
  const cancelButtonTextStyle = {
    color: colors.lightBackground,
  };

  const submitButtonStyle = {
    backgroundColor: colors.lightBackground,
  };

  const buttons = [
    <Submitbtn
      key="cancel"
      style={cancelButtonStyle}
      textstyle={cancelButtonTextStyle}
      onPress={() => setShowAlert(false)}>
      Cancel
    </Submitbtn>,
    <Submitbtn
      key="ok"
      style={submitButtonStyle}
      onPress={() => {
        setShowAlert(false);
      }}>
      Submit
    </Submitbtn>,
  ];
  const modeArray = [
    {
      id: 1,
      icon: appIcons.hint,
      title: '1 Hint',
      onPress: () => setShowAlert(true),
      buttontitle: '100 π',
    },
    {
      id: 2,
      icon: appIcons.hint,
      title: '5 Hint',
      // onPress: () => mode1(),
      buttontitle: '450 π',
    },
    {
      id: 3,
      icon: appIcons.hint,
      title: '20 Hint',
      // onPress: () => mode1(),
      buttontitle: '3000 π',
    },
    {
      id: 4,
      icon: appIcons.hint,
      title: '30 Hint',
      // onPress: () => mode1(),
      buttontitle: '5000 π',
    },
    {
      id: 5,
      icon: appIcons.hint,
      title: '40 Hint',
      // onPress: () => mode1(),
      buttontitle: '7000 π',
    },
    {
      id: 6,
      icon: appIcons.hint,
      title: '50 Hint',
      // onPress: () => mode1(),
      buttontitle: '10000 π',
    },
  ];

  const shopArray = [
    {
      id: 1,
      color: colors.lightblue,
      title: 'Blue',
      onPress: () => setShowAlert(true),
      buttontitle: 'DEFAULT',
    },
    {
      id: 2,
      color: colors.lightgreen,
      title: 'Green',
      // onPress: () => mode1(),
      buttontitle: '450 π',
    },
    {
      id: 3,
      color: colors.lightyellow,
      title: 'Yellow',
      // onPress: () => mode1(),
      buttontitle: 'DEFAULT',
    },
    {
      id: 4,
      color: colors.lightpurple,
      title: 'Purple',
      // onPress: () => mode1(),
      buttontitle: '450 π',
    },
    {
      id: 5,
      color: colors.lightpink,
      title: 'Pink',
      // onPress: () => mode1(),
      buttontitle: 'DEFAULT',
    },
    {
      id: 6,
      color: colors.lightorange,
      title: 'Orange',
      // onPress: () => mode1(),
      buttontitle: '450 π',
    },
  ];
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header leftIcon={true} title={'SHOP'} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.fg1}>
        <View style={[styles.wrapper]}>
          <View style={styles.head}>
            <AppHeader
              shoptextstyle={styles.headtext}
              shoptoken={true}
              shoptext={'Your Token And Hint'}
            />
          </View>

          <View style={styles.main}>
            <View style={styles.cardshead}>
              <AppHeader
                shophint={'Shop Hint'}
                shoprighttext={'Shop Cosmetics'}
                onShopHintPress={() => setCurrentArray('modeArray')}
                onShopCosmeticsPress={() => setCurrentArray('shopArray')}
              />
            </View>

            {currentArray === 'modeArray'
              ? modeArray.map((item, index) => (
                  <View style={styles.rowEvenly} key={index}>
                    <TouchableOpacity
                      onPress={item.onPress}
                      style={styles.socialView}>
                      <Image source={item.icon} style={styles.socialIcon} />
                      <Text style={styles.modetitle}>{item.title}</Text>
                    </TouchableOpacity>
                    <Tab onPress={item.onButtonPress}>{item.buttontitle} </Tab>
                  </View>
                ))
                
              : shopArray.map((item, index) => (
                  <View style={styles.cosmaticmain} key={index}>
                    <TouchableOpacity
                      onPress={item.onPress}
                      style={{
                        ...styles.rectangleview,
                        backgroundColor: item?.color,
                      }}></TouchableOpacity>
                    <Text style={styles.textcosm}>{item.title}</Text>
                    <Tab onPress={item.onButtonPress}>
                      {index % 2 === 0 ? (
                        <Text>{item.buttontitle} </Text>
                      ) : (
                        <View style={styles.textpie}>
                          <Text style={styles.tiltetext}>
                            {item.buttontitle}{' '}
                          </Text>
                        </View>
                      )}
                    </Tab>
                  </View>
                ))}
          </View>
        </View>
        <View style={styles.alertcontainer}>
          <Alert
            visible={showAlert}
            onClose={() => setShowAlert(false)}
            title="CONFIRM SHOP"
            message="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            buttons={buttons}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Shop;
