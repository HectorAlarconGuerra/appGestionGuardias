import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Appbar, TextInput, Button} from 'react-native-paper';

export default function RegisterGuard(props) {
  const {navigation} = props;
  const ref = firestore().collection('guardias');

  return (
    <>
      <Appbar>
        <Appbar.Content title={'Lista de guardias'} />
      </Appbar>
      <ScrollView style={{flex: 1}}>
        <Text>Lista de guardias SERPROEMCAM</Text>
      </ScrollView>
      <TextInput label={'Nuevo guardia'} onChangeText={() => {}} />
      <Button onPress={() => {}}>Agregar guardia</Button>
    </>
  );
}

{
  /* <View>
      <Text>Estamos en registros de guardias empresa S</Text>
      <Button title="Guardias" onPress={() => navigation.navigate('guard')} />//se necesita el botón de react-native
   </View>*/
}
