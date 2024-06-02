import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainFooter, TBottomNavigationParamsList} from '../utils/common/data';
import {mainFooterConfig} from '../utils/config/footerConfig';

const TabStack = createBottomTabNavigator<TBottomNavigationParamsList>();

const BottomStackNavigator = () => {
  return (
    <TabStack.Navigator>
      {Object.entries(mainFooterConfig).map(([name, data]) => (
        <TabStack.Screen
          key={data?.label}
          name={name as MainFooter}
          component={data.component}
        />
      ))}
    </TabStack.Navigator>
  );
};

export default BottomStackNavigator;
