import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DeviceListScreen from '../devicelist/index';

const HomeScreen: React.FC = () => {
  const [showDeviceList, setShowDeviceList] = useState(false);

  const handleWatchPress = () => {
    setShowDeviceList(true);
  };

  return (
    <View style={styles.container}>
      {showDeviceList ? (
        <DeviceListScreen />
      ) : (
        <View style={styles.centerContent}>
          <TouchableOpacity onPress={handleWatchPress}>
            <Image
              source={require('../../assets/icons/watch.png')}
              style={styles.watchIcon}
            />
            <Text style={styles.title}>Tap the Watch</Text>
            <Text style={styles.subtitle}>Connect Device</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centerContent: {
    alignItems: 'center',
  },
  watchIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
