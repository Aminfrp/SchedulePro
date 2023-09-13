import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BaseOr = () => {
  return (
    <View className="flex-row items-center gap-2 pt-10">
      <View className="flex-1" style={styles.left} />
      <Text>Or</Text>
      <View className="flex-1" style={styles.right} />
    </View>
  );
};

export default BaseOr;

const styles = StyleSheet.create({
  left: {
    backgroundColor: '#BFBCBC',
    height: 1,
  },
  right: {
    backgroundColor: '#BFBCBC',
    height: 1,
  },
});
