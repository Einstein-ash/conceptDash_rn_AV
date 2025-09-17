// src/screens/Stories/components/StoryCarousel.tsx

import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { Story } from '../../../data/stories';

const { width } = Dimensions.get('window');

type StoryCarouselProps = {
  stories: Story[];
};

const StoryCarousel: React.FC<StoryCarouselProps> = ({ stories }) => {
  const carouselRef = useRef<ICarouselInstance>(null);

  const animationStyle = (value: number) => {
    'worklet';
    const inputRange = [-1, 0, 1];
    const translate = interpolate(value, inputRange, [-width * 0.4, 0, width * 0.4]);
    const rotateY = interpolate(value, inputRange, [-45, 0, 45]);
    const scale = interpolate(value, inputRange, [0.8, 1, 0.8]);

    return {
      transform: [
        { perspective: 1000 },
        { translateX: translate },
        { rotateY: `${rotateY}deg` },
        { scale },
      ],
    };
  };

  const renderItem = ({ item }: { item: Story }) => (
    <View style={styles.cardWrapper}>
      <ImageBackground source={item.image} style={styles.cardContainer} imageStyle={{ borderRadius: 20 }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <TouchableOpacity style={styles.expandButton}>
          <Icon name="arrow-up-right" size={20} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>{item.location}</Text>
          <Text style={styles.readTimeText}>{item.readTime}</Text>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.authorText}>By {item.author}</Text>
          <Text style={styles.dateText}>Posted on: {item.date}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop
        width={width * 0.6}
        height={width * 0.9}
        data={stories}
        renderItem={renderItem}
        style={{ width: width - 120 }} // Full width minus the filter menu
        customAnimation={animationStyle}
      />
      <TouchableOpacity style={[styles.arrow, styles.leftArrow]} onPress={() => carouselRef.current?.prev()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.arrow, styles.rightArrow]} onPress={() => carouselRef.current?.next()}>
        <Icon name="arrow-right" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

// All the styles to make it look perfect
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'flex-end',
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  gradient: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, borderRadius: 20 },
  expandButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {},
  locationText: { color: '#EAEAEA', fontSize: 13, fontWeight: '600' },
  readTimeText: { color: '#EAEAEA', fontSize: 13, fontWeight: '600', marginBottom: 10 },
  titleText: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', lineHeight: 26, marginBottom: 15 },
  authorText: { color: '#D1D1D1', fontSize: 13 },
  dateText: { color: '#D1D1D1', fontSize: 13 },
  arrow: { position: 'absolute', top: '50%', transform: [{ translateY: -18 }] },
  leftArrow: { left:30 },
  rightArrow: { right: 30 },
});

export default StoryCarousel;