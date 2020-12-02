import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';

export default function DrawerContent(props) {
  const {navigation} = props;
  const [active, setActive] = useState('home');
  console.log(props);
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item label="Inicio" active={false} />
        <Drawer.Item label="Peliculas populares" active={false} />
        <Drawer.Item label="Nuebas peliculas" active={false} />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
