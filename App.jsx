import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import color from './constants/color';
import choices from './data/mockData';

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const handleUserChoice = choice => {
    setUserChoice(choice);
    randomComputerChoice(choice);

    // console.warn('data', choice);
  };
  const randomComputerChoice = choice => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerRandomChoice = choices[randomIndex];
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (user, computerRandomChoice) => {
    if (user?.name === computerRandomChoice?.name) {
      setResult('Berabere!');
    } else if (
      (user?.name === 'Taş' && computerRandomChoice?.name === 'Makas') ||
      (user?.name === 'Kağıt' && computerRandomChoice?.name === 'Taş') ||
      (user?.name === 'Makas' && computerRandomChoice?.name === 'Kağıt')
    ) {
      setResult('Kazandın!');
    } else {
      setResult('Kaybettin!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>TAŞ KAĞIT MAKAS</Text>
        <Text style={styles.computerChoiceText}>Kullanıcı Seçimi</Text>

        <View style={styles.choices}>
          {choices?.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={
                choice?.name === userChoice?.name
                  ? [styles.button, styles.buttonActive] //burada tıkladığımz butonu belli ediyoruz.
                  : styles.button
              }
              onPress={() => {
                handleUserChoice(choice);
              }}>
              <Image source={choice?.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.resultText}>{result}</Text>

        <Text style={styles.computerChoiceText}>Bilgisayarın Seçimi</Text>
        <View style={styles.button}>
          <Image source={computerChoice?.image} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
  },
  computerChoiceText: {marginBottom: 20, fontSize: 25, color: color.acıkMor},
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: color.acıkMor,
    marginBottom: 20,
  },

  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: color.acıkMor,
  },
  image: {width: 90, height: 90},
  choices: {flexDirection: 'row', justifyContent: 'space-between', gap: 10},
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: color.acıkMor,
  },
  buttonActive: {
    borderWidth: 2,
  },
});
