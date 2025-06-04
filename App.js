import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import { Ionicons } from '@expo/vector-icons'; // Uncomment if you need icons

import BookingScreen from './Screens/BookingScreen';
import ChatbotScreen from './Screens/ChatbotScreen';
import HomeScreen from './Screens/HomeScreen';
import LogScreen from './Screens/LogScreen';
import NotificationsScreen from './Screens/NotificationScreen';
import PartnersScreen from './Screens/PartnersScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UpdatesScreen from './Screens/UpdatesScreen';
import CommunityScreen from './Screens/CommunityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log">
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="Partners" component={PartnersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Updates" component={UpdatesScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
