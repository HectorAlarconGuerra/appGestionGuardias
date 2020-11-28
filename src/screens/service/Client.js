import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Client(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Clientes</Text>
      <Button
        title="Registrar cliente"
        onPress={() => navigation.navigate('registerclient')}
      />
      <Button
        title="Consultar cliente"
        onPress={() => navigation.navigate('consultclient')}
      />
      <Button
        title="Servicios de seguridad"
        onPress={() => navigation.navigate('service')}
      />
    </View>
  );
}
