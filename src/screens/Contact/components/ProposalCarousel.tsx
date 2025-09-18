import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const CAROUSEL_ITEMS = [
  { id: 1, title: 'Request a Proposal', subtitle: 'We Build!' },
  { id: 2, title: 'Join Our Team', subtitle: 'We Innovate!' },
  { id: 3, title: 'General Inquiry', subtitle: 'We Help!' },
];

const ProposalCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }: { item: typeof CAROUSEL_ITEMS[0] }) => (
    <LinearGradient
      colors={['#4A00E0', '#8A2BE2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Icon name="edit-3" size={24} color="rgba(255,255,255,0.7)" style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width * 0.7}
        height={width * 0.4}
        data={CAROUSEL_ITEMS}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        style={{ width: width }}
      />
      <View style={styles.paginationContainer}>
        {CAROUSEL_ITEMS.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 25,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D1D1',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6A1B9A',
  },
});

export default ProposalCarousel;