// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const MetricsDisplay: React.FC<{ heartRate: number; bloodOxygen: number }> = ({ heartRate, bloodOxygen }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.metricCard}>
//         <Text style={styles.metricTitle}>Heart Beat</Text>
//         <Text style={styles.metricValue}>{heartRate} bpm</Text>
//         <Text style={styles.metricLabel}>Previous: {heartRate} bpm</Text>
//         <Text style={styles.metricLabel}>Difference: {heartRate} bpm</Text>
//       </View>
//       <View style={styles.metricCard}>
//         <Text style={styles.metricTitle}>Blood Oxygen Level</Text>
//         <Text style={styles.metricValue}>{bloodOxygen} %</Text>
//         <Text style={styles.metricLabel}>Previous: {bloodOxygen} %</Text>
//         <Text style={styles.metricLabel}>Difference: {bloodOxygen} %</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   metricCard: {
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   metricTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   metricValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   metricLabel: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default MetricsDisplay;





import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MetricsDisplay: React.FC<{ heartRate: number; bloodOxygen: number }> = ({ heartRate, bloodOxygen }) => {
  return (
    <View style={styles.container}>
      {/* Heart Beat Card */}
      <View style={styles.metricCard}>
        <View style={styles.metricHeader}>
          <FontAwesome5 name="heartbeat" size={20} color="#000" />
          <Text style={styles.metricTitle}>Heart Beat</Text>
        </View>
        <Text style={styles.metricValue}>{heartRate} bpm</Text>
        <View style={styles.metricFooter}>
          <View>
            <Text style={styles.subLabel}>Previous</Text>
            <Text style={styles.subValue}>{heartRate} bpm</Text>
          </View>
          <View>
            <Text style={styles.subLabel}>Difference</Text>
            <Text style={styles.subValue}>
              {heartRate} bpm{' '}
              <Ionicons name="arrow-up-outline" size={16} color="#000" />
            </Text>
          </View>
        </View>
      </View>

      {/* Blood Oxygen Level Card */}
      <View style={styles.metricCard}>
        <View style={styles.metricHeader}>
          <Ionicons name="md-water-outline" size={20} color="#000" />
          <Text style={styles.metricTitle}>Blood Oxygen Level</Text>
        </View>
        <Text style={styles.metricValue}>{bloodOxygen} %</Text>
        <View style={styles.metricFooter}>
          <View>
            <Text style={styles.subLabel}>Previous</Text>
            <Text style={styles.subValue}>{bloodOxygen} %</Text>
          </View>
          <View>
            <Text style={styles.subLabel}>Difference</Text>
            <Text style={styles.subValue}>
              {bloodOxygen} %{' '}
              <Ionicons name="arrow-down-outline" size={16} color="#000" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  metricCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metricTitle: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#333',
  },
  metricValue: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000',
  },
  metricFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subLabel: {
    fontSize: 12,
    color: '#666',
  },
  subValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MetricsDisplay;
