// src/screens/About/components/TeamMember.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Animated } from 'react-native';

type TeamMemberProps = {
  name: string;
  role: string;
  imageColor: any; // Image source for color version
  imageBw: any;    // Image source for black & white version
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageColor, imageBw }) => {
  const colorOpacity = React.useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(colorOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(colorOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.imageContainer}>
        {/* Black and white image is the base */}
        <Image source={imageBw} style={styles.image} />
        {/* Color image fades in on top */}
        <Animated.Image
          source={imageColor}
          style={[styles.image, styles.colorImage, { opacity: colorOpacity }]}
        />
      </View>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.roleText}>{role}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  colorImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  nameText: {
    color: '#1C1C1E',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  roleText: {
    color: '#8E8E93',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default TeamMember;