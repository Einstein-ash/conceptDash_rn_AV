import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image  ,Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const cdLogo = require('../assets/images/cd_logo.png'); 
import { navigate } from '../navigators/navigationUtils';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import { useHeaderLayout } from '../hooks/useHeaderLayout';

interface HeaderProps {
  onMenuPress: () => void;
}


export const HEADER_HEIGHT = 60 ; 

const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  
  const insets = useSafeAreaInsets();
  const { totalHeaderHeight } = useHeaderLayout();

  return (
    <View 
      style={[
        styles.container, 
        { 
          paddingTop: insets.top,
          height: totalHeaderHeight
        }
      ]}
    >
      {/* <Text style={styles.logo}>CD</Text> */}
       <TouchableOpacity onPress={() => navigate('Home')}>
        <Image source={cdLogo} style={{ width: 60, height: 35 ,  resizeMode: 'contain' }} />
       </TouchableOpacity>
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
    backgroundColor: '#9e2e2e46', 
    // backgroundColor: 'black', 
    // borderBottomColor: 'green',
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