import React, { useState } from 'react';
import { View, Text, Alert, Image, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import AppButton from '../../components/button';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';



const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { width, height } = useWindowDimensions();
    const styles = Sstyles(width, height);


    const isFormValid = email.trim() !== ''
    
      const handleSendCode = () => {
        if (!isFormValid) {
          Alert.alert('Error', 'Please fill in all fields.');
          return;
        }
        Alert.alert('Success', `Welcome, ${email}!`);
        navigation.navigate('CodeEntry')
      };

  return (
    <View style={styles.container}>
      <View style={styles.Imagecontainer}>
              <Image source={require('../../assets/icons/logo.png')}/>
      </View>
       {/* Email Input */}
      <View style={styles.emailContainer}>
        <Text style={styles.inputTitle}> Enter Your Email </Text>
        <TextInput
          style={styles.input}
          placeholder="neesim25@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <AppButton
        title="Send Code"
        onPress={handleSendCode}
        disabled={!isFormValid}
        style={!isFormValid ? styles.sendCodeButtonDisabled : styles.sendCodeButton }
      />
    </View>
  );
};



const Sstyles = (width: number, height:number) => {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  Imagecontainer: {
    marginTop: height* 0.090,
    marginBottom: height* 0.070,

  },
  inputTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    fontFamily: 'Raleway-SemiBold',
    marginBottom: height*0.010,
    right: 1

  },
  input: {
    width: width*0.9,
    height: width*0.13,
    borderWidth: 1.7,
    borderColor: '#000000',
    borderRadius: 3,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  emailContainer: {
    width: width*0.9,
    

  },

  sendCodeButton: {
    backgroundColor: '#000000',
    paddingVertical: 18,
    width: width*0.44,
    borderRadius: 45,
    bottom: - height*0.38
  },
  sendCodeButtonDisabled: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 18,
    width: width*0.44,
    borderRadius: 45,
    bottom: - height*0.38
  },
});
}

export default ForgotPasswordScreen;
