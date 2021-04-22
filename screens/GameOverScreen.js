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
        fadeDuration={4000}
        // source={require('../assets/success.png')} // local
        source={{ uri: ('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260') }} // web image
        style={styles.imageSuccess}
        resizeMode='cover'
      />
      </View>
       <View style={styles.textResultsContainer}>
      <Text
        style={{ ...DefaultStyles.text, ...styles.resultText }}
      >Your phone needed{' '}
        <Text style={styles.textHighlight}>{guessRounds}</Text> rounds to guess the number{' '}
        <Text style={styles.textHighlight}>{userNumber}</Text>
      </Text>
       </View>
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
    borderColor: Colors.btnAgree,
    overflow: 'hidden',
  },
  imageSuccess: {
    width: '100%',
    height: '100%',
  },
  textResultsContainer: {
    marginVertical: 25,
    width: '90%',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18,
  },
  textHighlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.btnReset,
  },
  resetBtn: {
    marginBottom: 150,
  },
});

export default GameOverScreen;
