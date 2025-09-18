import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

type ContactFormProps = {
  formType: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ formType }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request a Proposal / <Text style={{ color: '#333' }}>{formType} Form</Text></Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="First Name *" />
        <TextInput style={styles.input} placeholder="Last Name *" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Country *" />
        <TextInput style={styles.input} placeholder="Sub-Department *" />
      </View>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Email *" />
        <TextInput style={styles.input} placeholder="Phone Number" />
      </View>
      <TextInput style={styles.inputFull} placeholder="Write Your Message" multiline />
      <View style={styles.attachmentContainer}>
        <Text style={styles.attachmentTitle}>Add Attachment</Text>
        <Text style={styles.attachmentNote}>Note: File size should not exceed 10MB.</Text>
        <Text style={styles.attachmentNote}>Accepted types: .pdf, .docx, .pptx, .xls, .zip, .jpeg, .png</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={() => setAgreed(!agreed)}>
          {agreed && <Icon name="check" size={18} color="#6A1B9A" />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>I agree to the Terms & Conditions and consent to the processing of my personal data in accordance with the Privacy Policy.</Text>
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={['#8A2BE2', '#4A00E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '48%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 14,
  },
  inputFull: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 14,
  },
  attachmentContainer: {
    marginBottom: 20,
  },
  attachmentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  attachmentNote: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#6A1B9A',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
  submitButton: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactForm;