import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';
import SupervisionStack from './SupervisionStack';
import DocumentationStack from './DocumentationStack';
import SalaryAdvanceStack from './SalaryAdvanceStack';
import ServiceStack from './ServiceStack';
//import {Icon} from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  const buttonRight = () => {
    return (
      <IconButton icon="magnify" onPress={() => console.log('Buscador')} />
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'SERPROEMCAM',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="supervisionTab"
        component={SupervisionStack}
        options={{
          title: 'Supervisión',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="documentation"
        component={DocumentationStack}
        options={{
          title: 'Documentación',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="advance"
        component={SalaryAdvanceStack}
        options={{
          title: 'Adelantos',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="service"
        component={ServiceStack}
        options={{
          title: 'Servicios',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{title: '', headerLeft: () => buttonLeft()}}
      />
    </Stack.Navigator>
  );
}
