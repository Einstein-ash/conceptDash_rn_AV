
import React from 'react';
import { FlatList, Dimensions, View, ScrollView, StyleSheet, ImageBackground} from 'react-native';
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
  <ImageBackground 
    source={require('../../assets/images/page4/page4_bg.png')} // <-- PUT YOUR IMAGE PATH HERE
    style={styles.backgroundImage}
  >

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
</ImageBackground>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor:'#fff'
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default AboutScreen;