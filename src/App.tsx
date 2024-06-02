import React from 'react';
import BottomStackNavigator from './navigators/BottomStackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomStackNavigator />
    </NavigationContainer>
  );
};

export default App;
