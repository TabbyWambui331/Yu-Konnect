import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mockEvents = [
  {
    id: '1',
    title: 'Digital Marketing Bootcamp',
    date: 'June 5, 2025',
    location: 'Thika Youth Hub',
    description: 'Learn digital marketing tools and strategies to grow your business or career.',
  },
  {
    id: '2',
    title: 'Entrepreneurship Workshop',
    date: 'June 12, 2025',
    location: 'Kiambu Town Hall',
    description: 'A full-day interactive session on starting and scaling businesses.',
  },
  {
    id: '3',
    title: 'Coding for Youth',
    date: 'June 20, 2025',
    location: 'Ruiru ICT Centre',
    description: 'Free training for beginners interested in tech careers. Limited slots!',
  },
];

export default function TrainingScreen() {
  const [events, setEvents] = useState(mockEvents);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date} - {item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Training Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5ff',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2a2a2a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f3c88',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});
