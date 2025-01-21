import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Alert, Text, TextInput, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import AppButton from '../../components/button'; 
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';
//import Sstyles from '../styles';


const CreatePasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { width, height } = useWindowDimensions();
    const styles = Sstyles(width, height);



    const isFormValid = confirmpassword.trim() !== '' && password.trim() !== '';
    
      const handleContinue = () => {
        if (!isFormValid) {
          Alert.alert('Error', 'Please fill in all fields.');
          return;
        }
        Alert.alert('Success', `Welcome, ${confirmpassword}!`);
        navigation.navigate('Test')
      };


  return (
    <View style={styles.container}>
        <View style={styles.Imagecontainer}>
           <Image source={require('../../assets/icons/logo.png')}/>
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



        <View style={styles.passwordContainer}>
          <Text style={styles.inputTitle}>Confirm Your Password</Text>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            //placeholder="Enter Your Password"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
            value={confirmpassword}
            onChangeText={setConfirmpassword}
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
     
        {/* Continue Button */}
        <AppButton
          title="Continue"
          onPress={handleContinue}
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
   // padding: 20,
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
    alignSelf: 'flex-end',
    width: width*0.3,
    marginBottom: 60,
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
   // justifyContent: 'flex-start',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //gap: 5,
    width: width*0.9,
    marginBottom: 20,
  },
  socialButton: {
    width: width*0.27,
    height: height*0.050,
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
    marginBottom: height*0.08,
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
    bottom: - height*0.2
  },
  signInButtonDisabled: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 18,
    width: width*0.44,
    borderRadius: 45,
    bottom: - height*0.2
  },
});
}


export default CreatePasswordScreen;
