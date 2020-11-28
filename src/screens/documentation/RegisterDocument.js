import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RegisterDocument(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en registro de documentos</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
