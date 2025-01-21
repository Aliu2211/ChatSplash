



// import React from 'react';
// import {
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   StyleProp,
//   ViewStyle,
// } from 'react-native';

// interface AppButtonProps {
//   title: string;
//   onPress?: () => void;
//   disabled?: boolean;
//   style?: StyleProp<ViewStyle>;
// }

// const AppButton: React.FC<AppButtonProps> = ({
//   title,
//   onPress,
//   disabled = false,
//   style,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, style, disabled && styles.disabledButton]}
//       onPress={onPress}
//       disabled={disabled}
//     >
//       <Text style={[styles.buttonText, disabled && styles.disabledText]}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontFamily: 'Raleway-SemiBold',
//     fontWeight: 'bold',
//   },
//   disabledButton: {
//     backgroundColor: '#D9D9D9',
//   },
//   disabledText: {
//     color: '#000000',
//     fontWeight: '800',
//     fontFamily: 'Raleway-SemiBold'
//   },
// });

// export default AppButton;





import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>; // Add textStyle prop
  accessibilityLabel?: string; // Add this line
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle, // Destructure textStyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle, disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
   // fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#D9D9D9',
  },
  disabledText: {
    color: '#000000',
    fontWeight: '800',
    fontFamily: 'Raleway-SemiBold',
  },
});

export default AppButton;
