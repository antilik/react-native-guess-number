import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors'
import DefaultStyles from '../constants/default-styles';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={{...DefaultStyles.title, ...styles.headerTitle}}
      >{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 26,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
  },
});

export default Header;
