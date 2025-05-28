import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function BookingScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !date || !department) {
      Alert.alert('Missing Info', 'Please fill in all fields');
      return;
    }

    Alert.alert('Appointment Booked', `Thanks ${name}, your booking with ${department} is confirmed!`);
    //  connect this to backend or database
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Book an Appointment</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Preferred Date (e.g. 2025-06-01)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <Text style={styles.label}>Department</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={department}
          onValueChange={(itemValue) => setDepartment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="-- Select Department --" value="" />
          <Picker.Item label="Youth Affairs" value="Youth Affairs" />
          <Picker.Item label="ICT & Innovation" value="ICT" />
          <Picker.Item label="Finance & Enterprise" value="Finance" />
          <Picker.Item label="Health" value="Health" />
        </Picker>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f9fc',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    color: '#444',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
