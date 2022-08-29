import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Description {
  description: string;
}

export default function Description({ description }: Description) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description :</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
});
