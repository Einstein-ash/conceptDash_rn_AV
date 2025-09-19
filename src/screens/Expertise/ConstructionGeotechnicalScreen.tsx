
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { height } = Dimensions.get('window');

const ConstructionGeotechnicalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="tool" size={60} color="#6A1B9A" style={styles.icon} />
      <Text style={styles.title}>Under Construction</Text>
      <Text style={styles.subtitle}>
        This page is currently being designed.
        {'\n'}
        Please check back soon!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    padding: 20,
  },
  icon: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 24,
  },
});


export default ConstructionGeotechnicalScreen;