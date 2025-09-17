// src/screens/Stories/components/FilterMenu.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type FilterMenuProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const FilterMenu: React.FC<FilterMenuProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <TouchableOpacity
            key={category}
            style={styles.categoryItem}
            onPress={() => onSelectCategory(category)}
          >
            <Icon
              name="arrow-right"
              size={20}
              color={isSelected ? '#6A1B9A' : 'transparent'}
            />
            <View>
              <Text style={isSelected ? styles.activeText : styles.inactiveText}>
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
  container: {
    paddingRight: 20,
    paddingLeft: 25,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  activeText: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '600',
    marginLeft: 8,
  },
  inactiveText: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '600',
    marginLeft: 8,
  },
  underline: {
    height: 1,
    backgroundColor: '#1b1a1aff',
    marginTop: 8,
    marginLeft: 8,
  },
});

export default FilterMenu;