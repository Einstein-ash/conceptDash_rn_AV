import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ContactHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.breadcrumbContainer}>
        <Text style={styles.breadcrumbText}>Home </Text>
        <Text style={styles.breadcrumbText}>&gt; </Text>
        <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>About Us</Text>
      </View>

      <View style={styles.contactItem}>
        <Icon name="mail" size={20} color="#8E8E93" />
        <Text style={styles.contactText}>info@conceptdash.ca</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.contactItem}>
        <Icon name="phone" size={20} color="#8E8E93" />
        <Text style={styles.contactText}>+1 (855) 997-3274 (DASH)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#F5F5F7',
    marginTop:40,
  },
    breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align icon and text
    marginBottom: 100,
    borderColor:'red',

  },
  breadcrumbText: {
    // --- CHANGE: Darker text for light background ---
    color: '#8E8E93',
    fontSize: 16,
  },
  breadcrumbActive: {
    // --- CHANGE: Darker text and bold for active item ---
    color: '#1C1C1E',
    fontWeight: '600',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    color: '#333',
    fontSize: 14,
    marginLeft: 10,
  },
  separator: {
    height: '60%',
    width: 1,
    backgroundColor: '#D1D1D1',
    marginHorizontal: 15,
  },
});

export default ContactHeader;