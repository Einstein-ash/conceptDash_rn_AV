// src/screens/Contact/ContactScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ContactHeader from './components/ContactHeader';
import ProposalCarousel from './components/ProposalCarousel';
import ServiceSelector from './components/ServicesSelector';
import ContactForm from './components/ContactForm';
import Footer from '../../components/Footer';

const ContactScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState('General');

  return (
    <View style={styles.container}>
      <ContactHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  formSection: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
});

export default ContactScreen;