import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: Date.now().toString(),
      user: 'Youth Leader',
      avatar: 'https://i.pravatar.cc/100',
      text: newPost.trim(),
      time: 'Just now',
    };
    setPosts([newEntry, ...posts]);
    setNewPost('');
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.postContent}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.postText}>{item.text}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Community Feed</Text>
        <Ionicons name="people" size={24} color="#2E86DE" />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Share something with the community..."
          value={newPost}
          onChangeText={setNewPost}
        />
        <TouchableOpacity onPress={handlePostSubmit}>
          <Ionicons name="send" size={28} color="#2E86DE" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Community')}>
        <Text>Go to Community</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86DE',
  },
  postContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    color: '#333',
  },
  postText: {
    color: '#444',
    marginVertical: 5,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 3,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
