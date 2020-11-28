import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Advancement from '../screens/advancement/Advancement';
import Guard from '../screens/advancement/Guard';
import RegisterGuard from '../screens/advancement/RegisterGuard';
import ConsultGuard from '../screens/advancement/ConsultGuard';
import RegisterAdvance from '../screens/advancement/RegisterAdvance';
import ConsultAdvance from '../screens/advancement/ConsultAdvance';

const Stack = createStackNavigator();

export default function SalaryAdvanceStackStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="advancement"
        component={Advancement}
        options={{title: 'Adelantos de sueldos'}}
      />
      <Stack.Screen
        name="guard"
        component={Guard}
        options={{title: 'Guardias'}}
      />
      <Stack.Screen
        name="registerguard"
        component={RegisterGuard}
        options={{title: 'Registro de guardias'}}
      />
      <Stack.Screen
        name="consultguard"
        component={ConsultGuard}
        options={{title: 'Consulta de guardias'}}
      />
      <Stack.Screen
        name="registeradvance"
        component={RegisterAdvance}
        options={{title: 'Registrar adelantos'}}
      />
      <Stack.Screen
        name="consultadvance"
        component={ConsultAdvance}
        options={{title: 'Consultar adelantos'}}
      />
    </Stack.Navigator>
  );
}
