import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTabStore} from '../../utils/store/tabStore';
import {tabToViewMapper} from './utils/tabToViewMapper';
import {TTabs} from '../../utils/common/data';

const MatchesScreen = () => {
  const {selectedTab} = useTabStore();

  return (
    <View style={styles.parentContainer}>
      {tabToViewMapper[selectedTab?.routeName as TTabs]?.()}
    </View>
  );
};

export default MatchesScreen;

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
