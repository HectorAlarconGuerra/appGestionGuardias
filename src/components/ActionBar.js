import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function ActionBar(props) {
  const {showList, setShowList} = props;

  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewClose}>
        <Text style={styles.txt} onPress={() => auth().signOut()}>
          Cerrar Sessión
        </Text>
      </View>
      <View style={styles.viewAdd}>
        <Text style={styles.txt} onPress={() => setShowList(!showList)}>
          {showList ? 'Nuevo doc' : 'Cancelar doc'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  viewClose: {
    backgroundColor: '#820000',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  viewAdd: {
    backgroundColor: '#1ea1f2',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 50,
    marginHorizontal: 20,
    marginLeft: 10,
  },
  txt: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
