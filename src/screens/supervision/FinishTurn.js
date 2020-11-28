import React from 'react';
import {View, Text, Button} from 'react-native';

export default function FinishTurn(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en salida de turnos</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
