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

const styles = StyleSheet.create({
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
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A1B9A', 
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#333',
    lineHeight: 21,
  },
});

export default ProjectCard;