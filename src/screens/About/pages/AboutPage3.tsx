import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../../../components/Footer';
import { useHeaderLayout } from '../../../hooks/useHeaderLayout';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const AboutPage3: React.FC = () => {

      const { totalHeaderHeight } = useHeaderLayout();
  return (

    <View style={[styles.container, { height: screenHeight - totalHeaderHeight}]} >
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
          <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        backgroundColor: 'transparent', 

  },
    mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#6A1B9A', 
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: '#1C1C1E',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40, 
  },
  buttonContainer: {
    marginBottom: 15, 
  },
  button: {
    width: screenWidth * 0.8, 
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  secondaryButton: {
    backgroundColor: '#3498DB', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default AboutPage3;