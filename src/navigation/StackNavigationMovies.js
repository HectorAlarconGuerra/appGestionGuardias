import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';
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
          title: 'TheMovieApp',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: 'Nuevas Películas',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Peliculas Populares',
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
