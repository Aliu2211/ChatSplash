import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialIcons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="google" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="facebook" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="linkedin" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default SocialIcons;
