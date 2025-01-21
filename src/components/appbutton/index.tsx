import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

// Button component props type
interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object; // Optional: for additional custom styles
  textStyle?: object; // Optional: for additional text styles
}

// Reusable Button Component
const AppButton: React.FC<AppButtonProps> = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

// Default styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    fontFamily: 'Raleway-Regular',
  },
});

export default AppButton;
