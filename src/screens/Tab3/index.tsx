import React from 'react';
import {StyleSheet, View} from 'react-native';
import ComingSoon from '../../components/common/ComingSoon';

const Tab3 = () => {
  return (
    <View style={style.container}>
      <ComingSoon />
    </View>
  );
};
const style = StyleSheet.create({container: {flex: 1}});

export default Tab3;
