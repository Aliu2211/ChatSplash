import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelList,
  StreamChat,
} from 'stream-chat-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../chatConfig';
import { useAppContext } from "./AppContext";
import { initializeTestChannels } from './utils/chatUtils';

// Initialize the Stream Chat client
const chatClient = StreamChat.getInstance(chatApiKey);

const filters = {
  members: {
    '$in': [chatUserId]
  },
  type: 'messaging',
};

const sort = {
  last_message_at: -1,
};

const ChannelScreen = () => {
  const { channel } = useAppContext();
  
  if (!channel) {
    return (
      <SafeAreaView>
        <Text>Loading channel...</Text>
      </SafeAreaView>
    );
  }

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

const ChannelListScreen = ({ navigation }) => {
  const { setChannel } = useAppContext();
  const [isCreatingChannels, setIsCreatingChannels] = useState(false);
  
  const handleCreateTestChannels = async () => {
    if (!chatClient.userID) {
      console.error('Client not connected');
      return;
    }
    
    setIsCreatingChannels(true);
    try {
      await initializeTestChannels(chatClient);
    } catch (error) {
      console.error('Error creating test channels:', error);
    } finally {
      setIsCreatingChannels(false);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleCreateTestChannels}
        style={{
          padding: 10,
          backgroundColor: '#006CFF',
          margin: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>
          {isCreatingChannels ? 'Creating Channels...' : 'Create Test Channels'}
        </Text>
      </TouchableOpacity>
      <ChannelList
        filters={filters}
        sort={sort}
        onSelect={(channel) => {
          setChannel(channel);
          navigation.navigate('ChannelScreen');
        }}
      />
    </>
  );
};

const Stack = createStackNavigator();

const NavigationStack = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initChat = async () => {
      try {
        // Disconnect any existing user first
        if (chatClient.userID) {
          await chatClient.disconnectUser();
        }

        // Connect the user
        await chatClient.connectUser(
          {
            id: chatUserId,
            name: chatUserName,
          },
          chatUserToken
        );

        setIsReady(true);
      } catch (error) {
        console.error('Error connecting to Stream Chat:', error);
        setIsReady(false);
      }
    };

    initChat();

    return () => {
      const cleanup = async () => {
        try {
          if (chatClient?.userID) {
            await chatClient.disconnectUser();
          }
        } catch (error) {
          console.error('Error disconnecting user:', error);
        }
      };
      cleanup();
    };
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Connecting to chat...</Text>
      </SafeAreaView>
    );
  }

  return (
    <Chat client={chatClient}>
      <Stack.Navigator>
        <Stack.Screen 
          name="ChannelList" 
          component={ChannelListScreen}
          options={{ title: 'Channels' }}
        />
        <Stack.Screen 
          name="ChannelScreen" 
          component={ChannelScreen}
          options={{ title: 'Chat' }}
        />
      </Stack.Navigator>
    </Chat>
  );
};

export default NavigationStack;
