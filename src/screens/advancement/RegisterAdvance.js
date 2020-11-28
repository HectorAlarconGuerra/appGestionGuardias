import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterAdvance(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en registro de adelantos</Text>
      <Button
        title="Adelantos"
        onPress={() => navigation.navigate('advancement')}
      />
    </View>
  );
}
