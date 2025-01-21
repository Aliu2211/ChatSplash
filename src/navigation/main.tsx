
// 519891c4-dc81-4812-a0f0-c0dce6e403fb

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
