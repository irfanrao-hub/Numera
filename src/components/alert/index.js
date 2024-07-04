import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Alert = ({visible, onClose, message, title,leftIcon,buttons}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <StatusBar backgroundColor={colors.transperant} barStyle="light-content"/>
      <View style={styles.maincontainer}>
        <View style={styles.main}>
          <View style={styles.centerview}>
            <View style={styles.content}>
              <View style={styles.head}>
              {leftIcon && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
             <Image style={styles.iconStyle} source={appIcons.hint} />
          </TouchableOpacity>
        )}
                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.hint}>{title}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.message}>{message}</Text>
              </TouchableOpacity>
              <View style={styles.btnContainer}>
            {buttons?.map((button, index) => (
              <View key={index} style={styles.btnWrapper}>
                {button}
              </View>
            ))}
          </View>
            </View>
            </View>
          </View>
        </View>
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.transperant,
    
  },
  main: {
    flex: 1,
   
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPixel(390),
    height: heightPixel(80),
    marginLeft: 19,
  },
  content: {
    padding: 10,
    backgroundColor: colors.background,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.blacklight,
    fontSize: responsiveFontSize(1.9),
    padding:10,
  },
  iconStyle: {
    width: widthPixel(20),
    marginTop: widthPixel(25),
    height: widthPixel(20),
    resizeMode: 'contain',
  },
  head: {
    flexDirection: 'row',
  },
  hint: {
    fontFamily: fontFamily.appTextSemiBold,
    color: colors.lightBackground,
    fontSize: responsiveFontSize(2.2),
    marginTop: 17,
    marginLeft: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  btnWrapper: {
    margin: 5,
  },
});

export default Alert;
