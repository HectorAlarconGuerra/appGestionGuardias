import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Appbar, Button, TextInput} from 'react-native-paper';
import Guard from '../../screens/advancement/Guard';

export default function RegisterGuard() {
  //const {navigation} = props;
  const [guardia, setGuardia] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardias, setGuardias] = useState([]);

  const ref = firestore().collection('guardias');
  async function addGuardia() {
    await ref.add({
      title: guardia,
      complete: false,
    });
    setGuardia('');
  }
  {
    /*
  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {title, complete} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });
      setGuardias(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return null; // or a spinner
  }
*/
  }
  return (
    <>
      <Appbar>
        <Appbar.Content title={'Lista de guardias'} />
      </Appbar>
      <ScrollView style={{flex: 1}}>
        <Text>List of TODOs!</Text>
      </ScrollView>
      {/*<FlatList
        style={{flex: 1}}
        data={guardias}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Guard {...item} />}
      />*/}
      <TextInput
        label={'Nuevo guardia'}
        value={guardia}
        onChangeText={setGuardia}
      />

      <Button onPress={() => addGuardia()}>Agregar guardia</Button>
    </>
  );
}

{
  /* <View>
      <Text>Estamos en registros de guardias empresa S</Text>
      <Button title="Guardias" onPress={() => navigation.navigate('guard')} />//se necesita el botón de react-native
   </View>*/
}
