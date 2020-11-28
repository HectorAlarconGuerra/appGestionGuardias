import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterClient(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en registro de clientes</Text>
      <Button title="Clientes" onPress={() => navigation.navigate('client')} />
    </View>
  );
}
