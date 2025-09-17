// src/screens/Stories/StoriesScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { allStories, Story } from '../../data/stories';
import FilterMenu from './components/FilterMenu';
import StoryCarousel from './components/StoryCarousel';

const categories = ['All', 'Articles', 'Insights', 'Mentions'];

const StoriesScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStories, setFilteredStories] = useState<Story[]>(allStories);

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
    <View style={styles.container}>
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
        <StoryCarousel stories={filteredStories} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    paddingTop: 40,
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