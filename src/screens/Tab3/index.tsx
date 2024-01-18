import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommingSoon from '../../components/common/CommingSoon';

const Tab3 = () => {
  return (
    <View style={style.container}>
      <CommingSoon />
    </View>
  );
};
const style = StyleSheet.create({container: {flex: 1}});

export default Tab3;
