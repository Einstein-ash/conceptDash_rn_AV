// src/screens/Projects/components/FilterMenu.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type FilterMenuProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const FilterMenu: React.FC<FilterMenuProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
  <View style={styles.container}>
    {categories.map((category) => {
      const isSelected = category === selectedCategory;
      return (
        <TouchableOpacity key={category} onPress={() => onSelectCategory(category)}>
          <View style={styles.categoryItem}>
            <Text style={isSelected ? styles.activeText : styles.inactiveText}>
              {isSelected && '→ '}
              {category}
            </Text>
            <View style={styles.underline} />
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
  );
};

const styles = StyleSheet.create({
  // --- CHANGE: All styles updated for a horizontal layout ---
  container: {
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    marginBottom: 30,
    width: '100%',
  },
  categoryItem: {
    // alignItems: 'left',
    paddingLeft:30,
  },
  activeText: {
    fontSize: 16,
    color: '#6A1B9A', // Purple color
    fontWeight: '600',
    marginBottom: 6,
  },
  inactiveText: {
    fontSize: 16,
    color: '#8E8E93', // Grey color
    fontWeight: '600',
    marginBottom: 6,
  },
  underline: {
    height: 1,
    width: '80%',
    backgroundColor: '#242020ff',
  },
});


export default FilterMenu;