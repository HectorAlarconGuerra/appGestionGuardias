import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ConsultDocumentation(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en consultar documentación</Text>
      <Button
        title="Documentation"
        onPress={() => navigation.navigate('documentation')}
      />
    </View>
  );
}
