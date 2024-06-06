import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mainFooterDisplayConfig} from '../utils/config/footerConfig';
import {footerHeight} from '../utils/common/commonStyles';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {EdgeInsets} from 'react-native-safe-area-context';

interface IProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
}

const CommonFooter = ({navigation}: IProps) => {
  return (
    <View style={styles.footerContainer}>
      {Object.entries(mainFooterDisplayConfig).map(
        ([footerType, footerData]) => (
          <TouchableOpacity
            key={footerType}
            style={styles.iconContainer}
            onPress={() =>
              footerData?.navigateTo
                ? navigation.navigate(footerData.navigateTo)
                : null
            }>
            {footerData.icon}
            <Text style={styles.iconLabel}>{footerType}</Text>
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};

export default CommonFooter;

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: footerHeight,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 4,
  },
  iconLabel: {},
});
