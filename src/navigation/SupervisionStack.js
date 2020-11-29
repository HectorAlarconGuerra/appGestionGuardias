import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Supervision from '../screens/supervision/Supervision';
import AsignTurn from '../screens/supervision/AsignTurn';
import ConsultTurn from '../screens/supervision/ConsultTurn';
import StartTurn from '../screens/supervision/StartTurn';
import FinishTurn from '../screens/supervision/FinishTurn';
import Reminder from '../screens/supervision/Reminder';
import EnterReport from '../screens/supervision/EnterReport';
import ConsultReport from '../screens/supervision/ConsultReport';

const Stack = createStackNavigator();

export default function SupervisionStack(props) {
  const {navigation} = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="supervision"
        component={Supervision}
        options={{
          title: 'Supervisión',
          headerLeft: () => <Text onPress={navigation.openDrawer}>MENU</Text>,
          headerRight: () => <Text>POWER</Text>,
        }}
      />
      <Stack.Screen
        name="asignturn"
        component={AsignTurn}
        options={{title: 'Asignar turno'}}
      />
      <Stack.Screen
        name="cosultturn"
        component={ConsultTurn}
        options={{title: 'Consultar turno'}}
      />
      <Stack.Screen
        name="startturn"
        component={StartTurn}
        options={{title: 'Inicio turno'}}
      />
      <Stack.Screen
        name="finishturn"
        component={FinishTurn}
        options={{title: 'Salida turno'}}
      />
      <Stack.Screen
        name="reminder"
        component={Reminder}
        options={{title: 'Recordatorios de reportes'}}
      />
      <Stack.Screen
        name="enterreport"
        component={EnterReport}
        options={{title: 'Ingresar reportes'}}
      />
      <Stack.Screen
        name="consultreport"
        component={ConsultReport}
        options={{title: 'Consultar reportes'}}
      />
    </Stack.Navigator>
  );
}
