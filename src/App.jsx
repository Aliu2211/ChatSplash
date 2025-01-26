import { SafeAreaView, Text } from 'react-native';
import {
    Chat,
    OverlayProvider,
    useCreateChatClient,
    ChannelList,
  } from 'stream-chat-react-native';
  import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId, chatUserName, chatUserToken } from './../chatConfig';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, useAppContext } from "./AppContext";

import React from 'react';

const filters = {
    members: {
      '$in': [chatUserId]
    },
  };
  
  const sort = {
    last_message_at: -1,
  };

// const ChannelListScreen = () => {
//   return <ChannelList
//   filters={filters}
//   sort={sort}
// />

// }
const ChannelScreen = props => {
    return null;
  }
  
  const ChannelListScreen = props => {
    const { navigation } = props;
    const { setChannel } = useAppContext();
    return (
      <ChannelList
        onSelect={(channel) => {
          setChannel(channel);
          navigation.navigate('ChannelScreen');
        }
      }
       
      />
    );
  };


const user = {
  id: chatUserId,
  name: chatUserName,
};
const Stack = createStackNavigator();

const NavigationStack = () => {
  
    const chatClient = useCreateChatClient({
        apiKey: chatApiKey,
        userData: user,
        tokenOrProvider: chatUserToken,
      });

  if (!chatClient) {
    return (
        <AppProvider>
            <SafeAreaView>
                <Text>Loading chat ...</Text>
            </SafeAreaView>
        </AppProvider>
    );
  }

  return (
    <OverlayProvider>
         <Chat client={chatClient}>
            <Stack.Navigator>
                <Stack.Screen name="ChannelListScreen" component={ChannelListScreen} />
                <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
            </Stack.Navigator>
        </Chat>
    </OverlayProvider>
  );
};

export default NavigationStack
