import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';
import SupervisionStack from './SupervisionStack';
import DocumentationStack from './DocumentationStack';
import SalaryAdvanceStack from './SalaryAdvanceStack';
import ServiceStack from './ServiceStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      {/*<Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />*/}
      <Tab.Screen
        name="supervisionTab"
        component={SupervisionStack}
        options={{title: 'Supervisión'}}
      />
      <Tab.Screen
        name="documentation"
        component={DocumentationStack}
        options={{title: 'Documentos'}}
      />
      <Tab.Screen
        name="advance"
        component={SalaryAdvanceStack}
        options={{title: 'Adelantos'}}
      />
      <Tab.Screen
        name="service"
        component={ServiceStack}
        options={{title: 'Servicios'}}
      />
      {/*<Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />*/}
    </Tab.Navigator>
  );
}
