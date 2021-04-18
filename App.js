import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [ dataLoaded, setDataLoaded] = useState(false);

  const startNewGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const renderScreens = () => {
    if (userNumber) {
      if (guessRounds <= 0) {
        return <GameScreen
          userChoice={userNumber}
          onGameOver={gameOverHandler}
        />;
      } else {
        return <GameOverScreen
          resetTheGame={setUserNumber}
          guessRounds={guessRounds}
          userNumber={userNumber}
        />;
      }
    } else {
      return <StartGameScreen onStartGame={startNewGameHandler} />;
    }
  };

  return (

    <View style={styles.screen}>
      { dataLoaded
        ? (<>
        <StatusBar style='auto' />
        <Header title={'Guess a number'} />
      {renderScreens()}
      </>)
        : (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err)=> console.log(err)}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
