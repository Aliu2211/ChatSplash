


// import React from 'react';
// import { ScrollView, View, Alert, Text, StyleSheet, useWindowDimensions } from 'react-native';
// import AppButton from '../../components/button';

// const TermsOfServiceScreen: React.FC = () => {

//   const { width, height } = useWindowDimensions();
//   const styles = Sstyles(width, height);

//   const isFormValid = height*1

  
  
//     const handleSignUp = () => {
//       if (!isFormValid) {
//         Alert.alert('Error', 'Please fill in all fields.');
//         return;
//       }
//       //Alert.alert('Success', `Welcome, ${email}!`);
//       //navigation.navigate('Test')
//     };
//   return (
//     <View style={styles.container}>
//       {/* Fixed header */}
//       <View style={styles.header}>
//         <Text style={styles.heading}>TERMS OF SERVICE</Text>
//       </View>

//       {/* Scrollable content */}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* First Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal One</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>

//         {/* Second Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Two</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>

//         {/* Third Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Three</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>

//         {/* Third Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Three</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>


//         {/* Third Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Three</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>


//         {/* Third Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Three</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>


//         {/* Third Paragraph */}
//         <Text style={styles.paragraph}>
//           <Text style={styles.title}>Legal Three</Text>
//           {"\n\n"}
//           <Text style={styles.body}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.
//           </Text>
//         </Text>
//       </ScrollView>

//       {/* Fixed footer */}
//       <View style={styles.footer}>
//         <AppButton
//         title="Sign Up"
//         onPress={handleSignUp}
//         disabled={!isFormValid}
//         style={!isFormValid ? styles.signInButtonDisabled : styles.signInButton }
//       />
//       </View>
//     </View>
//   );
// };

// const Sstyles = (width: number, height: number ) => {
//   return StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     height: height*0.08,
//     justifyContent: 'center',
//     alignItems: 'center',
   
//   },
//   heading: {
//     fontSize: 25,
//     color: '#000000',
//     fontFamily: 'Raleway-Bold',
//     top: height*0.01
//   },
//   scrollContainer: {
//     padding: 22,
//   },
//   paragraph: {
//     marginBottom: 22,
//     // color: '#000000',
//     // fontFamily: 'Raleway-Medium',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//     fontFamily: 'Raleway-Bold',
    
//   },
//   body: {
//     fontSize: 14,
//     color: '#000000',
//     fontFamily: 'Raleway-Medium',
//     width: width*0.7,
//     lineHeight: 20,
//   },
//   footer: {
//     height: height*0.10,
//     justifyContent: 'center',
//     alignItems: 'center',
//    // borderTopWidth: 1,
//     //borderTopColor: '#ccc',
//   },
//   signInButton: {
//     backgroundColor: '#000000',
//     paddingVertical: 15,
//     width: width*0.42,
//     borderRadius: 45,
//     bottom: height*0.003
//   },
//   signInButtonDisabled: {
//     backgroundColor: '#D9D9D9',
//     paddingVertical: 15,
//     width: width*0.42,
//     borderRadius: 45,
//     bottom: height*0.003
//   },
// });
// }

// export default TermsOfServiceScreen;







import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Alert,
  Text,
  StyleSheet,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import AppButton from '../../components/button';

const TermsOfServiceScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isScrolledToEnd =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setIsButtonEnabled(isScrolledToEnd);
  };

  const handleSignUp = () => {
    if (!isButtonEnabled) {
      Alert.alert('Error', 'Please scroll to the end of the Terms of Service.');
      return;
    }
    Alert.alert('Success', 'You have accepted the Terms of Service.');
  };

  const termsData = [
    {
      title: 'Legal One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.',
    },
    {
      title: 'Legal Two',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.',
    },
    {
      title: 'Legal Three',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.',
    },
    {
      title: 'Legal Four',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.',
    },
    {
      title: 'Legal Five',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at ultrices ligula dictum et.',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Fixed header */}
      <View style={styles.header}>
        <Text style={styles.heading}>TERMS OF SERVICE</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {termsData.map((term, index) => (
          <Text key={index} style={styles.paragraph}>
            <Text style={styles.title}>{term.title}</Text>
            {'\n\n'}
            <Text style={styles.body}>{term.body}</Text>
          </Text>
        ))}
      </ScrollView>

      {/* Fixed footer */}
      <View style={styles.footer}>
        <AppButton
          title="I agree"
          onPress={handleSignUp}
          disabled={!isButtonEnabled}
          style={!isButtonEnabled ? styles.signInButtonDisabled : styles.signInButton}
        />
      </View>
    </View>
  );
};

const Sstyles = (width: number, height: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      height: height * 0.08,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 25,
      color: '#000000',
      fontFamily: 'Raleway-Bold',
      top: height * 0.01,
    },
    scrollContainer: {
      padding: 22,
    },
    paragraph: {
      marginBottom: 22,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
      fontFamily: 'Raleway-Bold',
    },
    body: {
      fontSize: 14,
      color: '#000000',
      fontFamily: 'Raleway-Medium',
      width: width * 0.7,
      lineHeight: 20,
    },
    footer: {
      height: height * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInButton: {
      backgroundColor: '#000000',
      paddingVertical: 15,
      width: width * 0.42,
      borderRadius: 45,
      bottom: height * 0.003,
    },
    signInButtonDisabled: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 15,
      width: width * 0.42,
      borderRadius: 45,
      bottom: height * 0.003,
    },
  });
};

export default TermsOfServiceScreen;
