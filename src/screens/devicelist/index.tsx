import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeviceDetails from './DeviceDetails';

const DeviceListScreen: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const devices = Array(12).fill('FitBit A7'); // Mock data for devices

  const handleDevicePress = (device: string) => {
    setSelectedDevice(device);
  };

  const handleBack = () => {
    setSelectedDevice(null);
  };

  return (
    <View style={styles.container}>
      {selectedDevice ? (
        <DeviceDetails deviceName={selectedDevice} onBack={handleBack} />
      ) : (
        <>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={50} color="#ccc" />
          </View>
          <View style={styles.centeredDevice}>
            <View style={styles.circleOuter}>
              <View style={styles.circleMiddle}>
                <View style={styles.circleInner}>
                  <Image
                   source={require('../../assets/icons/swatch.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.deviceListTitle}>List of Devices</Text>
          <FlatList
            data={devices}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            columnWrapperStyle={styles.deviceRow}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.deviceItem} onPress={() => handleDevicePress(item)}>
                <View style={styles.mcircleInner}>
                    {/* <Ionicons name="watch-outline" size={30} color="#000" /> */}
                    <Image
                       source={require('../../assets/icons/swatch.png')}
                       style={styles.image}
                      />
                </View>
                <Text style={styles.deviceName}>{item}</Text>
                
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  centeredDevice: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  circleOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleMiddle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '35%',
    height: '55%'

  },
  mcircleInner: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceListTitle: {
    fontSize: 17,
    //fontWeight: 'bold',
    fontFamily: 'Raleway-Bold',
    marginVertical: 10,
  },
  deviceRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  deviceItem: {
    alignItems: 'center',
    width: '22%',
    marginHorizontal: 6,
  },
  deviceName: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Raleway-Regular',
    marginTop: 5,
    color: '#666',
  },
});

export default DeviceListScreen;
