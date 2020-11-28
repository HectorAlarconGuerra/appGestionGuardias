import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ConsultClient(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en consulta de clientes</Text>
      <Button title="Clientes" onPress={() => navigation.navigate('client')} />
    </View>
  );
}
