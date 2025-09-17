// src/screens/About/pages/AboutPage3.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  // For an exact match, you'd use ImageBackground
  // import { ImageBackground } from 'react-native';
} from 'react-native';
// NEW: Import the gradient component
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../../../components/Footer';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const AboutPage3: React.FC = () => {
  return (

    <View style={styles.container}>
            <View style={styles.mainContent}>

      <Text style={styles.title}>The future you imagine, is the one we create!</Text>
      <Text style={styles.subtitle}>Let's make it Real.</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={['#8A2BE2', '#4A00E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
          >
          <Text style={styles.buttonText}>BECOME A CLIENT</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.buttonText}>JOIN OUR TEAM</Text>
      </TouchableOpacity>
          </View>
          {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: '#F5F5F7', // The light background color
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
    mainContent: {
    flex: 1, // This makes it take all available space, pushing the footer down
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#6A1B9A', // Vibrant purple
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: '#1C1C1E', // Dark charcoal color
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40, // Space between text and buttons
  },
  buttonContainer: {
    marginBottom: 15, // Space between the two buttons
  },
  button: {
    width: screenWidth * 0.8, // Button width is 80% of screen
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // Android Shadow
    elevation: 8,
  },
  secondaryButton: {
    backgroundColor: '#3498DB', // Solid light blue
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default AboutPage3;