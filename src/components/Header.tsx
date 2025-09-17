import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  onMenuPress: () => void;
}

export const HEADER_HEIGHT = 60; 

const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {

  const insets = useSafeAreaInsets();

  return (
    <View 
      style={[
        styles.container, 
        { 
          paddingTop: insets.top,
          height: HEADER_HEIGHT + insets.top 
        }
      ]}
    >
      <Text style={styles.logo}>CD</Text>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Icon name="menu" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent', 
    zIndex: 10,
  },
  logo: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5, 
  },
});

export default Header;