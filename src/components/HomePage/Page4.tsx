

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ImageBackground  } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import Footer from '../Footer';


const clientLogos = [
   require('../../assets/images/page4/logo1.png'),
   require('../../assets/images/page4/logo2.png'),
   require('../../assets/images/page4/logo3.png'),
   require('../../assets/images/page4/logo4.png'),
   require('../../assets/images/page4/logo5.png'),
   require('../../assets/images/page4/logo6.png'),
+   require('../../assets/images/page4/logo7.jpg'),
   require('../../assets/images/page4/logo8.png'),
   require('../../assets/images/page4/logo9.jpg'),
   require('../../assets/images/page4/logo10.png'),
   require('../../assets/images/page4/logo11.png'),
   require('../../assets/images/page4/logo12.png'),
   require('../../assets/images/page4/logo13.jpg'),
   require('../../assets/images/page4/logo14.jpg'),
   require('../../assets/images/page4/logo15.png'),
   // Add the rest of your logos here (16-20)
 ];

const changingTexts = [
  "100+ Creative Minds",
  "Built On Trust",
  "Thoughtful Design Impact",
  "Future-Ready Infrastructure",
];

const subDescriptionText = "Testaments to the impact of thoughtful design!";
const screenWidth = Dimensions.get('window').width;
const BUTTON_WIDTH = screenWidth * 0.8;

const Page4: React.FC<{ style?: any }> = ({ style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      translateX.value = withTiming(-BUTTON_WIDTH, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      });

      setTimeout(() => {
        runOnJS(setCurrentIndex)((prevIndex) => (prevIndex + 1) % changingTexts.length);
        translateX.value = BUTTON_WIDTH;
        translateX.value = withTiming(0, {
          duration: 800,
          easing: Easing.inOut(Easing.ease),
        });
      }, 900);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
      <ImageBackground 
    source={require('../../assets/images/page4/page4_bg.png')} // <-- PUT YOUR IMAGE PATH HERE
    style={styles.backgroundImage}
  >

    <ScrollView style={[styles.container, style]}>
      <View style={styles.dynamicButton}>
        <Animated.Text style={[styles.dynamicButtonText, animatedStyle]}>
          {changingTexts[currentIndex]}
        </Animated.Text>
      </View>

      <Text style={styles.subDescriptionText}>{subDescriptionText}</Text>

      <View style={styles.expertiseSection}>
        <Text style={styles.expertiseTitle}>OUR CLIENTS</Text>

        <View style={styles.gridContainer}>
          {clientLogos.map((logo, index) => (
            <View style={styles.logoBox} key={index}>
              <Image source={logo} style={styles.logoImage} resizeMode="contain" />
            </View>
          ))}
        </View>
      </View>
       <Footer />
    </ScrollView>
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
    // paddingHorizontal: 20,
    paddingTop: 60,
    marginTop: 10,

  },
  dynamicButton: {
    alignSelf: 'center',
    backgroundColor: '#000000ff',
    width: BUTTON_WIDTH,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    marginBottom: 12,
  },
  dynamicButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: BUTTON_WIDTH,
    position: 'absolute',
  },
  subDescriptionText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  expertiseSection: {
    flex: 1,
  },
  expertiseTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal:30,
  },
  logoBox: {
    width: '30%',
    height: 80,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
});

export default Page4;