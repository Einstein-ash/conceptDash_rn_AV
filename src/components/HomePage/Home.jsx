
import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Home = ({ style }) => {
  const [status, setStatus] = useState({});
  const videoRef = useRef(null);

  return (
    <View style={[style, styles.container]}>
      <Video
        ref={videoRef}
        source={require('../../assets/video/home_vid.mp4')}
        style={styles.video}
        resizeMode="cover"
        paused={false}     
        repeat={true}      
        muted={true}       
        controls={false} 
        onLoad={() => {
          console.log('Video loaded successfully');
        }}
        onError={(error) => {
          console.log('Video error:', error);
        }}
      />
      <View style={styles.overlay}>
        <Text style={styles.titleText}>Concept Dash!</Text>
        <Text style={styles.homeText}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  titleText: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 4,
  },
  homeText: {
    position: 'absolute',
    top: 100,
    left: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 4,
  },
});

export default Home;