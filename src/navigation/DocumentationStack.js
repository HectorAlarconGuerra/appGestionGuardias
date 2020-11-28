import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Documentation from '../screens/documentation/Documentation';
import ScheduleDocumentation from '../screens/documentation/ScheduleDocumentation';
import ConsultDocumentation from '../screens/documentation/ConsultDocumentation';
import RegisterDocument from '../screens/documentation/RegisterDocument';
import ConsultDocument from '../screens/documentation/ConsultDocument';

const Stack = createStackNavigator();

export default function DocumentationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="documentation"
        component={Documentation}
        options={{title: 'Documentación'}}
      />
      <Stack.Screen
        name="scheduledocumentation"
        component={ScheduleDocumentation}
        options={{title: 'Agendar documentación'}}
      />
      <Stack.Screen
        name="consultdocumentation"
        component={ConsultDocumentation}
        options={{title: 'Consultar documentación'}}
      />
      <Stack.Screen
        name="registerdocument"
        component={RegisterDocument}
        options={{title: 'Registrar documentos'}}
      />
      <Stack.Screen
        name="consultdocument"
        component={ConsultDocument}
        options={{title: 'Cosultar documentos'}}
      />
    </Stack.Navigator>
  );
}
