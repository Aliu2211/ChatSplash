import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DoctorList from '../screens/doctors/DoctorList';
import ChatWithDoctor from '../screens/chat/ChatWithDoctor';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Chat,
  OverlayProvider,
  useCreateChatClient,
  ChannelList,
} from 'stream-chat-react-native';
import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId, chatUserName, chatUserToken } from './../../chatConfig';
import { AppProvider, useAppContext } from "../AppContext";

// Import Screens and Navigators
import Test from './test';
import Onboarding from '../screens/onboarding';
import LoginScreen from '../screens/login/index';
import CodeEntryScreen from '../screens/codeentryscreen/index';
import CreatePasswordScreen from '../screens/createpassword/index';
import ForgotPasswordScreen from '../screens/forgotpassword/index';
import SignupScreen from '../screens/signup/index';
import TermsOfServiceScreen from '../screens/termsofservices';
import BottomTabNavigator from './tab'; // Import your BottomTabNavigator
import DeviceListScreen from '../screens/devicelist/index'; // Import the DeviceListScreen
import VideoMeet from '../screens/chat/call/video';

const Stack = createNativeStackNavigator();




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
const ChannelScreen = () => {
    return null;
  }
  
  const ChannelListScreen = () => {
    // const { navigation } = props;
    const { setChannel } = useAppContext();
    return (
      <ChannelList
        onSelect={(channel) => {
          setChannel(channel);
         // navigation.navigate('ChannelScreen');
        }
      }
       
      />
    );
  };


const user = {
  id: chatUserId,
  name: chatUserName,
};




function RootStack() {

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
            <Stack.Navigator initialRouteName="Onboarding">
              {/* Onboarding, Authentication Screens */}
              <Stack.Screen
                name="Test"
                component={Test}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="meet"
                component={VideoMeet}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CodeEntry"
                component={CodeEntryScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePassword"
                component={CreatePasswordScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TermsOfService"
                component={TermsOfServiceScreen}
                options={{ headerShown: false }}
              />

              {/* Main App Navigation with Bottom Tabs */}
              <Stack.Screen
                name="DeviceList"
                component={DeviceListScreen} // Import this at the top
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainTabs"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
              />
              {/* New Screens */}
              <Stack.Screen name="DoctorList" component={DoctorList} />
              <Stack.Screen name="ChatWithDoctor" component={ChatWithDoctor} />

              <Stack.Screen name="ChannelListScreen" component={ChannelListScreen} />
              <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
            </Stack.Navigator>
          </Chat>
        </OverlayProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
