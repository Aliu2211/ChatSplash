



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);

  const isFormValid =
    email.trim() !== '' && password.trim() !== '' && password === confirmPassword;

  const handleSignUp = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', `Welcome, ${email}!`);
    navigation.navigate('Test');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Imagecontainer}>
        <Image source={require('../../assets/icons/logo.png')} />
      </View>

      {/* Email Input */}
      <View style={styles.emailContainer}>
        <Text style={styles.inputTitle}>Enter Your Email</Text>
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
          placeholder="Password"
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

      {/* Confirm Password Input */}
      <View style={styles.passwordContainer}>
        <Text style={styles.inputTitle}>Confirm Your Password</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Icon
            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Sign-In Navigation */}
      <Text style={styles.termsText}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('login')}
        >
          Sign In
        </Text>
      </Text>

      {/* Sign-Up Button */}
      <AppButton
        title="Sign Up"
        onPress={handleSignUp}
        disabled={!isFormValid}
        style={!isFormValid ? styles.signInButtonDisabled : styles.signInButton}
        accessibilityLabel="Sign up button"
      />
    </View>
  );
};

const Sstyles = (width: number, height: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    Imagecontainer: {
      marginTop: height * 0.09,
      marginBottom: height * 0.07,
    },
    inputTitle: {
      fontSize: 16,
      color: '#000',
      fontWeight: '600',
      fontFamily: 'Raleway-SemiBold',
      marginBottom: height * 0.01,
    },
    input: {
      width: width * 0.9,
      height: width * 0.13,
      borderWidth: 1.7,
      borderColor: '#000',
      borderRadius: 3,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 20,
      color: '#000',
    },
    emailContainer: {
      width: width * 0.9,
    },
    passwordContainer: {
      width: width * 0.9,
    },
    passwordInput: {
      paddingRight: 50,
    },
    eyeIcon: {
      position: 'absolute',
      right: 15,
      top: width * 0.11,
    },
    termsText: {
      fontSize: width * 0.035,
      fontFamily: 'Raleway-SemiBold',
      textAlign: 'center',
      width: width * 0.7,
      marginBottom: height * 0.08,
      color: '#000',
    },
    link: {
      color: '#000',
      fontFamily: 'Raleway-Bold',
    },
    signInButton: {
      backgroundColor: '#000',
      paddingVertical: 20,
      width: width * 0.44,
      borderRadius: 45,
    },
    signInButtonDisabled: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 20,
      width: width * 0.44,
      borderRadius: 45,
    },
  });
};

export default SignupScreen;
