import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [darkMode, setDarkMode] = useState(false);
  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={darkMode ? ['#121212', '#1E1E1E'] : ['#E0F7FA', '#FFF']}
        style={themeStyles.container}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          <View style={themeStyles.topRow}>
            {/* Profile Avatar on Top Left */}
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/100' }}
                style={themeStyles.avatarLarge}
              />
            </TouchableOpacity>
            {/* App Logo on Top Right */}
            <Image source={require('../assets/konnect.png')} style={themeStyles.logoSmall} />
          </View>

          {/* Toggle Switch */}
          <View style={themeStyles.switchContainer}>
            <Text style={themeStyles.switchLabel}>{darkMode ? 'Dark Mode' : 'Light Mode'}</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              thumbColor={darkMode ? '#03DAC6' : '#fff'}
              trackColor={{ false: "#ccc", true: "#6200EE" }}
            />
          </View>

          <View style={themeStyles.header}>
            <View>
              <Text style={themeStyles.welcome}>Hey Champion!</Text>
              <Text style={themeStyles.username}>Stay informed, Find opportunities, Partnerships and be in the know! 👊</Text>
            </View>
            <View style={themeStyles.headerRight}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}
                style={themeStyles.notificationIcon}
              >
                <Ionicons name="notifications-outline" size={26} color={darkMode ? "#fff" : "#333"} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quote */}
          <Text style={themeStyles.quote}>
            “The future belongs to those who prepare for it today.” – Malcolm X
          </Text>

          {/* Navigation Grid */}
          <View style={themeStyles.grid}>
            <NavCard
              icon={<Ionicons name="school" size={32} color="#2E86DE" />}
              label="Trainings"
              onPress={() => navigation.navigate('Training')}
              style={themeStyles.card}
            />
            <NavCard
              icon={<MaterialCommunityIcons name="calendar-clock" size={32} color="#2E86DE" />}
              label="Book Appointment"
              onPress={() => navigation.navigate('Booking')}
              style={themeStyles.card}
            />
            <NavCard
              icon={<FontAwesome5 name="handshake" size={32} color="#2E86DE" />}
              label="Partnerships"
              onPress={() => navigation.navigate('Partners')}
              style={themeStyles.card}
            />
            <NavCard
              icon={<Ionicons name="chatbubbles" size={32} color="#2E86DE" />}
              label="Chatbot"
              onPress={() => navigation.navigate('Chatbot')}
              style={themeStyles.card}
            />
            <NavCard
              icon={<Ionicons name="person-circle-outline" size={32} color="#2E86DE" />}
              label="Profile"
              onPress={() => navigation.navigate('Profile')}
              style={themeStyles.card}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

// Reusable NavCard component
function NavCard({ icon, label, onPress, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {icon}
      <Text style={style.cardText}>{label}</Text>
    </TouchableOpacity>
  );
}

const baseStyles = {
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#2E86DE',
  },
  logoSmall: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 25,
    alignSelf: 'topright',
    borderRadius: 100,
  },
  switchContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    paddingVertical: 25,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 18,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
};

const lightStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F7FA',
  },
  switchLabel: {
    ...baseStyles.switchLabel,
    color: '#333',
  },
  welcome: {
    fontSize: 18,
    color: '#333',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E86DE',
  },
  card: {
    ...baseStyles.card,
    backgroundColor: '#fff',
  },
  cardText: {
    ...baseStyles.cardText,
    color: '#333',
  },
  quote: {
    ...baseStyles.quote,
    color: '#555',
  },
});

const darkStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#181A20',
  },
  switchLabel: {
    ...baseStyles.switchLabel,
    color: '#ccc',
  },
  welcome: {
    fontSize: 18,
    color: '#fff',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#90CAF9',
  },
  card: {
    ...baseStyles.card,
    backgroundColor: '#23272F',
  },
  cardText: {
    ...baseStyles.cardText,
    color: '#fff',
  },
  quote: {
    ...baseStyles.quote,
    color: '#aaa',
  },
});
// This is the HomeScreen component for a React Native app.
// It includes a dark mode toggle, a welcome message, and a grid of navigation cards.