import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Guard(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Guardias</Text>
      <Button
        title="Registrar guardia"
        onPress={() => navigation.navigate('registerguard')}
      />
      <Button
        title="Consultar guardia"
        onPress={() => navigation.navigate('consultguard')}
      />
      <Button
        title="Adelantos de sueldo"
        onPress={() => navigation.navigate('advancement')}
      />
    </View>
  );
}
