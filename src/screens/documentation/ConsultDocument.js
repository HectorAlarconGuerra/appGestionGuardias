import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ConsultDocument(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en consulta de documentos presentados</Text>
      <Button
        title="Documentation"
        onPress={() => navigation.navigate('documentation')}
      />
    </View>
  );
}
