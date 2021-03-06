import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
  return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPressHandler}>
      <View style={{ backgroundColor: props.color || Colors.btnAgree,
        ...styles.button,
        }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
button: {
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 11,
},
buttonText: {
  color: 'white',
  fontFamily: 'open-sans',
  fontSize: 18,
},
})

export default MainButton;
