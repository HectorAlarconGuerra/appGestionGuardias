import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterGuard(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en registros de guardias</Text>
      <Button title="Guardias" onPress={() => navigation.navigate('guard')} />
    </View>
  );
}
