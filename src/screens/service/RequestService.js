import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RequestService(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en solicitud de servicios</Text>
      <Button
        title="Servicios"
        onPress={() => navigation.navigate('service')}
      />
    </View>
  );
}
