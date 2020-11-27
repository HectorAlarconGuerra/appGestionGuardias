import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import moment from 'moment';
import AddDocuments from './AddDocuments';
import ActionBar from './ActionBar';
import Documents from './Documents';

import firestore from '@react-native-firebase/firestore';

export default function ListDocuments(props) {
  const {user} = props;
  const [showList, setShowList] = useState(true);
  const ref = firestore().collection(user.uid);
  const [document, setDocument] = useState([]);
  const [pastDocument, setPastDocument] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  //  console.log(document);

  useEffect(() => {
    setDocument([]);
    setPastDocument([]);
    ref
      .orderBy('dateBirth', 'asc')
      .get()
      .then((response) => {
        const itemsArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemsArray.push(data);
        });
        formatData(itemsArray);
      });
    setReloadData(false);
  }, [reloadData]);

  const formatData = (items) => {
    const currentDate = moment().set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    const documentTempArray = [];
    const pastDocumentTempArray = [];

    items.forEach((item) => {
      const dateDocument = new Date(item.dateBirth.seconds * 1000); //Fecha actual
      const dateDocumentDay = moment(dateDocument); //Objeto fecha
      const currentYear = moment().get('year'); //Año actual
      dateDocumentDay.set({year: currentYear});

      const diffDate = currentDate.diff(dateDocumentDay, 'days');
      const itemTemp = item;
      itemTemp.dateDocument = dateDocumentDay;
      itemTemp.days = diffDate;

      if (diffDate <= 0) {
        documentTempArray.push(itemTemp);
      } else {
        pastDocumentTempArray.push(itemTemp);
      }
    });
    setDocument(documentTempArray);
    setPastDocument(pastDocumentTempArray);
  };

  const deleteDocument = (document) => {
    Alert.alert(
      'Eliminar documento',
      `Estás seguro de eliminar el documento ${document.name} ${document.lastname}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            ref
              .doc(document.id)
              .delete()
              .then(() => {
                setReloadData();
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {showList ? (
        <ScrollView style={styles.scrollView}>
          {document.map((item, index) => (
            <Documents
              key={index}
              document={item}
              deleteDocument={deleteDocument}
            />
          ))}
          {pastDocument.map((item, index) => (
            <Documents
              key={index}
              document={item}
              deleteDocument={deleteDocument}
            />
          ))}
        </ScrollView>
      ) : (
        <AddDocuments
          user={user}
          setShowList={setShowList}
          setReloadData={setReloadData}
        />
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
  scrollView: {
    marginBottom: 50,
    width: '100%',
  },
});
