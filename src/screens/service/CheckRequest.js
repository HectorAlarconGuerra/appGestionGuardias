import React from 'react';
import {View, Text, Button} from 'react-native';

export default function CheckRequest(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en revisar solicitud</Text>
      <Button
        title="Servicios"
        onPress={() => navigation.navigate('service')}
      />
    </View>
  );
}
