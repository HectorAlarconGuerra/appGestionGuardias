import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Supervision(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Actividades de supervisión</Text>
      <Button
        title="Asignar de turno"
        onPress={() => navigation.navigate('asignturn')}
      />
      <Button
        title="Consultar de turno"
        onPress={() => navigation.navigate('cosultturn')}
      />
      <Button
        title="Inicio del turno"
        onPress={() => navigation.navigate('startturn')}
      />
      <Button
        title="Salida del turno"
        onPress={() => navigation.navigate('finishturn')}
      />
      <Button
        title="Recordatorio de reportes"
        onPress={() => navigation.navigate('reminder')}
      />
      <Button
        title="Ingresar reportes"
        onPress={() => navigation.navigate('enterreport')}
      />
      <Button
        title="Consultar reportes"
        onPress={() => navigation.navigate('consultreport')}
      />
      {/*
      <Button
        title="Ir a Guardias"
        onPress={() => navigation.navigate('contact', {screen: 'guard'})}
/>*/}
    </View>
  );
}
