import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mainFooterDisplayConfig} from '../utils/config/footerConfig';

const CommonFooter = () => {
  return (
    <View>
      {Object.entries(mainFooterDisplayConfig).map(
        ([footerType, footerData]) => (
          <TouchableOpacity key={footerType}>
            {footerData?.icon}
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};

export default CommonFooter;

const styles = StyleSheet.create({});
