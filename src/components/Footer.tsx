import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { navigate } from '../navigators/navigationUtils';

const cdLogo = require('../assets/images/cd_logo.png'); 

const Footer: React.FC = () => {
 
 const Link = ({ screen, children }: { screen?: string; children: React.ReactNode }) => (
   <TouchableOpacity onPress={() => screen && navigate(screen)} disabled={!screen}>
     <Text style={styles.linkText}>{children}</Text>
   </TouchableOpacity>
  );

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
       
        <TouchableOpacity 
        style = {styles.logoContainer}
         onPress={() => navigate('Home')}>
        <Image source={cdLogo} style={{ width: 60, height: 35 ,  resizeMode: 'contain' }} />
       </TouchableOpacity>


      <View style={styles.linksContainer}>

        <View style={styles.linkColumn}>
          <Link  screen="About" >About</Link>
          <Link screen="Construction_PM">Services</Link>
          <Link screen="Careers">Careers</Link>
        </View>
   
        <View style={styles.linkColumn}>
          <Link screen="Projects" >Projects</Link>
          <Link screen="Stories" >Blogs</Link>
        </View>
      
        <View style={styles.linkColumn}>
          <Text style={styles.linkText}>© Concept Dash 2025</Text>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
        </View>
      </View>


        {/* Column 5: Scroll to Top */}
        <TouchableOpacity style={styles.scrollTopButton}>
          <Icon name="arrow-up" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#000000',
    paddingVertical: 5,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
     paddingHorizontal: 15,
  },
  logoContainer: {
    marginRight: 15,
  },
  linksContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  linkColumn: {
    marginRight: 20,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 10,
    marginBottom: 10,
  },
  presenceContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
  },
  presenceTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  flagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 90,
  },
  flag: {
    marginRight: 4,
    marginBottom: 4,
  },
  scrollTopButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;