import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { navigate } from '../../navigators/navigationUtils';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;
const SPACING = 15;
const FULL_CARD_WIDTH = CARD_WIDTH + SPACING;


const projectsData = [
  {
    id: 1,
    title: 'Conservation Halton - Kelso Boat Launch',
    image: require('../../assets/images/page3/project1.png'),
  },
  {
    id: 2,
    title: 'TRCA Lower Don Trail Access Upgrade',
    image:require('../../assets/images/page3/project2.png'),
  },
  {
    id: 3,
    title: 'Highway 66 Resurfacing and cross-over Project - Kirkland',
    image:  require('../../assets/images/page3/project3.png'),
  },
  {
    id: 4,
    title: 'TMP - McIntosh Perry',
    image: require('../../assets/images/page3/project4.png'),
  },
  {
    id: 5,
    title: '515 Park Avenue, East, Chatham Kent',
    image: require('../../assets/images/page3/project5.jpg'),
  },
  {
    id: 6,
    title: '4 Needham St, Lindsay',
    image:require('../../assets/images/page3/project3.png'),
  },
];

const Page3: React.FC<{ style?: any }> = ({ style }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  return (
    <ImageBackground
      source={require('../../assets/images/page3/page3_bg.png')}
      style={[styles.container, style]}
    >
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>Smart Sustainable Design Solutions</Text>
          <Text style={styles.subtitle}>Your Vision, Our Purpose</Text>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
        </View>

        <View style={styles.carouselContainer}>
          <FlatList
            horizontal
            data={projectsData}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            snapToInterval={FULL_CARD_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={styles.cardsContent}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            renderItem={({ item }) => (
              <ImageBackground
                source={item.image}
                style={styles.card}
                imageStyle={{ borderRadius: 0 }}
              >
                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.exploreButton}
                    onPress={() => navigate('Projects')}
                  >
                    <Text style={styles.exploreButtonText}>EXPLORE</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 30, 40, 0.7)',
    paddingTop: 100,
  },
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  mainTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    letterSpacing: 1,
  },
  carouselContainer: {
    flex: 1,
  },
  cardsContent: {
    paddingHorizontal: (width - CARD_WIDTH) / 2,
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: 460,
    marginRight: SPACING,
    borderRadius: 0,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems : 'center',
    justifyContent : 'center',
    width : CARD_WIDTH,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  exploreButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,

  },
  exploreButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Page3;