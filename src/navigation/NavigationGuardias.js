import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import HomeStack from './HomeStack';
//import ContactStack from './ContactStack';
import SupervisionStack from './SupervisionStack';
import DocumentationStack from './DocumentationStack';
import SalaryAdvanceStack from './SalaryAdvanceStack';
import ServiceStack from './ServiceStack';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen
        name="home"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
     */}
      <Drawer.Screen
        name="supervisionTab"
        component={SupervisionStack}
        options={{title: 'Supervisión'}}
      />
      <Drawer.Screen
        name="documentation"
        component={DocumentationStack}
        options={{title: 'Documentos'}}
      />
      <Drawer.Screen
        name="advance"
        component={SalaryAdvanceStack}
        options={{title: 'Adelantos'}}
      />
      <Drawer.Screen
        name="service"
        component={ServiceStack}
        options={{title: 'Servicios'}}
      />
    </Drawer.Navigator>
  );
}
