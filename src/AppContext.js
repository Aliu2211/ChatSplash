// AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat-react-native';
import { chatApiKey, chatUserId, chatUserToken, chatUserName } from '../chatConfig';

export const AppContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
  chatClient: null,
});

export const AppProvider = ({ children }) => {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [thread, setThread] = useState(null);
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    const initChat = async () => {
      if (!chatApiKey || !chatUserId || !chatUserToken) {
        console.error('Chat configuration is incomplete');
        setIsConnecting(false);
        return;
      }

      try {
        const client = StreamChat.getInstance(chatApiKey);
        
        // Only connect if not already connected
        if (!client.userID) {
          await client.connectUser(
            {
              id: chatUserId,
              name: chatUserName,
            },
            chatUserToken
          );
        }

        setChatClient(client);
      } catch (error) {
        console.error('Error connecting to Stream Chat:', error);
      } finally {
        setIsConnecting(false);
      }
    };

    initChat();

    // Cleanup on unmount
    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);

  const contextValue = {
    chatClient,
    channel,
    setChannel,
    thread,
    setThread,
    isConnecting,
  };

  if (isConnecting) {
    return null; // or a loading spinner
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};