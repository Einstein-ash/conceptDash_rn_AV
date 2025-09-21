// src/screens/About/pages/Page1.tsx

import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import InfoCarousel from '../components/InfoCarousel';

const { height: screenHeight } = Dimensions.get('window');
const { width } = Dimensions.get('window');

import { useHeaderLayout } from '../../../hooks/useHeaderLayout';


const AboutPage1: React.FC = () => {

    const {  pageScreenHeight } = useHeaderLayout();
  return (
    <ScrollView style={[styles.container, { height: pageScreenHeight }]} showsVerticalScrollIndicator={false}>

      <View style={[styles.contentContainer ,styles.test_border1 , {height : '95%'}]}>
      {/* <View style={[styles.contentContainer ,styles.test_border1 ]}> */}
            <View style={styles.breadcrumbContainer}>
              <Text style={[styles.breadcrumbText, {fontSize : pageScreenHeight * 0.02}]}>Home </Text>
              <Text style={[styles.breadcrumbText, {fontSize : pageScreenHeight * 0.02}]}>&gt; </Text>
              <Text style={[styles.breadcrumbText,  {fontSize : pageScreenHeight * 0.02}, styles.breadcrumbActive]}>About Us</Text>
            </View>

            <Text style={[styles.title,  {fontSize : pageScreenHeight * 0.028, lineHeight : pageScreenHeight * 0.035}]}>
              Where Innovation Meets Intention - For Your Evolving Needs
            </Text>
            <Text style={[styles.description, {fontSize : pageScreenHeight * 0.021,  lineHeight : pageScreenHeight * 0.03}] }>
              Concept Dash seamlessly integrates creativity and technical rigor. With a strong commitment for future forward design and harnessing sustainability, we thrive with our tailored design intelligence for our partners and clients' evolving needs.
            </Text>
            <Text style={[styles.description, {fontSize : pageScreenHeight * 0.021,  lineHeight : pageScreenHeight * 0.03}] }>
              A dedicated team of 100+ experienced professionals with over 40 years of corporate experience in architecture, engineering and environmental services.
            </Text>
        </View>

        <View style = { [styles.test_border2, { height : '90%'}]}>

            <InfoCarousel style = { [ styles.test_border3, {height : '100%'}]}/>
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    test_border1 : {
    borderColor : 'blue',     // for test --------------
    borderWidth: 3,  // for test --------------
    // marginVertical : 10,    // for test --------------
    marginHorizontal : 2,    // for test --------------
  },
    test_border2 : {
    borderColor : 'green',     // for test --------------
    borderWidth: 3,  // for test --------------
    // marginVertical : 10,    // for test --------------
    marginHorizontal : 2,    // for test --------------
  },
    test_border3 : {
    borderColor : 'red',     // for test --------------
    borderWidth: 3,  // for test --------------
    // marginVertical : 10,    // for test --------------
    marginHorizontal : 2,    // for test --------------
  },

  container: {
    flex: 1,
    backgroundColor: 'transparent', 
  },
  contentContainer: {
    paddingHorizontal: 25,
    // paddingBottom: 60,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align icon and text
    paddingVertical:15,
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
    lineHeight: 20,
    paddingBottom: 25,
  },
  description: {
    // --- CHANGE: Darker text for readability ---
    color: '#333333',
    // fontSize: 13,
    lineHeight: 22,
    marginBottom: 16,
  },
});
export default AboutPage1;