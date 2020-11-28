import React from 'react';
import {View, Text, Button} from 'react-native';

export default function EnterReport(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en ingresar reportes</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
