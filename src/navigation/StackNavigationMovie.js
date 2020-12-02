import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation() {
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => console.log('Open Menu')} />;
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'TheMovieApp', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen name="movie" component={Movie} options={{title: ''}} />
      <Stack.Screen
        name="news"
        component={News}
        options={{title: 'Nuevas Películas'}}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{title: 'Peliculas Populares'}}
      />
      <Stack.Screen name="search" component={Search} options={{title: ''}} />
    </Stack.Navigator>
  );
}
