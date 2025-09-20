import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProposalCarousel from './components/ProposalCarousel';
import ServiceSelector from './components/ServicesSelector';
import ContactForm from './components/ContactForm';
import Footer from '../../components/Footer';
import { HEADER_HEIGHT } from '../../components/Header';
import { useHeaderLayout } from '../../hooks/useHeaderLayout';

const { width } = Dimensions.get('window');

const ContactScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState('General');
      const { totalHeaderHeight } = useHeaderLayout();

  return (
    <ScrollView
      style={[styles.container, {marginTop: totalHeaderHeight + 15}]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* --- ▼ NEW: Header content is now inside the ScrollView ▼ --- */}
      <View style={styles.headerContainer}>
        <View style={styles.breadcrumbContainer}>
          <Text style={styles.breadcrumbText}>Home </Text>
          <Text style={styles.breadcrumbText}>&gt; </Text>
          <Text style={[styles.breadcrumbText, styles.breadcrumbActive]}>Contact Us</Text>
        </View>
        <View style={styles.contactDetailsContainer}>
          <View style={styles.contactItem}>
            <Icon name="mail" size={20} color="#6A1B9A" />
            <Text style={styles.contactText}>info@conceptdash.ca</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.contactItem}>
            <Icon name="phone" size={20} color="#6A1B9A" />
            <Text style={styles.contactText}>+1 (855) 997-3274 (DASH)</Text>
          </View>
        </View>
      </View>
      {/* --- ▲ HEADER CONTENT ENDS HERE ▲ --- */}
      
      <ProposalCarousel />
      
      <View style={styles.formSection}>
        <ServiceSelector
          selectedService={selectedService}
          onSelect={setSelectedService}
        />
        <ContactForm formType={selectedService} />
      </View>
      
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    // marginTop: HEADER_HEIGHT + 15 ,
  },
  scrollContent: {
    // paddingBottom: 20,
  },
  // --- ▼ NEW STYLES FOR THE INTEGRATED HEADER ▼ ---
  headerContainer: {
    // paddingTop: 40,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  breadcrumbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  breadcrumbText: {
    color: '#8E8E93',
    fontSize: 16,
  },
  breadcrumbActive: {
    color: '#1C1C1E',
    fontWeight: '600',
  },
  contactDetailsContainer: {
    flexDirection: 'row',
    paddingVertical : 40,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    color: '#333',
    fontSize: 12,
    marginHorizontal: 5,
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#D1D1D1',
    marginHorizontal: 15,
  },
  // --- ▲ END OF NEW HEADER STYLES ▲ ---
  formSection: {
    paddingHorizontal: 25,
    marginBottom: 60,

  },
});

export default ContactScreen;