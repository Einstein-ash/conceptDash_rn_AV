
import React from 'react';
import { Dimensions, ScrollView, StyleSheet} from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigators/types.tsx';

import Home from '../components/HomePage/Home'
import Page2 from '../components/HomePage/Page2'
import Page3 from '../components/HomePage/Page3'
import Page4 from '../components/HomePage/Page4'


type Props = StackScreenProps<RootStackParamList, 'Home'>;
const { height: screenHeight } = Dimensions.get('window');


function HomePage({ route }: Readonly<Props>) {
  const onScroll = route.params?.onScroll;


  return (

            <ScrollView 
              style={styles.scrollContainer}
              pagingEnabled={true}
              showsVerticalScrollIndicator={false}
              onScroll={onScroll} 
              scrollEventThrottle={16} 
            >
              <Home style={styles.fullScreen} />
              <Page2 style={styles.fullScreen} />
              <Page3 style={styles.fullScreen} />
              <Page4 style={styles.fullScreen} />
            </ScrollView>

  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  fullScreen: {
    height: screenHeight,
    width: '100%',
  },
});


export default HomePage;