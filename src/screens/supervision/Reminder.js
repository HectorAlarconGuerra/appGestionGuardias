import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Reminder(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Recordatorios</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
