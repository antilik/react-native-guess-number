import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from  '../constants/colors';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card
        style={{
          width: 300,
          maxWidth: '90%',
          alignItems: 'center',
        }}
      >
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnWrapper}>
            <Button title="Reset" onPress={() => {}} color={Colors.btnDisagree}/>
          </View>
          <View style={styles.btnWrapper}>
            <Button title="Confirm" onPress={() => {}} color={Colors.btnAgree} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btnWrapper: {
    width: 100,
  },
});

export default StartGameScreen;
