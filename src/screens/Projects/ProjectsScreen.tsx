// src/screens/Projects/ProjectsScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { allProjects, Project } from '../../data/projects';
import FilterMenu from './components/FilterMenu';
import ProjectCard from './components/ProjectCard';

const categories = ['All', 'Construction', 'Architecture', 'Railways', 'Engineering'];

const ProjectsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  return (
  <View style={styles.container}>
 
      ListHeaderComponent={
        <>
          <View style={styles.breadcrumbContainer}>
            <Text style={styles.breadcrumbText}>Home </Text>
            <Text style={styles.breadcrumbText}>&gt; </Text>
            <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>Projects</Text>
          </View>
          <FilterMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </>
      }
    <FlatList
      data={filteredProjects}
      renderItem={({ item }) => <ProjectCard project={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 25,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    marginBottom: 30,
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
    flexDirection: 'row',
  },
  list: {
    flex: 1,
  },
});

export default ProjectsScreen;