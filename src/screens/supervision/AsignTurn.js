import React from 'react';
import {View, Text, Button} from 'react-native';

export default function AsignTurn(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en la Asignación de turnos</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
