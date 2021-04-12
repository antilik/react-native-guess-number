import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { resetExcludeArr } from '../utils/guessNumber';
import Colors from '../constants/colors';

const GameOverScreen = ({resetTheGame}) => {

  const resetTheGameHandler = () => {
    const resetFigures = () => {
      resetExcludeArr();
      resetTheGame(0);
    };
    Alert.alert('Reset the game', 'Do you agree reset the game?', [
        { text: 'Agree', style: 'default', onPress: resetFigures },
        {
          text: 'Cancel', style: 'cancel', onPress: () => {
          },
        },
      ],
      { cancelable: true });
  };

  return (
    <View
      style={styles.screen}
    >
      <Text>The Game is Over!</Text>
      <View style={styles.resetBtn}>
        <Button
          title='Reset the game'
          color={Colors.btnReset}
          onPress={resetTheGameHandler}
        />
      </View>
  </View>);
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    marginTop: 160,
  },
});

export default GameOverScreen;