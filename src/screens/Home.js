import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

export default function Home(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Home</Text>
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      {/*      <Button
        title="Ir a Guardias"
        onPress={() => navigation.navigate('contact', {screen: 'guard'})}
      />//Este código es cuando viajamos a un screen que está en otro stack
*/}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 390,
    marginTop: 20,
    marginBottom: 20,
  },
});
