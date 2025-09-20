// src/screens/Stories/StoriesScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions ,ImageBackground} from 'react-native';
import { allStories, Story } from '../../data/stories';
import FilterMenu from './components/FilterMenu';
import StoryCarousel from './components/StoryCarousel';
import { useHeaderLayout } from '../../hooks/useHeaderLayout';

const categories = ['All', 'Articles', 'Insights', 'Mentions'];
const { width: screenWidth } = Dimensions.get('window');

const StoriesScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStories, setFilteredStories] = useState<Story[]>(allStories);
      const { totalHeaderHeight } = useHeaderLayout();

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredStories(allStories);
    } else {
      const filtered = allStories.filter(
        (story) => story.category === selectedCategory
      );
      setFilteredStories(filtered);
    }
  }, [selectedCategory]);

  return (
             <ImageBackground 
            source={require('../../assets/images/page4/page4_bg.png')} // <-- PUT YOUR IMAGE PATH HERE
            style={styles.backgroundImage}
          >

    <View style={[styles.container, {paddingTop: totalHeaderHeight + 5}]}>
      <View style={styles.breadcrumbContainer}>
        <Text style={styles.breadcrumbText}>Home </Text>
        <Text style={styles.breadcrumbText}>&gt; </Text>
        <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>Stories</Text>
      </View>
      <View style={styles.mainContent}>
        <FilterMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          />
        <StoryCarousel stories={filteredStories} containerWidth={screenWidth - 120} />
      </View>
    </View>
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
    paddingHorizontal: 25,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    paddingLeft: 25,
  },
  breadcrumbText: {
    color: '#8E8E93',
    fontSize: 16,
  },
  breadcrumbActive: {
    color: '#1C1C1E',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
  },
});

export default StoriesScreen;