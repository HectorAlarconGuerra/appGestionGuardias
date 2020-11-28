import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ConsultAdvance(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en consulta de adelantos</Text>
      <Button
        title="Adelantos"
        onPress={() => navigation.navigate('advancement')}
      />
    </View>
  );
}
