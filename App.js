import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Text} from 'react-native';

import Auth from './src/components/Auth';
import ListDocuments from './src/components/ListDocuments';

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
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListDocuments user={user} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});
