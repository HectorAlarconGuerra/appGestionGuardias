import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddDocuments from './AddDocuments';
import ActionBar from './ActionBar';

export default function ListDocuments() {
  const [showList, setShowList] = useState(true);
  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>Documento1</Text>
          <Text>Documento2</Text>
          <Text>Documento3</Text>
          <Text>Documento4</Text>
          <Text>Documento5</Text>
          <Text>Documento6</Text>
          <Text>Documento7</Text>
          <Text>Documento8</Text>
        </>
      ) : (
        <AddDocuments />
      )}

      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});
