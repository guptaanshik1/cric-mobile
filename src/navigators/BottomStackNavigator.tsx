import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainFooter, TBottomNavigationParamsList} from '../utils/common/data';
import {mainFooterConfig} from '../utils/config/footerConfig';
import CommonFooter from '../components/CommonFooter';
import MainHeader from '../components/MainHeader';
import Controller from '../components/ContentDecider/Controller';

const TabStack = createBottomTabNavigator<TBottomNavigationParamsList>();

const BottomStackNavigator = () => {
  return (
    <TabStack.Navigator tabBar={props => <CommonFooter {...props} />}>
      {Object.entries(mainFooterConfig).map(([name, data]) => (
        <TabStack.Screen
          key={data?.label}
          name={name as MainFooter}
          component={data.component}
          options={{
            header: props => (
              <>
                <MainHeader />
                <Controller {...props} />
              </>
            ),
          }}
        />
      ))}
    </TabStack.Navigator>
  );
};

export default BottomStackNavigator;
