
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { navigate } from '../../navigators/navigationUtils';

const { height } = Dimensions.get('window');
const mouseScrollImage = require('../../assets/images/mouseScroll.png'); 

const TEXT_ITEMS = [
  'For Futuristic Solutions',
  'For Realistic Visualization',
  'For Sustainability',
  'For Smart Design',
];

const Home: React.FC<{ style?: any }> = ({ style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const interval = setInterval(() => {
      opacity.value = withTiming(0, { duration: 500 });
      setTimeout(() => {
        runOnJS(setCurrentIndex)((prevIndex) => (prevIndex + 1) % TEXT_ITEMS.length);
        opacity.value = withTiming(1, { duration: 500 });
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={[style, styles.container]}>
      <Video
        source={require('../../assets/video/home_vid.mp4')}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        muted={true}
        paused={false}
      />
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.subtitleContainer}>
          <Text style={styles.titleText}>We CARE</Text>
            <Animated.Text style={[styles.subtitleText, animatedTextStyle]}>
              {TEXT_ITEMS[currentIndex]}
            </Animated.Text>
          </View>
          <TouchableOpacity onPress={() => navigate('Contact')}> 
            <LinearGradient
              colors={['#8A2BE2', '#4A00E0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Lets Design</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.scrollIndicatorContainer}>
        <Image source={mouseScrollImage} style={{ width: 60, height: 35 ,  resizeMode: 'contain' }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  mainContent: {
    alignItems: 'flex-start',
    paddingLeft: '15%',
  },
  titleText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '300',
    letterSpacing: 2,
  },
  subtitleContainer: {
    height: 110,
    justifyContent: 'center',
    marginVertical: 15,
  },
  subtitleText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 15,
    marginTop: 85,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  scrollIndicatorContainer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    alignItems: 'center',
  },
});

export default Home;