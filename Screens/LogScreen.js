import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function LogScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can later integrate Firebase or your auth method here
    if (username && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Please enter both username and password.');
    }
  };

  const handleGuestLogin = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    Alert.alert('Redirecting to reset password...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kiambu_u_koneect</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGuestLogin}>
        <Text style={styles.guestText}>Continue as Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#2E86DE',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginButton: {
    backgroundColor: '#2E86DE',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  guestText: {
    marginTop: 10,
    color: '#2E86DE',
    fontWeight: '600',
  },
  forgotText: {
    marginTop: 15,
    color: '#888',
    fontStyle: 'italic',
  },
});
