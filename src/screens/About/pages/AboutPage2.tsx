// src/screens/About/pages/AboutPage2.tsx

import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import StatsCarousel from '../components/StatsCarousel';
import TeamMember from '../components/TeamMember';

const { height: screenHeight } = Dimensions.get('window');

// --- ACTION: Replace with your actual team members and image paths ---
const TEAM_DATA = [
  {
    name: 'Mike Neumann',
    role: 'Chairperson',
    imgColor: require('../../../assets/images/team/mike_color.png'),
    imgBw: require('../../../assets/images/team/mike_bw.png'),
  },
  {
    name: 'Rob Armstrong',
    role: 'Managing',
    imgColor: require('../../../assets/images/team/rob_color.png'),
    imgBw: require('../../../assets/images/team/rob_bw.png'),
  },
  {
    name: 'Rob Flindall',
    role: 'Director Engineering',
    imgColor: require('../../../assets/images/team/rob_f_color.png'),
    imgBw: require('../../../assets/images/team/rob_f_bw.png'),
  },
  {
    name: 'Bill Birdsell',
    role: 'Director Architecture',
    imgColor: require('../../../assets/images/team/bill_color.png'),
    imgBw: require('../../../assets/images/team/bill_bw.png')
  },
  {
    name: 'Jeff Huang',
    role: 'Technical Lead-Bridges',
    imgColor: require('../../../assets/images/team/jeff_color.png'),
    imgBw: require('../../../assets/images/team/jeff_bw.png'),
  },
  {
    name: 'Vivek Sharma',
    role: 'Director',
    imgColor: require('../../../assets/images/team/vivek_color.png'),
    imgBw: require('../../../assets/images/team/vivek_bw.png'),
  },
];

const AboutPage2: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <StatsCarousel />
            <View style={styles.textSection}>
              <Text style={styles.title}>Our Team</Text>
              <Text style={styles.description}>
                Our team At Concept Dash, every project is led by a team of
                specialists with deep domain knowledge and a shared drive for
                excellence. We don't just design — we solve, elevate, and
                deliver with precision.
              </Text>
            </View>
          </>
        }
        data={TEAM_DATA}
        renderItem={({ item }) => (
          <TeamMember
            name={item.name}
            role={item.role}
            imageColor={item.imgColor}
            imageBw={item.imgBw}
          />
        )}
        keyExtractor={item => item.name}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: '#F5F5F7',
    paddingTop: 40,
  },
  textSection: {
    paddingHorizontal: 25,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#1C1C1E',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    color: '#333333',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },
  gridContainer: {
    paddingHorizontal: 15,
  },
});

export default AboutPage2;
