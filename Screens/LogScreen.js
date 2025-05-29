import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.background}
      blurRadius={3} //  blur effect
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/konnect.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}
          fontSize={22}
          fontWeight="bold"
          color="#4300FF">
          Welcome to Kiambu_u_Konnect </Text>
          <Text bodyText="true" color="#ffff" fontSize={16} fontWeight="bold" paddingTop={10}>
            Connecting Kiambu Youth to Opportunities
          </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#333333"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#333333"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#333333"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#2E86DE',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  guestText: {
    color: '#fff',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
// This code defines a LoginScreen component for a React Native application.
// It includes a background image, an overlay for better visibility, and input fields for username, email, and password.