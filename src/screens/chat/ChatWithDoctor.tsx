import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Channel as ChannelType, MessageList, MessageInput } from "stream-chat-react-native";
import { StreamChat } from "stream-chat";

const ChatWithDoctor = () => {
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const initChat = async () => {
      const chatClient = StreamChat.getInstance("YOUR_API_KEY");
      await chatClient.connectUser({ id: "user-id" }, "USER_TOKEN");
      const channel = chatClient.channel("messaging", "channel-id");
      await channel.watch();
      setClient(chatClient);
      setChannel(channel);
    };

    initChat();
  }, []);

  const sendMessage = async () => {
    if (inputMessage.trim() && channel) {
      await channel.sendMessage({ text: inputMessage });
      setInputMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with Doctor</Text>
      {channel && (
        <Channel channel={channel}>
          <MessageList />
          <MessageInput
            message={inputMessage} // Correct prop
            onChangeText={setInputMessage}
            onSend={sendMessage}
          />
        </Channel>
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
});

export default ChatWithDoctor;
