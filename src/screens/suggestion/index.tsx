import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuggestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Suggestion Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuggestionScreen;
