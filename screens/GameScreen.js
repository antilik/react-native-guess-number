import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import { guessNumberBetween, resetExcludeArr } from '../utils/guessNumber';
import Colors from '../constants/colors';

const GameScreen = ({ userChoice, resetTheGame }) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 100;

  const lowValue = useRef(MIN_VALUE);
  const highValue = useRef(MAX_VALUE);

  const [currentGuess, setCurrentGuess] = useState(guessNumberBetween(MIN_VALUE, MAX_VALUE, MAX_VALUE));

  const getLowerNumber = () => {
    highValue.current = currentGuess;
    setCurrentGuess((prev) => (guessNumberBetween(lowValue.current, prev - 1, prev)));
  };

  const getHigherNumber = () => {
    lowValue.current = currentGuess;
    setCurrentGuess((prev) => (guessNumberBetween(prev + 1, highValue.current, prev)));
  };

  const resetTheGameHandler = () => {
    resetExcludeArr();
    resetTheGame(0);
  };

  return (
    <View style={styles.screen}>
      {
        (userChoice === currentGuess)
          ?
          (<View>
              <Text>Your secret number is:</Text>
              <NumberContainer>{currentGuess}</NumberContainer>
            </View>
          )
          :
          (<View>
            <Text style={styles.guessTitle}>Computer's Guess:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
              <Button title='LOWER' onPress={getLowerNumber} />
              <Button title='HIGH' onPress={getHigherNumber} />
            </Card>
          </View>)
      }
      <View style={styles.resetBtn}>
        <Button
          title='Reset the game'
          color={Colors.btnDisagree}
          onPress={resetTheGameHandler}
        />
      </View>
    </View>);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  guessTitle: {textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  resetBtn: {
    marginTop: 200,
  },
});

export default GameScreen;
