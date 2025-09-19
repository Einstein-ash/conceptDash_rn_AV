// src/screens/About/components/StatsCarousel.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

const STATS_DATA = [
  { id: 1, number: '100+', label: 'Professionals' },
  { id: 2, number: '500+', label: 'Projects' },
  { id: 3, number: '4', label: 'Continents' },
];

const StatsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      translateX.value = withTiming(-100, { duration: 400, easing: Easing.ease });
      opacity.value = withTiming(0, { duration: 400 });

      // After a delay, change the text and animate in
      setTimeout(() => {
        runOnJS(setCurrentIndex)((prevIndex) => (prevIndex + 1) % STATS_DATA.length);
        translateX.value = 100; // Move to the right, off-screen
        translateX.value = withTiming(0, { duration: 400, easing: Easing.ease });
        opacity.value = withTiming(1, { duration: 400 });
      }, 500);
    }, 3000); // Change stat every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <Text style={styles.numberText}>{STATS_DATA[currentIndex].number}</Text>
        <Text style={styles.labelText}>{STATS_DATA[currentIndex].label}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:250,
    backgroundColor: '#1E1E22',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 40,
    textAlign: 'center',
    alignSelf: 'center',
    overflow: 'hidden', // This is crucial to hide the sliding text
  },
  textContainer: {
     textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10,
  },
  labelText: {
    color: '#AEAEB2',
    fontSize: 16,
  },
});

export default StatsCarousel;