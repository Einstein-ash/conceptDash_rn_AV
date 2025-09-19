
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigators/types';

import Home from '../components/HomePage/Home';
import Page2 from '../components/HomePage/Page2';
import Page3 from '../components/HomePage/Page3';
import Page4 from '../components/HomePage/Page4';


type Props = StackScreenProps<RootStackParamList, 'Home'>;
const { height: screenHeight } = Dimensions.get('window');

const PAGES = [<Home />, <Page2 style={undefined} />, <Page3 style={undefined} />, <Page4 />];

function HomePage({ route }: Readonly<Props>) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / screenHeight);
    if (index !== activePageIndex) {
      setActivePageIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {PAGES.map((Page, index) => (
          <View key={index}>
            {React.cloneElement(Page, { style: styles.fullScreen })}
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {PAGES.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activePageIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  fullScreen: {
    height: screenHeight,
    width: '100%',
  },
  dotsContainer: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -50 }],
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  activeDot: {
    backgroundColor: '#FFF',
  },
});

export default HomePage;