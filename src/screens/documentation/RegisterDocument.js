import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterDocument(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en registro de documentos presentados</Text>
      <Button
        title="Documentation"
        onPress={() => navigation.navigate('documentation')}
      />
    </View>
  );
}
