import React from 'react';
import {StyleSheet, Image, Text, View, Platform} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from '../../services';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const AppHeader = ({
  title,
  titletxt,
  leftIcon,
  righticon,
  calendar,
  problemtxt,
  caltxt,
  shoptext,
  cardtxt,
  shophint,
  shoprighttext,
  pieicon,
  pie,
  piepic,
  shoptoken,
  arrow,
  graph,
  onPress,
  shoptextstyle,
  cardtxtstyle,
  onCalendarPress,
  onShopCosmeticsPress,
  onShopHintPress,
 
}) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const navigation =useNavigation()
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? statusBarHeight : heightPixel(20)},
      ]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titletxt}>{titletxt}</Text>
      <Text style={styles.problemtxt}>{problemtxt}</Text>
      <Text style={styles.caltxt}>{caltxt}</Text>
      <Text style={{...styles.shoptext, ...shoptextstyle}}>{shoptext}</Text>
      <Text style={{...styles.cardtxt, ...cardtxtstyle}}>{cardtxt}</Text>

      <View>
        <TouchableOpacity onPress={onShopHintPress}>
          <Text style={styles.shophint}>{shophint}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShopCosmeticsPress}>
          <Text style={styles.shoprighttext}>{shoprighttext}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowCenter}>
        {leftIcon && (
          <TouchableOpacity style={styles.proicon} onPress={onPress}>
            <Image style={styles.iconstyle} source={appIcons.profilelogo} />
          </TouchableOpacity>
        )}

        {righticon && (
          <TouchableOpacity >
            <Image style={styles.rightpie} source={appIcons.problem} />
          </TouchableOpacity>
        )}
        {calendar && (
          <TouchableOpacity onPress={onCalendarPress}>
            <Image style={styles.calendricon} source={appIcons.calendr} />
          </TouchableOpacity>
        )}
        {pieicon && (
          <TouchableOpacity >
            <Image style={styles.righticon} source={appIcons.pieicon} />
          </TouchableOpacity>
        )}
        {pie && (
          <TouchableOpacity>
            <Image style={styles.righticon} source={appIcons.pie} />
          </TouchableOpacity>
        )}
        {piepic && (
          <TouchableOpacity >
            <Image style={styles.righticon} source={appIcons.piepic} />
          </TouchableOpacity>
        )}
        {shoptoken && (
          <TouchableOpacity >
            <Image style={styles.shoptoken} source={appIcons.shoptoken} />
          </TouchableOpacity>
        )}
        {arrow && (
          <TouchableOpacity >
            <Image style={styles.arrow1} source={appIcons.arrow1} />
            <Image style={styles.arrow2} source={appIcons.arrow2} />
          </TouchableOpacity>
        )}
        {graph && (
          <TouchableOpacity >
            <Image style={styles.graph} source={appIcons.graph} />
          </TouchableOpacity>
        )}

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPixel(60),
    paddingBottom: heightPixel(20),
  },

  iconstyle: {
    width: widthPixel(45),
    height: widthPixel(45),
    resizeMode: 'contain',
    marginHorizontal: -580,
    marginVertical: 5,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: colors.skyblue,
  },
  title: {
    color: colors.blacklight,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    paddingBottom: 22,
  },
  titletxt: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    paddingTop: 24,
    marginHorizontal: -105,
  },
  righticon: {
    width: widthPixel(95),
    height: widthPixel(30),
    resizeMode: 'contain',
    marginHorizontal: -50,
    marginTop: 18,
  },
  rightpie: {
    width: widthPixel(95),
    height: widthPixel(30),
    resizeMode: 'contain',
    marginHorizontal: -70,
    marginTop: 18,
  },
  caltxt: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.7),
    width: widthPixel(250),
    paddingTop: 20,
    marginLeft: -245,
  },
  calendricon: {
    width: widthPixel(35),
    height: widthPixel(35),
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginHorizontal: -15,
    marginTop: 15,
  },
  problemtxt: {
    color: colors.lightBackground,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.6),
    paddingTop: 20,
    marginLeft: 160,
    width: widthPixel(250),
  },
  shoptext: {
    color: colors.lightBackground,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    width: widthPixel(250),
    paddingTop: 20,
    marginLeft: -130,
    marginTop: -5,
  },
  shoptoken: {
    width: widthPixel(95),
    height: widthPixel(30),
    resizeMode: 'contain',
    marginTop: 10,
  },
  cardtxt: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    width: widthPixel(250),
    paddingTop: 20,
    marginLeft: -240,
    marginTop: -5,
  },
  arrow1: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
    marginLeft: -70,
    marginTop: 8,
  },
  graph: {
    width: widthPixel(40),
    height: widthPixel(34),
    resizeMode: 'contain',
    marginLeft: -180,
    marginTop: -65,
  },

  arrow2: {
    width: widthPixel(30),
    height: widthPixel(30),
    resizeMode: 'contain',
    marginLeft: -30,
    marginTop: -29,
  },
  shophint: {
    color: colors.lightBackground,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.2),
    width: widthPixel(166),
    paddingTop: 20,
    marginLeft: -190,
    marginTop: -5,
  },
  shoprighttext: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.2),
    marginTop: -35,
  },
  profilelogo: {
    width: widthPixel(150),
    height: heightPixel(150),
    // marginHorizontal: -215,
    borderRadius:100,
  },
  editprofile: {
    width: widthPixel(20),
    height: heightPixel(20),
    // resizeMode:'center'
  },
  edit: {
    width: widthPixel(30),
    height: heightPixel(30),
    backgroundColor: colors.lightBackground,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 80,
    marginVertical: 7,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
export default AppHeader;
