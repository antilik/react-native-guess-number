import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedUserNumber, setSelectedUserNumber] = useState();

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const inputHandler = (inputText) => {
    setValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetBtnHandler = () => {
    setValue('');
    setIsConfirmed(false);
  };

  const confirmBtnHandler = () => {
    const chosenNumber = parseInt(value);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetBtnHandler }]);
      return null;
    }

    setSelectedUserNumber(chosenNumber);
    setIsConfirmed(true);
    Keyboard.dismiss();
    // Alert.alert('Chosen Number:',
    //   `${chosenNumber}`,
    //   [{text: 'Okay', style: 'default' }]);
    setValue('');
  };

  const showChosenNumber = () => {
    return (
      <Card style={styles.summaryContainer}>
        <Text
          style={styles.chosenNumberText}
        >Your Chosen Number:</Text>
        <NumberContainer>{selectedUserNumber}</NumberContainer>
        <Button
          title='START GAME'
          onPress={() => {
            onStartGame(selectedUserNumber);
        }}
        />
      </Card>
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyboard}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        {isConfirmed ? showChosenNumber()
          :
          <Card
          style={{
            width: 300,
            maxWidth: '90%',
            alignItems: 'center',
          }}
        >
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            inputProps={{
              keyboardType: 'phone-pad',
              autoFocus: true,
              blurOnSubmit: true,
              autoCapitalize: 'none',
              autoCorrect: false,
              maxLength: 2,
              value: value,
              onChangeText: inputHandler,
            }}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.btnWrapper}>
              <Button
                title='Reset'
                onPress={resetBtnHandler}
                color={Colors.btnDisagree}
              />
            </View>
            <View style={styles.btnWrapper}>
              <Button
                title='Confirm'
                onPress={confirmBtnHandler}
                color={Colors.btnAgree}
              />
            </View>
          </View>
        </Card>
        }
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 80,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chosenNumberText: {
    paddingHorizontal: 10,
  },
});

export default StartGameScreen;
