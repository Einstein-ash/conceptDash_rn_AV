
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const CAROUSEL_DATA = [
  {
    id: 1,
    title: 'Mission',
    description: 'Our mission is to support our client\'s vision and business goals by providing smart solutions in Architecture, Engineering, Planning and Software.',
    image: require('../../../assets/images/aboutImages/Mission.png'), 
  },
  {
    id: 2,
    title: 'Vision',
    description: 'Create knowledge based, solution driven work culture using the cutting-edge technology with our employee partners to serve the needs of our clients.',
    image: require('../../../assets/images/aboutImages/Vision.png'), 
  },
  {
    id: 3,
    title: 'Our Process',
    description: 'A dedicated journey from concept to creation, where every step is rooted in intention, innovation and impact.',
    image: require('../../../assets/images/aboutImages/Process.png'), 
  },
];

const InfoCarousel = () => {
  const carouselRef = useRef<ICarouselInstance>(null);
const renderItem = ({ item }: { item: typeof CAROUSEL_DATA[0] }) => (
  // --- CHANGE: Complete rework of the card structure ---
  <View style={styles.cardContainer}>
    <View style={styles.cardHeader}>
      <Icon name="shuffle" size={16} color="#8E8E93" />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Icon name="maximize-2" size={16} color="#8E8E93" />

    </View>
    <Image source={item.image} style={styles.cardImage} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  </View>
);

  return (
    <View style={styles.container}>
<Carousel
  ref={carouselRef}
  loop={false}
  // --- CHANGE: Adjust width to create the 'peek' effect ---
  width={width * 0.9} 
  height={width * 1.25} // --- CHANGE: Made the carousel taller ---
  data={CAROUSEL_DATA}
  scrollAnimationDuration={500}
  renderItem={renderItem}
  // --- NEW: Disable swipe gesture so the page can scroll ---
  enabled={false} 
/>
      <TouchableOpacity
        style={[styles.arrowButton, styles.leftArrow]}
        onPress={() => carouselRef.current?.prev()}
      >
        <Icon name="chevron-left" size={24} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.arrowButton, styles.rightArrow]}
        onPress={() => carouselRef.current?.next()}
      >
        <Icon name="chevron-right" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 30,
//     alignItems: 'center',
//   },
//  cardContainer: {
//     width: width * 0.85, // Card is 85% of screen width
//     height: width * 1.1,  // Card is taller
//     backgroundColor: '#1E1E22',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//     overflow: 'hidden',
//     alignItems: 'center',
//     padding: 15,
//     // iOS Shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     // Android Shadow
//     elevation: 15,
//   },
//     cardHeader: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//     cardTitle: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   cardImage: {
//     width: '100%',
//     height: '65%',
//     borderRadius: 20,
//     marginBottom: 15,
//   },
//   textContainer: {
//     flex: 1,
//     padding: 15,
//     justifyContent: 'center',
//   },
//     descriptionContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   cardDescription: {
//     color: '#AEAEB2',
//     fontSize: 14,
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   arrowButton: {
//     position: 'absolute',
//     top: '40%',
//     transform: [{ translateY: -12 }],
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     borderRadius: 30,
//     padding: 8,
//   },
//   leftArrow: {
//     left: 10,
//   },
//   rightArrow: {
//     right: 10,
//   },
// });

// src/screens/About/components/InfoCarousel.tsx -> styles

const styles = StyleSheet.create({
  // --- CHANGE: All styles updated for the new design ---
  container: {
    alignItems: 'flex-start', // Align carousel to the left
  },
  cardContainer: {
    width: width * 0.8, // Card is 80% of screen width
    height: '100%',      // Fills the carousel height
    backgroundColor: '#1E1E22',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // Android Shadow
    elevation: 15,
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18, // Slightly smaller title
    fontWeight: '600',
  },
  cardImage: {
    width: '100%',
    height: '60%', // Adjusted height
    borderRadius: 20,
    marginBottom: 20, // More space
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardDescription: {
    color: '#AEAEB2',
    fontSize: 13.5, // Smaller description text
    textAlign: 'center',
    lineHeight: 19,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%', // Vertically centered
    transform: [{ translateY: -22 }], // Adjust for button size
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: {
    left: 10, // Positioned near the left edge
  },
  rightArrow: {
    right: width * 0.1 - 22, // Positioned over the 'peek' area
  },
});


export default InfoCarousel;