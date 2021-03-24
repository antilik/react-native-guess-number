import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGamScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={'Guess a number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
