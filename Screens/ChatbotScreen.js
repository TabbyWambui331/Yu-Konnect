import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { GEMINI_API_KEY } from '@env';

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: '👋 Hi! I’m Koneect Assistant. How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Call Gemini API for AI response
    const botReply = await getGeminiReply(input);
    const botMessage = { id: Date.now().toString() + 'b', text: botReply, sender: 'bot' };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setInput('');
  };

  //  Gemini API call
  const getGeminiReply = async (question) => {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: question }] }]
        }
      );
      // Adjust the response structure based on the actual API response
      return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
    } catch (error) {
      console.error(error);
      return "Sorry, there was a problem connecting to the AI.";
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.message,
                item.sender === 'user' ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ padding: 10 }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask me anything..."
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Yu-Konnect. Empowering Kiambu Youth.</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  message: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#1f3c88',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#dfe9f3',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#4ED7F1',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#4ED7F1',
    padding: 10,
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#1f3c88',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  sendText: {
    color: '#FF9F00',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#aaa',
    fontSize: 12,
  },
});
