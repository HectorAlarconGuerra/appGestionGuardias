import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScheduleDocumentation(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en agendar documentación</Text>
      <Button
        title="Supervision"
        onPress={() => navigation.navigate('supervision')}
      />
    </View>
  );
}
