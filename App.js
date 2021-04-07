import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const renderScreens = () => (userNumber)
    ? <GameScreen
        userChoice={userNumber}
        resetTheGame={setUserNumber}
      />
    : <StartGameScreen
        onStartGame={startGameHandler}
      />;

  return (
    <View style={styles.screen}>
      <StatusBar style='auto' />
      <Header title={'Guess a number'} />
      {renderScreens()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
