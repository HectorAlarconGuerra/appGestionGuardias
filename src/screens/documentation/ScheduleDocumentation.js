import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Auth from '../../components/Auth';
import ListDocuments from '../../components/ListDocuments';

import auth from '@react-native-firebase/auth';

export default function ScheduleDocumentation(props) {
  const {navigation} = props;
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;
  return (
    <View>
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.background}>
          {user ? <ListDocuments user={user} /> : <Auth />}
        </SafeAreaView>
        <Text>Estamos en agendar documentación</Text>
        <Button
          title="Documentation"
          onPress={() => navigation.navigate('documentation')}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '85%',
  },
});
