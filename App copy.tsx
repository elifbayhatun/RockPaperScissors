/*import {
  SafeAreaView,
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  ActionSheetIOS,
  Button,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [result, setResult] = useState('');

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(String(Math.floor(Math.random() * 100) + 1));
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      },
    );

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Text>bugün istanbul günlerden..</Text>
        </TouchableOpacity>
        <Image
          source={require('./assets/horse.jpeg')}
          style={{width: 100, height: 200}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/8a/cb/57/8acb57c24044e4271bb3c2cadf563e7a.jpg',
          }}
          style={{width: 100, height: 200}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/8a/cb/57/8acb57c24044e4271bb3c2cadf563e7a.jpg',
          }}
          style={{width: 100, height: 200}}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/horse.jpeg')}
          style={{width: 100, height: 200}}
          resizeMode="contain"
        />

        <Switch />
      </ScrollView>
    </SafeAreaView>
  );
}
*/
