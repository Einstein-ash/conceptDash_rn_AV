
import React from 'react';
import { FlatList, Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import Page1 from './pages/AboutPage1';
import Page2 from './pages/AboutPage2';
import Page3 from './pages/AboutPage3';

const pages = [<Page1 />, <Page2 />, <Page3 />];
const { width } = Dimensions.get('window');

const AboutScreen: React.FC = () => {
  const renderItem = ({ item }: { item: React.ReactNode }) => {
    return <View style={{ width: width }}>{item}</View>;
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      // You can add pagingEnabled here if you want it to snap
      pagingEnabled 
    >
      <Page1 />
      <Page2 />
      <Page3 />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutScreen;