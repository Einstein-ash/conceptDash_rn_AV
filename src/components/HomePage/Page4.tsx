import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ImageBackground, LayoutChangeEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import Footer from '../Footer';
import { useHeaderLayout } from '../../hooks/useHeaderLayout';

const clientLogos = [
  require('../../assets/images/page4/logo1.png'),
  require('../../assets/images/page4/logo2.png'),
  require('../../assets/images/page4/logo3.png'),
  require('../../assets/images/page4/logo4.png'),
  require('../../assets/images/page4/logo5.png'),
  require('../../assets/images/page4/logo6.png'),
  require('../../assets/images/page4/logo7.jpg'),
  require('../../assets/images/page4/logo8.png'),
  require('../../assets/images/page4/logo9.jpg'),
  require('../../assets/images/page4/logo10.png'),
  require('../../assets/images/page4/logo11.png'),
  require('../../assets/images/page4/logo12.png'),
  require('../../assets/images/page4/logo13.jpg'),
  require('../../assets/images/page4/logo14.jpg'),
  require('../../assets/images/page4/logo15.png'),
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
  const [footerHeight, setFooterHeight] = useState(0);
  
  const translateX = useSharedValue(0);
    const { pageScreenHeight} = useHeaderLayout();

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

    const onFooterLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    if (height > 0 && height !== footerHeight) {
      setFooterHeight(height);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/page4/page4_bg.png')}
      style={[styles.container, style, {height : pageScreenHeight  }]}
    >
      <ScrollView style={[styles.scrollView ,{height : pageScreenHeight - footerHeight } ]}>
        <View style = {[  {height :  (pageScreenHeight - footerHeight) * 0.25 }]}>
          <View style={[styles.dynamicButton]}>
            <Animated.Text style={[styles.dynamicButtonText, animatedStyle,  ]}>
              <Text style = {{fontSize : pageScreenHeight * 0.026}}>
                {changingTexts[currentIndex]}
              </Text>
            </Animated.Text>
          </View>

          <Text style={[styles.subDescriptionText, {fontSize : pageScreenHeight * 0.029}]}>Testaments to the impact of thoughtful design!</Text>
        </View>

        <View style={[styles.expertiseSection, {height :  (pageScreenHeight - footerHeight) * 0.75 }] }>
          <Text style={[styles.expertiseTitle , {fontSize : pageScreenHeight * 0.045}]}>OUR CLIENTS</Text>

          <View style={[styles.gridContainer, {height : '84%'}]}>
            {clientLogos.map((logo, index) => (
              <View style={[styles.logoBox, {height : '15%'}]} key={index}>
                <Image source={logo} style={styles.logoImage} resizeMode="contain" />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View  onLayout={onFooterLayout}>
        <Footer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 1,
    paddingTop: 2,
  
  },

  test_border : {
    borderColor : 'blue',     // for test --------------
    borderWidth: 1,  // for test --------------
    // marginVertical : 10,    // for test --------------
    marginHorizontal : 10,    // for test --------------
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
    paddingHorizontal: 20,
  },
  expertiseSection: {},
  expertiseTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6f71ddff',
    paddingBottom: 15,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  logoBox: {
    width: '30%',
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
    width: '75%',
    height: '75%',
  },
});

export default Page4;