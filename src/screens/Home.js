import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical';
import {getNewsMoviesApi} from '../api/movies';

export default function Home(props) {
  const {navigation} = props;
  const [newMovies, setNewMovies] = useState(null);
  console.log(newMovies);

  useEffect(() => {
    getNewsMoviesApi().then((response) => {
      setNewMovies(response.results);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>Nuevas películas</Title>
          <CarouselVertical data={newMovies} />
        </View>
      )}

      {/*      <Button
        title="Ir a Guardias"
        onPress={() => navigation.navigate('contact', {screen: 'guard'})}
      />//Este código es cuando viajamos a un screen que está en otro stack
*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 390,
    marginTop: 20,
    marginBottom: 20,
  },
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
