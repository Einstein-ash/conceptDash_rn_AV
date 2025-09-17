// src/screens/Projects/components/ProjectCard.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import type { Project } from '../../../data/projects';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
  <View style={styles.cardContainer}>
    <Image source={project.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{project.title}</Text>
      {/* --- CHANGE: Using nested Text to bold the category --- */}
      <Text style={styles.details}>
        <Text style={{ fontWeight: 'bold' }}>{project.category}</Text>
        {'\n'}
        {project.location}
        {'\n'}
        {project.year}
      </Text>
    </View>
  </View>
  );
};

// const styles = StyleSheet.create({
//   cardContainer: {
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#EAEAEA',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//   },
//   image: {
//     width: '100%',
//     height: 180,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   textContainer: {
//     padding: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1C1C1E',
//     marginBottom: 8,
//   },
//   details: {
//     fontSize: 14,
//     color: '#8E8E93',
//     lineHeight: 20,
//   },
// });


const styles = StyleSheet.create({
  // --- CHANGE: All styles updated for a horizontal layout ---
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1, // Takes up the remaining space
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A1B9A', // Purple color for title
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#333',
    lineHeight: 21,
  },
});

export default ProjectCard;