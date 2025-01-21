import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface DeviceDetailScreenProps {
  navigation: any; // Replace with proper navigation type if using TypeScript
  route: any;
}

const DeviceDetailScreen: React.FC<DeviceDetailScreenProps> = ({ navigation, route }) => {
  const { deviceName } = route.params;

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.header}>
        <Image source={require('../../assets/user_icon.png')} style={styles.userIcon} />
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <View style={styles.deviceIconContainer}>
          <Image
            source={require('../../assets/icons/device.png')} // Replace with your device icon
            style={styles.deviceIcon}
          />
        </View>
        <Text style={styles.deviceName}>{deviceName}</Text>

        {/* <TouchableOpacity style={styles.button} onPress={() => alert('Begin Check')}>
          <Text style={styles.buttonText}>Begin Check</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  deviceIconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  deviceIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  deviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default DeviceDetailScreen;
