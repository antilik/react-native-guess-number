import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import { guessNumberBetween } from '../utils/guessNumber';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';

const GameScreen = ({ userChoice, onGameOver }) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 100;

  const lowValue = useRef(MIN_VALUE);
  const highValue = useRef(MAX_VALUE);

  const [currentGuess, setCurrentGuess] = useState(guessNumberBetween(MIN_VALUE, MAX_VALUE, MAX_VALUE));
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  useEffect(() => {
    if (userChoice === currentGuess) {
      onGameOver(numberOfRounds);
    }
  }, [userChoice, currentGuess, onGameOver]);

  const nextGuessHandler = (action) => {
    if ((action === 'lower' && userChoice > currentGuess)
      || (action === 'higher' && userChoice < currentGuess)) {
      Alert.alert('Don\'t lie',
        'You know that this is wrong! Play honestly',
        [
          {
            text: 'Try again!', style: 'cancel', onPress: () => {
              return null;
            },
          },
        ], { cancelable: true },
      );

      return null;
    }

    if (action === 'higher') {
      lowValue.current = currentGuess + 1;
    } else if (action === 'lower') {
      highValue.current = currentGuess - 1;
    }
    setCurrentGuess((prev) => (guessNumberBetween(lowValue.current, highValue.current, prev)));
    setNumberOfRounds((prev) => ++prev);
  };

  return (
    <View style={styles.screen}>
      <View>
        <Text
          style={{...DefaultStyles.title, ...styles.guessTitle }}
        >Computer's Guess:</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.btnContainer}>
          <MainButton
            color={Colors.btnAgree}
            onPressHandler={() => nextGuessHandler('lower')}
          >Less</MainButton>
          <MainButton
            color={Colors.btnAgree}
            onPressHandler={() => nextGuessHandler('higher')}
          >More</MainButton>
        </Card>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  guessTitle: {
    marginTop: 80,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
    width: 400,
    maxWidth: '90%',
  },

});

export default GameScreen;
