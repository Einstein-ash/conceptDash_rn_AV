
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';


import Logo1 from '../../assets/images/page2/dept_1.png';
import Logo2 from '../../assets/images/page2/dept_1.png';
import Logo3 from '../../assets/images/page2/dept_1.png';
import Logo4 from '../../assets/images/page2/dept_1.png';
import Logo5 from '../../assets/images/page2/dept_1.png';
import Logo6 from '../../assets/images/page2/dept_1.png';
import Logo7 from '../../assets/images/page2/dept_1.png';
import Logo8 from '../../assets/images/page2/dept_1.png';
import Logo9 from '../../assets/images/page2/dept_1.png';
import Logo10 from '../../assets/images/page2/dept_1.png';
import Logo11 from '../../assets/images/page2/dept_1.png';
import Logo12 from '../../assets/images/page2/dept_1.png';
import Logo13 from '../../assets/images/page2/dept_1.png';
import Logo14 from '../../assets/images/page2/dept_1.png';
import Logo15 from '../../assets/images/page2/dept_1.png';
import Logo16 from '../../assets/images/page2/dept_1.png';
import Logo17 from '../../assets/images/page2/dept_1.png';
import Logo18 from '../../assets/images/page2/dept_1.png';
import Logo19 from '../../assets/images/page2/dept_1.png';
import Logo20 from '../../assets/images/page2/dept_1.png';

const clientLogos = [
  Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9,
  Logo10, Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20,
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

const Page4 = ({ style }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nextTextIndex, setNextTextIndex] = useState(1);

  const animatedCurrent = useRef(new Animated.Value(0)).current; // Current text starts centered
  const animatedNext = useRef(new Animated.Value(BUTTON_WIDTH)).current; // Next text starts off to right

  useEffect(() => {
    const animateTexts = () => {
      animatedCurrent.setValue(0);
      animatedNext.setValue(BUTTON_WIDTH);

      Animated.parallel([
        Animated.timing(animatedCurrent, {
          toValue: -BUTTON_WIDTH,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedNext, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // After animation completes, update indexes
        setCurrentTextIndex(nextTextIndex);
        setNextTextIndex((nextTextIndex + 1) % changingTexts.length);
      });
    };

    const interval = setInterval(animateTexts, 3000);

    return () => clearInterval(interval);
  }, [nextTextIndex]);

  return (
    <ScrollView style={[styles.container, style]}>
      {/* Top Button-like Section */}
      <View style={styles.dynamicButton}>
        <Animated.Text
          style={[
            styles.dynamicButtonText,
            { transform: [{ translateX: animatedCurrent }] },
            styles.absoluteText,
          ]}
        >
          {changingTexts[currentTextIndex]}
        </Animated.Text>

        <Animated.Text
          style={[
            styles.dynamicButtonText,
            { transform: [{ translateX: animatedNext }] },
            styles.absoluteText,
          ]}
        >
          {changingTexts[nextTextIndex]}
        </Animated.Text>
      </View>

      {/* Sub description Text */}
      <Text style={styles.subDescriptionText}>{subDescriptionText}</Text>

      {/* Expertise Section */}
      <View style={styles.expertiseSection}>
        <Text style={styles.expertiseTitle}>OUR CLIENTS</Text>

        <View style={styles.gridContainer}>
          {clientLogos.map((logo, index) => (
            <View style={styles.logoBox} key={index}>
              <Image source={logo} style={styles.logoImage} resizeMode="cover" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 60,
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
  },
  absoluteText: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 50,
    lineHeight: 50,
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
  },
  logoBox: {
    width: '30%',
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
});

export default Page4;
