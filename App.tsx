//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { OverlayProvider } from 'stream-chat-react-native';
import { AppProvider } from './src/AppContext';
import NavigationStack from './src/App';

// create a component
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppProvider>
          <OverlayProvider>
            <NavigationContainer>
              <NavigationStack />
            </NavigationContainer>
          </OverlayProvider>
        </AppProvider>
      </View>
    </GestureHandlerRootView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
