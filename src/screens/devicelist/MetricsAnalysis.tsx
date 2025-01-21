import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Svg, Path } from 'react-native-svg';

// Metrics Display Component


const MetricsDisplay: React.FC<{ heartRate: number; bloodOxygen: number }> = ({ heartRate, bloodOxygen }) => {
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);
  
  return (
    <View style={styles.metricsDisplayContainer}>
      <View style={styles.metricCard}>
        <View style={styles.cardTop}>
            <Text style={styles.metricTitle}>Heart Rate</Text>
            <Ionicons name="person-circle-outline" size={50} color="#ccc" />
        </View>
       
        <Text style={styles.metricValue}>{heartRate} bpm</Text>
        <View style={styles.cardBottom}>
            <View style={styles.cardBottomLeft}>
                <Text style={styles.metricLabel}>Previous: {heartRate} bpm</Text>
            </View>
            <View style={styles.cardBottomRight}>
                <Text style={styles.metricLabel}>Difference: {heartRate} bpm</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.metricCard}>
        <Text style={styles.metricTitle}>Blood Oxygen Level</Text>
        <Text style={styles.metricValue}>{bloodOxygen} %</Text>
        <Text style={styles.metricLabel}>Previous: {bloodOxygen} %</Text>
        <Text style={styles.metricLabel}>Difference: {bloodOxygen} %</Text>
      </View>
    </View>
  );
};

// Metrics Analysis Component
const MetricsAnalysis: React.FC<{ onStop: () => void }> = ({ onStop }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);

  useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 3000000); // Simulate a 3-second analysis
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing]);

  return (
    <View style={styles.analysisContainer}>
      {isAnalyzing ? (
        <View style={styles.centered}>
          <Svg height="40" width="200">
            <Path
              d="M0 10 Q 50 60, 100 20 T 200 20"
              stroke="#aaa"
              strokeWidth="2"
              fill="none"
            />
          </Svg>
          <Text style={styles.analyzingText}>Analyzing Metrics...</Text>
          <TouchableOpacity style={styles.stopButton} onPress={onStop}>
            <Text style={styles.stopButtonText}>Stop</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <MetricsDisplay heartRate={75} bloodOxygen={98} />
      )}
    </View>
  );
};

// Device Detail Screen
const DeviceDetailScreen: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);
  

  const handleStop = () => {
    setIsAnalyzing(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#ccc" />
      </View>

      {/* Centered Device Icon */}
      <View style={styles.centeredDevice}>
        <View style={styles.deviceCircle}>
          {/* <Ionicons name="watch-outline" size={60} color="#000" /> */}
           <Image
              source={require('../../assets/icons/swatch.png')}
              style={styles.image}
            />
        </View>
        <Text style={styles.deviceName}>FitBit A7</Text>
      </View>

      {/* Metrics Analysis */}
      <MetricsAnalysis onStop={handleStop} />
    </View>
  );
};

const Sstyles = (width: number, height: number) => {

return  StyleSheet.create({
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
    marginVertical: 20,
  },
  // deviceCircle: {
  //   width: 160,
  //   height: 160,
  //   borderRadius: 60,
  //   backgroundColor: '#f5f5f5',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  deviceName: {
    fontSize: 36,
    fontWeight: '600',
    fontFamily: 'Raleway-Light',
    color: '#000',
    marginTop: 15,
  },
 
  analysisContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
  },
  analyzingText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    marginBottom: 20,
  },
  stopButton: {
    backgroundColor: '#ccc',
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  stopButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  metricsDisplayContainer: {
    alignItems: 'center',
  },
  metricCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    width: '90%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTop:{

  },
  cardBottom: {

  },
  cardBottomLeft: {

  },
  cardBottomRight: {

  },
  metricTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  metricValue: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginVertical: 10,
  },
  metricLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  // image: {
  //   height: 10,
  //   width: 10,
  // },
  image: {
    width: '35%',
    height: '55%'

  },
  deviceCircle: {
    width: width* 0.45,
    height: width*0.45,
    borderRadius: 100,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}

export default DeviceDetailScreen;
