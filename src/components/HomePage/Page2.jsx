import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
// highlight-next-line
import Icon from 'react-native-vector-icons/Feather'; // <-- 1. Import the icon library

// Import your images (no change here)
import dept_2 from '../../assets/images/page2/dept_2.png';
import dept_3 from '../../assets/images/page2/dept_3.png';
import dept_1 from '../../assets/images/page2/dept_1.png';
import dept_4 from '../../assets/images/page2/dept_4.png';
import dept_5 from '../../assets/images/page2/dept_5.jpg';
import dept_6 from '../../assets/images/page2/dept_6.png';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // Card takes 75% of the screen width
const SPACING = 15;
const FULL_CARD_WIDTH = CARD_WIDTH + SPACING;

const Page2 = ({ style }) => {
  const expertiseData = [
    { id: 1, title: 'Architecture & Design', image: dept_1 },
    { id: 2, title: 'Urban Planning', image: dept_2 },
    { id: 3, title: 'Interior Design', image: dept_3 },
    { id: 4, title: 'Landscape Design', image: dept_4 },
    { id: 5, title: 'Construction', image: dept_5 },
    { id: 6, title: 'Engineering', image: dept_6 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={[styles.container, style]}>
      {/* 2. Pagination Dots on the left */}

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.brandText}>
            <Text style={styles.brandHighlight}>Concept Dash</Text> stands for quality, reliability and agility in every solution, shaping ideas into bespoke, future-ready infrastructure.
          </Text>
          <Text style={styles.subText}>
            From conceptual design to post-construction operations, We <Text style={styles.careText}>CARE!</Text>
          </Text>
        </View>

        <View style={styles.expertiseSection}>
          <Text style={styles.expertiseTitle}>Expertise</Text>
          <Text style={styles.backgroundCounter}>
            {String(activeIndex + 1).padStart(2, '0')}
          </Text>

          <FlatList
            horizontal
            data={expertiseData}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            snapToInterval={FULL_CARD_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={styles.cardsContent}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            renderItem={({ item }) => (
              // highlight-start
              // 3. The completely redesigned card
              <View style={styles.card}>
                <Image
                  source={item.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardTitleStrip}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={styles.iconCircle}>
                    <Icon name="arrow-up-right" size={24} color="#333" />
                  </View>
                </View>
              </View>
              // highlight-end
            )}
          />
        </View>
      </View>
    </View>
  );
};

// 4. All styles are updated to match the target design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row', // To align pagination and content
  },
  pagination: {
    paddingTop: 150,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  headerSection: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  brandText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 28,
    fontWeight: '400',
    textAlign : 'center'
  },
  brandHighlight: {
    color: '#8660d0', // A more muted color
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 15,
    fontSize: 18.5,
    color: '#333',
    lineHeight: 24,
    fontWeight: '400',
    textAlign : 'center',
    paddingBlockStart : 3,
    paddingBlockEnd : 3,
  },
  careText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize : 20
  },
  expertiseSection: {
    flex: 1,
  },
  expertiseTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#8660d0', 
    textAlign: 'center',
  },
  backgroundCounter: {
    fontSize: 180,
    fontWeight: 'bold',
    color: '#F3F4F6',
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: -1,
  },
  cardsContent: {
    paddingTop: 40,
    paddingHorizontal: (width * 0.25) / 2, // Center the cards correctly
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: 380,
    marginRight: SPACING,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTitleStrip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Allows text to wrap if it's long
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Page2;