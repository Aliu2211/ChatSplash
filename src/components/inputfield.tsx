import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}: {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'number-pad';
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
});

export default InputField;
