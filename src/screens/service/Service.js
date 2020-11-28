import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Service(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Servicios de seguridad</Text>
      <Button title="Clientes" onPress={() => navigation.navigate('client')} />
      <Button
        title="Solicitar servicio"
        onPress={() => navigation.navigate('requestservice')}
      />
      <Button
        title="Revisar solicitud"
        onPress={() => navigation.navigate('checkrequest')}
      />
      <Button
        title="Responder solicitud"
        onPress={() => navigation.navigate('answerrequest')}
      />
    </View>
  );
}
