import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import HomeStack from './HomeStack';
//import ContactStack from './ContactStack';
//import SupervisionStack from './SupervisionStack';
//import DocumentationStack from './DocumentationStack';
//import SalaryAdvanceStack from './SalaryAdvanceStack';
//import ServiceStack from './ServiceStack';
import Home from '../screens/Home';
import contact from '../screens/Contact';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Drawer.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Drawer.Navigator>
  );
}

//export default function Navigation() {
//  return (
//    <Tab.Navigator>
//      {/*<Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />*/}
//      <Tab.Screen
//        name="supervisionTab"
//        component={SupervisionStack}
//        options={{title: 'Supervisión'}}
//      />
//      <Tab.Screen
//        name="documentation"
//        component={DocumentationStack}
//        options={{title: 'Documentos'}}
//      />
//      <Tab.Screen
//        name="advance"
//        component={SalaryAdvanceStack}
//        options={{title: 'Adelantos'}}
//      />
//      <Tab.Screen
//        name="service"
//        component={ServiceStack}
//        options={{title: 'Servicios'}}
//      />
//      {/*<Tab.Screen
//        name="contact"
//        component={ContactStack}
//        options={{title: 'Contact'}}
//      />*/}
//    </Tab.Navigator>
//  );
//}
