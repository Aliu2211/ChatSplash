
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from './src/navigation/main';
import NavigationStack from './src/App';

// create a component
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Main /> */}
          <NavigationStack/>
          
        </View>
    </GestureHandlerRootView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
