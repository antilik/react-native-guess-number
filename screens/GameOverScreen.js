import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

import { resetExcludeArr } from '../utils/guessNumber';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({resetTheGame, guessRounds, userNumber}) => {

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

      <Text style={{ ...DefaultStyles.title, ...styles.titleOver }} >The Game is Over!</Text>
      <View style={styles.imageContainer}>
      <Image
        source={require('../assets/success.png')}
        style={styles.imageSuccess}
        resizeMode='cover'
      />
      </View>
      <Text style={DefaultStyles.text} >Number of rounds: {guessRounds}</Text>
      <Text style={DefaultStyles.text} >Number was: {userNumber}</Text>

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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleOver: {
    marginTop: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  imageSuccess: {
    width: '100%',
    height: '100%',
  },
  resetBtn: {
    marginBottom: 150,
  },
});

export default GameOverScreen;
