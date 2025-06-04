import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: 'Hi there! 👋 How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { id: Date.now().toString(), sender: 'user', text: input };
    const botMessage = getBotResponse(input);

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const getBotResponse = (text) => {
    const msg = text.toLowerCase();
    let reply = "I'm not sure I understand that yet, but I'm learning every day!";

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      reply = 'Hello! 😊 I’m your Kiambu-U-Konnect Assistant. Ask me about updates, booking, or partnerships.';
    } else if (msg.includes('training')) {
      reply = '📚 We offer various youth training programs! Visit the Training section for details.';
    } else if (msg.includes('booking') || msg.includes('appointment')) {
      reply = '🗓 You can book appointments with the county through the Booking screen.';
    } else if (msg.includes('partnership')) {
      reply = '🤝 Great! Head to the Partnership screen to explore collaboration opportunities.';
    } else if (msg.includes('thank')) {
      reply = "You're welcome! 🙌";
    }

    return { id: Date.now().toString(), sender: 'bot', text: reply };
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
  },
  chatContainer: {
    padding: 20,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#2E86DE',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#d3e5ff',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#2E86DE',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
