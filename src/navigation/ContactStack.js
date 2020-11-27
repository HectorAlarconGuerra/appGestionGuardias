import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/Contact';
import Guard from '../screens/Guards';

const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
      <Stack.Screen
        name="guard"
        component={Guard}
        options={{title: 'Guardias'}}
      />
    </Stack.Navigator>
  );
}
