import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const Input = (props) => {

  return (
    <TextInput
      {...props.inputProps}
      style={{...styles.input, ...props.style}}
    />);
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    width: '80%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 20,
    fontSize: 18,
  }
});

export default Input;