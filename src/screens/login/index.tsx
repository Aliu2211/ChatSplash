

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  useWindowDimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FIcon from 'react-native-vector-icons/FontAwesome'; 
import AppButton from '../../components/button'; 
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSignIn = () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', `Welcome, ${email}!`); 
    navigation.navigate('MainTabs'); // Corrected the navigation name to match the defined route
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
     

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <Text style={styles.inputTitle}>Enter Your Password</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          //placeholder="Enter Your Password"
          placeholderTextColor="#999"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Social Sign-In Buttons */}
      <Text style={styles.orText}>Or Sign In With</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FIcon name="google" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FIcon name="facebook" size={20} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FIcon name="linkedin" size={20} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Terms and Sign-Up */}
      <Text style={styles.termsText}>
        By Signing In, You agree to our{' '}
        <Text style={styles.link} onPress={()=> navigation.navigate('TermsOfService')}>terms of services</Text>. Don’t have an account?{' '}
        <Text style={styles.link} onPress={()=> navigation.navigate('Signup')}>Sign Up</Text>
      </Text>

      {/* Sign-In Button */}
      <AppButton
        title="Sign In"
        onPress={handleSignIn}
        disabled={!isFormValid}
        style={!isFormValid ? styles.signInButtonDisabled : styles.signInButton }
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
    marginTop: height* 0.070,
    marginBottom: height* 0.055,

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
    //position: 'relative',

  },
  passwordContainer: {
    width: width*0.9,
   // position: 'relative',
  },
  passwordInput: {
    paddingRight: 50, // Space for the eye icon
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: width*0.11,
  },
  forgotPassword: {
    marginBottom: 50,
    left: width*0.3
  },
  forgotText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Raleway-SemiBold'
  },
  orText: {
    fontSize: 16,
    color: '#00000',
    fontFamily: 'Raleway-SemiBold',
    right: width*0.32,
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //gap: 5,
    width: width*0.9,
    marginBottom: 15,
  },
  socialButton: {
    width: width*0.27,
    height: height*0.055,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontSize: width*0.035,
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
    justifyContent: 'center',
    width: width*0.7,
    marginBottom: height*0.07,
    color: '#000000',
  },
  link: {
    color: '#000000',
    fontFamily: 'Raleway-Bold',
    fontWeight: '800',
  },
  signInButton: {
    backgroundColor: '#000000',
    paddingVertical: 18,
    width: width*0.44,
    borderRadius: 45,
    bottom: height*0.04
  },
  signInButtonDisabled: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 18,
    width: width*0.44,
    borderRadius: 45,
    bottom: height*0.04
  },
});
}

export default LoginScreen;
