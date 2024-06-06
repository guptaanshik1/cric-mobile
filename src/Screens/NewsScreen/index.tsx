import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTabStore} from '../../utils/store/tabStore';

import {TTabs} from '../../utils/common/data';
import {tabToViewMapper} from './utils/tabToViewMapper';

const NewsScreen = () => {
  const {selectedTab} = useTabStore();
  console.log({
    comp: tabToViewMapper[selectedTab?.routeName],
  });
  return (
    <View>
      <View style={styles.parentContainer}>
        {tabToViewMapper[selectedTab?.routeName as TTabs]?.()}
      </View>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
