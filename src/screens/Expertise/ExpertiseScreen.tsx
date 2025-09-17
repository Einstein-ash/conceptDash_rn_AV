
// src/screens/About/AboutScreen.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpertiseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expertise Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
  },
});

export default ExpertiseScreen;