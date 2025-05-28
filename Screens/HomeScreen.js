import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <View style={[themeStyles.container]}>
      <Image source={require('assets/konnect.png')} style={themeStyles.logo} />
      {/* Toggle Switch */}
      <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? "#2E86DE" : "#fff"}
          trackColor={{ false: "#ccc", true: "#333" }}
        />
      </View>
      {/* Header */}
      <View style={themeStyles.header}>
        <View>
          <Text style={themeStyles.welcome}>Welcome,</Text>
          <Text style={themeStyles.username}>Connecting the Youth of Kiambu👋</Text>
        </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={themeStyles.avatar}
        />
      </View>

      {/* Navigation Grid */}
      <View style={themeStyles.grid}>
        <TouchableOpacity style={themeStyles.card} onPress={() => navigation.navigate('Training')}>
          <Ionicons name="school" size={32} color="#2E86DE" />
          <Text style={themeStyles.cardText}>Trainings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={themeStyles.card} onPress={() => navigation.navigate('Booking')}>
          <MaterialCommunityIcons name="calendar-clock" size={32} color="#2E86DE" />
          <Text style={themeStyles.cardText}>Book Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={themeStyles.card} onPress={() => navigation.navigate('Partnership')}>
          <FontAwesome5 name="handshake" size={32} color="#2E86DE" />
          <Text style={themeStyles.cardText}>Partnerships</Text>
        </TouchableOpacity>

        <TouchableOpacity style={themeStyles.card} onPress={() => navigation.navigate('Chatbot')}>
          <Ionicons name="chatbubbles" size={32} color="#2E86DE" />
          <Text style={themeStyles.cardText}>Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={themeStyles.card} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={32} color="#2E86DE" />
          <Text style={themeStyles.cardText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: { width: 120, height: 120, marginBottom: 20, alignSelf: 'center' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 18,
    color: '#333',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86DE',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '47%',
    paddingVertical: 25,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 2,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

const darkStyles = StyleSheet.create({
  ...lightStyles,
  container: {
    ...lightStyles.container,
    backgroundColor: '#181A20',
  },
  logo: { ...lightStyles.logo },
  header: { ...lightStyles.header },
  welcome: {
    ...lightStyles.welcome,
    color: '#fff',
  },
  username: {
    ...lightStyles.username,
    color: '#90CAF9',
  },
  avatar: { ...lightStyles.avatar },
  grid: { ...lightStyles.grid },
  card: {
    ...lightStyles.card,
    backgroundColor: '#23272F',
  },
  cardText: {
    ...lightStyles.cardText,
    color: '#fff',
  },
});
// This code defines a HomeScreen component for a React Native application.