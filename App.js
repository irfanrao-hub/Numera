import React from 'react';
import {MainNavigator} from './src/services/navigation';
import {Platform, SafeAreaView, View} from 'react-native';
const App = () => {

  const Wrapper = Platform.OS === "ios" ? View : SafeAreaView
  return (
      <Wrapper style={{flex: 1}}>
        
        <MainNavigator />
      </Wrapper>
  );
};

export default App;
