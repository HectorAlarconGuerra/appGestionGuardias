import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Documentation(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Actividades de documentación</Text>
      <Button
        title="Agendar documentación"
        onPress={() => navigation.navigate('scheduledocumentation')}
      />
      <Button
        title="Consultar documentación"
        onPress={() => navigation.navigate('consultdocumentation')}
      />
      <Button
        title="Registrar documentos presentados"
        onPress={() => navigation.navigate('startturn')}
      />
      <Button
        title="Consultar documentos presentados "
        onPress={() => navigation.navigate('finishturn')}
      />
    </View>
  );
}
