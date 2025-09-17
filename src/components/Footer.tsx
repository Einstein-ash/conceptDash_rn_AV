// src/components/Footer.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// NOTE: You will need to import your logo and flag SVGs here,
// just like you did for the team members. I am using placeholders.
// import Logo from '../assets/images/logo.svg';
// import CanadaFlag from '../assets/images/flags/canada.svg';

const Footer: React.FC = () => {
  // A helper component for the links to avoid repeating styles
  const Link = ({ children }: { children: React.ReactNode }) => (
    <TouchableOpacity>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        {/* Column 1: Logo */}
        <View style={styles.logoContainer}>
           {/* <Logo width={40} height={40} />  Replace with your actual logo SVG */}
           <Icon name="codesandbox" size={40} color="#FFF" />
        </View>

        {/* Columns 2 & 3: Links */}
      <View style={styles.linksContainer}>
        {/* First column of main links */}
        <View style={styles.linkColumn}>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Careers</Link>
        </View>
        {/* Second column of main links */}
        <View style={styles.linkColumn}>
          <Link>Projects</Link>
          <Link>Blogs</Link>
        </View>
        {/* Column for legal links */}
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

// const styles = StyleSheet.create({
//   footerContainer: {
//     backgroundColor: '#000000',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   footerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   logoContainer: {
//     marginRight: 20,
//   },
//   linksContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   linkColumn: {
//     marginRight: 25,
//   },
//   linkText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     marginBottom: 12,
//   },
//   presenceContainer: {
//     alignItems: 'flex-start',
//     marginRight: 20,
//   },
//   presenceTitle: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   flagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: 100, // 4 flags per row
//   },
//   flag: {
//     marginRight: 5,
//     marginBottom: 5,
//   },
//   scrollTopButton: {
//     borderWidth: 1,
//     borderColor: '#FFF',
//     borderRadius: 20,
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#000000',
    // paddingHorizontal: 15,
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