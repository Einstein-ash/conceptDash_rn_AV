import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList , ImageBackground} from 'react-native';
import { allProjects, Project } from '../../data/projects';
import FilterMenu from './components/FilterMenu';
import ProjectCard from './components/ProjectCard';

import { useHeaderLayout } from '../../hooks/useHeaderLayout';

const categories = ['All', 'Construction', 'Architecture', 'Railways', 'Engineering'];

const ProjectsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

      const { totalHeaderHeight } = useHeaderLayout();

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
         <ImageBackground 
        source={require('../../assets/images/page4/page4_bg.png')} // <-- PUT YOUR IMAGE PATH HERE
        style={styles.backgroundImage}
      >


  <View style={[styles.container, { paddingTop: totalHeaderHeight + 10,}]}>
 
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
    // paddingTop: 40,
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