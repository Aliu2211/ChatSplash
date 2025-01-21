



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Alert,
//   useWindowDimensions,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import AppButton from '../../components/button';
// import { useNavigation } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../navigation/type';

// const CodeEntryScreen = () => {
//   const [code, setCode] = useState(['', '', '', '', '']);
//   const { width, height } = useWindowDimensions();
//   const styles = Sstyles(width, height);
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   const isFormValid = code.every((digit) => digit.trim() !== '');

//   const handleResetPassword = () => {
//     if (!isFormValid) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }
//     Alert.alert('Success', `Code entered: ${code.join('')}`);
//     navigation.navigate('CreatePassword');
//   };

//   const handleChange = (text: string, index: number) => {
//     const newCode = [...code];
//     newCode[index] = text;
//     setCode(newCode);

//     // Automatically move to the next input field if filled
//     if (text.length === 1 && index < code.length - 1) {
//       const nextInput = index + 1;
//       const nextInputRef = inputs[nextInput];
//       nextInputRef?.focus();
//     }
//   };

//   // Create input refs for managing focus
//   const inputs: TextInput[] = [];

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={require('../../assets/icons/logo.png')} />
//       </View>
//       <Text style={styles.inputTitle}>Enter Code</Text>
//       <View style={styles.codeContainer}>
//         {code.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.inputBox}
//             value={digit}
//             onChangeText={(text) => handleChange(text, index)}
//             keyboardType="numeric"
//             maxLength={1}
//             ref={(ref) => (inputs[index] = ref!)}
//           />
//         ))}
//       </View>
//       <Text style={styles.infoText}>
//         Code Expires after <Text style={styles.infoHighlight}>25 minutes</Text>
//       </Text>
//       <AppButton
//         title="Reset Password"
//         onPress={handleResetPassword}
//         disabled={!isFormValid}
//         style={!isFormValid ? styles.resetButtonDisabled : styles.resetButton}
//       />
//     </View>
//   );
// };

// const Sstyles = (width: number, height: number) => {
//   return StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     imageContainer: {
//       marginTop: - height* 0.27,
//       marginBottom: height* 0.090,
//     },
//     inputTitle: {
  
//       fontSize: 16,
//       color: '#000000',
//       fontWeight: '600',
//       fontFamily: 'Raleway-SemiBold',
//       marginBottom: height*0.014,
//       right: width*0.3
//     },
//     codeContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: width * 0.8,
//       marginBottom: height * 0.03,
//     },
//     inputBox: {
//       width: width * 0.13,
//       height: width * 0.13,
//       borderWidth: 1.5,
//       borderColor: '#000',
//       borderRadius: 6,
//       textAlign: 'center',
//       fontSize: 18,
//       color: '#000',
//     },
//     infoText: {
//       fontSize: 14,
//       color: '#000',
//       //marginBottom: height * 0.04,
//       bottom: - height*0.25
//     },
//     infoHighlight: {
//       fontWeight: 'bold',
//     },
//     resetButton: {
//       backgroundColor: '#D9D9D9',
//       paddingVertical: 15,
//       paddingHorizontal: 40,
//       borderRadius: 25,
//       bottom: - height*0.30
//     },
//     resetButtonDisabled: {
//       backgroundColor: '#f2f2f2',
//       paddingVertical: 15,
//       paddingHorizontal: 40,
//       borderRadius: 25,
//       bottom: - height*0.30
//     },
//   });
// };

// export default CodeEntryScreen;




import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  useWindowDimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import AppButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/type';

const CodeEntryScreen = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [countdown, setCountdown] = useState(500); // 25 minutes in seconds
  const [resendDisabled, setResendDisabled] = useState(true);
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const isFormValid = code.every((digit) => digit.trim() !== '');
  const correctCode = '12345'; // Example correct code for validation
  const inputs: TextInput[] = [];

  const timerRef = useRef<number | null>(null); 

useEffect(() => {
  // Timer countdown logic
  timerRef.current = setInterval(() => {
    setCountdown((prev) => {
      if (prev <= 1) {
        if (timerRef.current) {
          clearInterval(timerRef.current); // Clear interval
          timerRef.current = null;
        }
        return 0;
      }
      return prev - 1;
    });
  }, 1000) as unknown as number;

  return () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
}, []);


  useEffect(() => {
    // Disable the resend button for 25 minutes
    if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [countdown]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Automatically move to the next input field if filled
    if (text.length === 1 && index < code.length - 1) {
      const nextInput = index + 1;
      const nextInputRef = inputs[nextInput];
      nextInputRef?.focus();
    }
  };

  const handleResetPassword = () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const enteredCode = code.join('');
    if (enteredCode === correctCode) {
      Alert.alert('Success', 'Code verified successfully!');
      navigation.navigate('CreatePassword');
    } else {
      Alert.alert('Error', 'Invalid code. Please try again.');
    }
  };

  const handleResendCode = () => {
    if (resendDisabled) return;
    setCode(['', '', '', '', '']);
    setCountdown(500); // Reset timer to 25 minutes
    setResendDisabled(true);

    // Simulate resending the OTP (replace with real API call)
    Alert.alert('Code Resent', 'A new code has been sent to your email.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/icons/logo.png')} />
      </View>
      <Text style={styles.inputTitle}>Enter Code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.inputBox}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputs[index] = ref!)}
          />
        ))}
      </View>
      <Text style={styles.infoText}>
        Code Expires in <Text style={styles.infoHighlight}>{formatTime(countdown)}</Text>
      </Text>
      <AppButton
        title="Reset Password"
        onPress={handleResetPassword}
        disabled={!isFormValid}
        style={!isFormValid ? styles.resetButtonDisabled : styles.resetButton}
      />
      <AppButton
        title="Resend Code"
        onPress={handleResendCode}
        disabled={resendDisabled}
        style={resendDisabled ? styles.resendButtonDisabled : styles.resendButton}
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
      justifyContent: 'center',
    },
    imageContainer: {
      marginTop: - height* 0.27,
      marginBottom: height* 0.090,
    },
    inputTitle: {
  
      fontSize: 16,
      color: '#000000',
      fontWeight: '600',
      fontFamily: 'Raleway-SemiBold',
      marginBottom: height*0.014,
      right: width*0.3
    },

    codeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.8,
      marginBottom: height * 0.03,
    },

    infoText: {
      fontSize: 14,
      color: '#000',
      bottom: - height*0.25
    },

    resetButton: {
      backgroundColor: '#000000',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
      bottom: - height*0.30
    },
    resetButtonDisabled: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
      bottom: - height*0.30
    },
   
   
    inputBox: {
      width: width * 0.13,
      height: width * 0.13,
      borderWidth: 1.5,
      borderColor: '#000',
      borderRadius: 6,
      textAlign: 'center',
      fontSize: 18,
      color: '#000',
    },
  
    infoHighlight: {
      fontWeight: 'bold',
    },

    resendButton: {
      backgroundColor: '#000000',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      left: width*0.26,
      top: - height*0.09
    },
    resendButtonDisabled: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      left: width*0.26,
      top: - height*0.09
    },
  });
};

export default CodeEntryScreen;
