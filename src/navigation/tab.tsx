import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home';
import SuggestionScreen from '../screens/suggestion';
import SymptomsScreen from '../screens/symptoms';
import RewardsScreen from '../screens/rewards';
import DoctorsScreen from '../screens/doctors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Suggestion') {
            iconName = focused ? 'bulb' : 'bulb-outline';
          } else if (route.name === 'Symptoms') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'gift' : 'gift-outline';
          } else if (route.name === 'Doctors') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopColor: '#ccc',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Suggestion" component={SuggestionScreen} />
      <Tab.Screen name="Symptoms" component={SymptomsScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Doctors" component={DoctorsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
