import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appIcons, colors} from '../../utilities';
import {hp} from '../../constants';
import {Archive, Dashboard, Progress, Shop} from '../../../screens/appFlow';
import Profile from '../../../screens/appFlow/profile';
const Tab = createBottomTabNavigator();

const tabArray = [
  {route: 'shop', icon: appIcons.store, component: Shop},
  {route: 'progress', icon: appIcons.progress, component: Progress},
  {route: 'dashboard', icon: appIcons.dashboardTab, component: Dashboard},
  {route: 'archive', icon: appIcons.archive, component: Archive},
  {route: 'profile', icon: appIcons.tabpro, component: Profile},
];
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View style={[styles.btn]}>
        <View style={{alignItems: 'center'}}>
          {focused && <View />}
          <Image
            source={item.icon}
            style={[
              styles.tabIcon,
              {tintColor: focused ? colors.lightBackground : colors.lightBlack},
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
        elevation: 5,
      }}>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.background,
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  tabIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
});
