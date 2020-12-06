import React from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function ConsultGuard(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en consulta de guardias</Text>
      <Button title="Guardias" onPress={() => navigation.navigate('guard')} />
    </View>
  );
}
