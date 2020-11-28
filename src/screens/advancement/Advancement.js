import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Advancement(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Adelantos de sueldos</Text>
      <Button title="Guardias" onPress={() => navigation.navigate('guard')} />
      <Button
        title="Registrar adelantos"
        onPress={() => navigation.navigate('registeradvance')}
      />
      <Button
        title="Consultar adelantos"
        onPress={() => navigation.navigate('consultadvance')}
      />
    </View>
  );
}
