import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Documents(props) {
  const {document, deleteDocument} = props;
  const pasat = document.days > 0 ? true : false;

  const infoDay = () => {
    if (document.days === 0) {
      return <Text style={{color: '#fff'}}>Entregar hoy</Text>;
    } else {
      const days = -document.days;

      return (
        <View style={styles.textCurrent}>
          <Text>{days}</Text>
          <Text>{days === 1 ? 'Día' : 'Días'}</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        pasat
          ? styles.pasat
          : document.days === 0
          ? styles.actual
          : styles.current,
      ]}
      onPress={() => deleteDocument(document)}>
      <Text style={styles.userName}>
        {document.name}
        {document.lastname}
      </Text>
      {pasat ? <Text style={{color: '#fff'}}>Pasado</Text> : infoDay()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
  },
  actual: {
    backgroundColor: '#559204',
  },
  current: {
    backgroundColor: '#1ae1f2',
  },
  pasat: {
    backgroundColor: '#820000',
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
  textCurrent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
