// src/screens/About/pages/Page1.tsx

import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import InfoCarousel from '../components/InfoCarousel';

const { height: screenHeight } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const AboutPage1: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <View style={styles.breadcrumbContainer}>
          <Text style={styles.breadcrumbText}>Home </Text>
          <Text style={styles.breadcrumbText}>&gt; </Text>
          <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>About Us</Text>
        </View>

        <Text style={styles.title}>
          Where Innovation Meets Intention - For Your Evolving Needs
        </Text>
        <Text style={styles.description}>
          Concept Dash seamlessly integrates creativity and technical rigor. With a strong commitment for future forward design and harnessing sustainability, we thrive with our tailored design intelligence for our partners and clients' evolving needs.
        </Text>
        <Text style={styles.description}>
          A dedicated team of 100+ experienced professionals with over 40 years of corporate experience in architecture, engineering and environmental services.
        </Text>

        <InfoCarousel />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // --- CHANGE: Switched to a light background ---
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Light grey background
    height: screenHeight,
  },
  contentContainer: {
    padding: 25,
    // --- CHANGE: Adjusted top padding to match design ---
    paddingTop: 40, 
  paddingBottom: 60,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align icon and text
    marginBottom: 25,
  },
  breadcrumbText: {
    // --- CHANGE: Darker text for light background ---
    color: '#8E8E93',
    fontSize: 16,
  },
  breadcrumbActive: {
    // --- CHANGE: Darker text and bold for active item ---
    color: '#1C1C1E',
    fontWeight: '600',
  },
  title: {
    // --- CHANGE: Purple color and adjusted styles ---
    color: '#6A1B9A',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 25,
  },
  description: {
    // --- CHANGE: Darker text for readability ---
    color: '#333333',
    fontSize: 13,
    lineHeight: 22,
    marginBottom: 16,
  },
});
export default AboutPage1;