import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>);
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 22,
  },
});

export default NumberContainer;
