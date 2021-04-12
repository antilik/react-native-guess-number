import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const renderScreens = () => {
    if (userNumber) {
      if (guessRounds <= 0) {
        return <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
      } else {
        return <GameOverScreen resetTheGame={setUserNumber} />;
      }
    } else {
      return <StartGameScreen onStartGame={startGameHandler} />;
    }
  };

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
