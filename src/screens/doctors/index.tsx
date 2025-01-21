import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoctorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Doctors Screen</Text>
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

export default DoctorsScreen;
