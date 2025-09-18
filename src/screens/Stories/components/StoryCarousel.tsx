import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Animated, {
   Extrapolate,
   interpolate,
   useAnimatedStyle,
   SharedValue, // Import SharedValue directly
 } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { Story } from '../../../data/stories';

type StoryCarouselProps = {
  stories: Story[];
  containerWidth: number;
};

const StoryCarousel: React.FC<StoryCarouselProps> = ({ stories, containerWidth }) => {
  const carouselRef = useRef<ICarouselInstance>(null);

  const renderItem = ({
    item,
    animationValue,
  }: {
    item: Story;
    animationValue: SharedValue<number>;
  }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        Math.abs(animationValue.value),
        [0, 1],
        [1, 0],
        Extrapolate.CLAMP
      );
      return { opacity };
    });

    return (
      <View style={styles.cardWrapper}>
        <ImageBackground
          source={item.image}
          style={styles.cardContainer}
          imageStyle={{ borderRadius: 12 }}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.textContainerDark}
          >
            <Text style={styles.locationText}>{item.location}</Text>
            <Text style={styles.readTimeText}>{item.readTime}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.authorText}>By {item.author}</Text>
            <Text style={styles.dateText}>Posted on: {item.date}</Text>
          </LinearGradient>

          <Animated.View style={[styles.textContainerWhite, animatedStyle]}>
            <Text style={styles.locationTextDark}>{item.location}</Text>
            <Text style={styles.readTimeTextDark}>{item.readTime}</Text>
            <Text style={styles.titleTextDark}>{item.title}</Text>
            <Text style={styles.authorTextDark}>By {item.author}</Text>
            <Text style={styles.dateTextDark}>Posted on: {item.date}</Text>
          </Animated.View>

          <TouchableOpacity style={styles.expandButton}>
            <Icon name="arrow-up-right" size={20} color="#FFF" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop
        width={containerWidth * 1}
        height={containerWidth * 1.4}
        style={{ width: containerWidth }}
        data={stories}
        renderItem={renderItem}
        enabled={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 65,
        }}
      />
      <TouchableOpacity
        style={[styles.arrow, styles.leftArrow]}
        onPress={() => carouselRef.current?.prev()}
      >
        <Icon name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.arrow, styles.rightArrow]}
        onPress={() => carouselRef.current?.next()}
      >
        <Icon name="arrow-right" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'flex-end',
    backgroundColor: '#CCC',
    overflow: 'hidden',
  },
  textContainerDark: {
    padding: 20,
    paddingTop: 60,
  },
  textContainerWhite: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  expandButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  locationText: { color: '#EAEAEA', fontSize: 13, fontWeight: '600' },
  readTimeText: {
    color: '#EAEAEA',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 10,
  },
  authorText: { color: '#D1D1D1', fontSize: 13 },
  dateText: { color: '#D1D1D1', fontSize: 13 },
  locationTextDark: { color: '#8E8E93', fontSize: 13, fontWeight: '600' },
  readTimeTextDark: {
    color: '#8E8E93',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  titleTextDark: {
    color: '#6A1B9A',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 10,
  },
  authorTextDark: { color: '#A0A0A0', fontSize: 13 },
  dateTextDark: { color: '#A0A0A0', fontSize: 13 },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  leftArrow: { left: -10 },
  rightArrow: { right: -10 },
});

export default StoryCarousel;