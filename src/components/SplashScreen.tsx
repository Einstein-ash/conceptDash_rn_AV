import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';


const { width, height } = Dimensions.get('window');
const LOGO_SIZE = 50; 
const PADDING = 30; 


const logoImage = require('../assets/images/cd_logo.png'); 


interface SplashScreenProps {
  onAnimationFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {

  const logoTranslateX = useSharedValue(0);
  const logoTranslateY = useSharedValue(0);
  const textContainerTranslateY = useSharedValue(0);
  const conceptTranslateX = useSharedValue(0);
  const dashTranslateX = useSharedValue(0);
  const containerOpacity = useSharedValue(1);

  useEffect(() => {
    const config = {
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
    };


    const finalLogoX = -(width / 2) + LOGO_SIZE / 2 + PADDING;
    const finalLogoY = -(height / 2) + LOGO_SIZE / 2 + 60;
    const finalConceptX = width / 2 - 130;
    const finalDashX = width / 2 - 125;


    logoTranslateX.value = withTiming(finalLogoX, config);
    logoTranslateY.value = withTiming(finalLogoY, config);
    textContainerTranslateY.value = withTiming(finalLogoY, config);
    conceptTranslateX.value = withTiming(finalConceptX, config);

    dashTranslateX.value = withTiming(finalDashX, config, (finished) => {
      if (finished) {
        containerOpacity.value = withTiming(0, { duration: 500 });
        runOnJS(onAnimationFinish)();
      }
    });
  }, [onAnimationFinish]);


  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: logoTranslateX.value },
      { translateY: logoTranslateY.value },
    ],
  }));

  const textContainerAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: textContainerTranslateY.value }]
  }));

  const conceptAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: conceptTranslateX.value }],
  }));

  const dashAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: dashTranslateX.value }],
  }));

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <Animated.Image source={logoImage} style={[styles.logo, logoAnimatedStyle]} />
      
      <Animated.View style={[styles.textContainer, textContainerAnimatedStyle]}>
        <Animated.Text style={[styles.text, styles.conceptText, conceptAnimatedStyle]}>
          CONCEPT
        </Animated.Text>
        <Animated.Text style={[styles.text, styles.dashText, dashAnimatedStyle]}>
          DASH
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b1d28',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    resizeMode: 'contain',
    position: 'absolute',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  text: {
    color: '#E0E0E0',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
  },
  conceptText: {
    marginRight: 10,
  },
  dashText: {},
});

export default SplashScreen;