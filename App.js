import React from 'react';
import {MainNavigator} from './src/services/navigation';
import {Platform, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {Platform.OS === 'ios' ? (
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <MainNavigator />
        </SafeAreaView>
      )}
    </View>
  );
};

export default App;
