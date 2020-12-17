import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {List} from 'react-native-paper';
//import {View, Text, Button} from 'react-native';

function Guard({id, title, complete}) {
  async function toggleComplete() {
    await firestore().collection('guardias').doc(id).update({
      complete: !complete,
    });
  }
  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      left={(props) => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  );
}
/*
const {navigation} = props;

    <View>
      <Text>Guardias</Text>
      <Button
        title="Registrar guardia"
        onPress={() => navigation.navigate('registerguard')}
      />
      <Button
        title="Consultar guardia"
        onPress={() => navigation.navigate('consultguard')}
      />
      <Button
        title="Adelantos de sueldo"
        onPress={() => navigation.navigate('advancement')}
      />
    </View>

*/

export default React.memo(Guard);
