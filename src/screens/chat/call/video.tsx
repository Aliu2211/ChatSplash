


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { StreamVideoClient } from "@stream-io/video-react-native-sdk";
import dotenv from "dotenv";
import Share from "react-native-share";

// Load environment variables
dotenv.config();

// Initialize the Stream Video Client
const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("API_KEY is missing. Please ensure it is defined in your .env file.");
}

// Use the apiKey safely now
const clientConfig = {
  apiKey, // This is now guaranteed to be a string
};

// Replace with your actual Stream API key
const streamVideoClient = StreamVideoClient.getOrCreateInstance({
  apiKey,
  user: {
    id: "user-id", // Replace with your user ID
  },
});

const VideoMeet = () => {
  const [meetingName, setMeetingName] = useState("");
  const [meetingLink, setMeetingLink] = useState("");

  const createMeeting = async () => {
    try {
      if (!meetingName.trim()) {
        Alert.alert("Error", "Please enter a meeting name.");
        return;
      }

      // Use the call object to create the meeting
      const call = streamVideoClient.call("default", meetingName.trim());
      await call.create();

      const link = `https://video.getstream.io/${call.type}/${call.id}`;
      setMeetingLink(link);
      Alert.alert("Success", "Meeting created successfully!");
    } catch (error) {
      console.error("Error creating meeting:", error);
      Alert.alert("Error", "Failed to create the meeting. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule a Video Meeting</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter meeting name"
        value={meetingName}
        onChangeText={setMeetingName}
      />

      <Button title="Create Meeting" onPress={createMeeting} />

      {meetingLink && (
        <View style={styles.linkContainer}>
          <Text style={styles.linkTitle}>Meeting Link:</Text>
          <Text style={styles.link}>{meetingLink}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  linkContainer: {
    marginTop: 20,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default VideoMeet;
