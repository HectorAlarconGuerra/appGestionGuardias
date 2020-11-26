import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Documents(props) {
  const {document} = props;

  return (
    <View>
      <Text>
        {document.name}
        {document.lastname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
