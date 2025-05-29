import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function PartnersScreen({ navigation }) {
  const [organization, setOrganization] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [proposal, setProposal] = useState('');

  const handleSubmit = () => {
    if (!organization || !contactPerson || !email || !proposal) {
      Alert.alert('Missing Info', 'Please fill out all fields before submitting.');
      return;
    }

    // Future: send data to backend or Firebase
    Alert.alert('Submitted', 'Your partnership request has been sent. Thank you!');
    
    // Reset form
    setOrganization('');
    setContactPerson('');
    setEmail('');
    setProposal('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Partner With Kiambu_u_koneect</Text>
      <Text style={styles.description}>
        We welcome organizations, mentors, and businesses to collaborate with us in empowering youth in Kiambu County.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Organization / Company Name"
        value={organization}
        onChangeText={setOrganization}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Person"
        value={contactPerson}
        onChangeText={setContactPerson}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Brief Partnership Proposal"
        value={proposal}
        onChangeText={setProposal}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Proposal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Partners')}>
        <Text style={styles.link}>Already a partner? Login here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5faff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f3c88',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#1f3c88',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    color: '#1f3c88',
    textAlign: 'center',
  },
});
