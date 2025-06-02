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

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: '👋 Hi! I’m Koneect Assistant. How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botReply = getBotReply(input);
      const botMessage = { id: Date.now().toString() + 'b', text: botReply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput('');
  };

  const getBotReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes('training')) return '🧑‍💻 You can find upcoming trainings under the Training tab!';
    if (q.includes('partnership')) return '🤝 Go to the Partnership section to submit your proposal.';
    if (q.includes('book')) return '📅 You can book appointments on the Booking screen.';
    if (q.includes('profile')) return '👤 You can update your profile info under the Profile tab.';
    return "🙈 Sorry, I didn't understand that. Try asking about training, booking, or partnerships.";
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
