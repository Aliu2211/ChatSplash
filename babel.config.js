module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'module:react-native-vector-icons',
    'module:react-native-screens',
    'module:react-native-screens/ios',
    'module:react-native-screens/android',
    'react-native-reanimated/plugin', // Reanimated plugin has to be listed last.
  ],
};
