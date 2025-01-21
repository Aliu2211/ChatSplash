import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MetricsAnalysis from './MetricsAnalysis';
import AppButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';


const DeviceDetails: React.FC<{ deviceName: string; onBack: () => void; onStop: ()=> void }> = ({ onStop, deviceName, onBack,  }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { width, height } = useWindowDimensions();
   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = Sstyles(width, height);

  const handleBeginCheck = () => {
    setIsAnalyzing(true);
  };

  const handleStop = () => {
    setIsAnalyzing(false);
  };

  return (
    <View style={styles.container}>
      {isAnalyzing ? (
         <MetricsAnalysis onStop={handleStop} />
      ) : (
        <>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={50} color="#ccc" />
          </View>
          <View style={styles.centeredDevice}>
      
             <View style={styles.mcircleInner}>
                <Image
                    source={require('../../assets/icons/swatch.png')}
                    style={styles.image}
                  />
              </View>
          </View>
          <Text style={styles.deviceName}>{deviceName}</Text>
          <AppButton
              title="Begin Check"
              onPress={handleBeginCheck}
              style={ styles.backButton}
              textStyle= {styles.buttonText}
            />
            <AppButton
              title="Back"
              onPress={ () => navigation.goBack()}
             // disabled={resendDisabled}
              style={ styles.backButton}
              textStyle= {styles.buttonText}
            />
        </>
      )}
    </View>
  );
};

const Sstyles = (width: number, height: number) => {
  return StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    top: - height*0.14

  },
  centeredDevice: {
    alignItems: 'center',
    justifyContent: 'center',
    top: - height*0.06
  },
  deviceName: {
    fontSize: 24,
   // fontWeight: 'bold',
   fontFamily: 'Raleway-Meduim',
   top: - height*0.04
    
  },
 
  buttonText: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Raleway-Medium'
  },
  image: {
    width: '35%',
    height: '55%'

  },
  mcircleInner: {
    width: width* 0.4,
    height: width*0.4,
    borderRadius: 100,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    width: width*0.5,
    height: height*0.08,
    borderRadius: 25,
    bottom: - height*0.12,
    marginBottom: 15
  },
  
});
}
export default DeviceDetails;
