import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fs} from '../../../utils/layouts';

const CommingSoon = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Coming soon</Text>
    </View>
  );
};

export default CommingSoon;

const style = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: fs(20), fontWeight: 'bold'},
});
