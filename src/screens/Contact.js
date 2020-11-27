import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Contact(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en la CONTACT</Text>
      <Button title="About" onPress={() => navigation.navigate('about')} />
    </View>
  );
}
