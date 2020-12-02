import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import Navigation from './src/navigation/Navigation';

import auth from '@react-native-firebase/auth';

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});
