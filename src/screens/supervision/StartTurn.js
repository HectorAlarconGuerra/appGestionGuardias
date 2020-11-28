import React from 'react';
import {View, Text, Button} from 'react-native';

export default function StartTurn(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en inicio de turnos</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
