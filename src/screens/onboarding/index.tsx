







import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FIcon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/button';
import { RootStackParamList } from '../../navigation/type';

const Data = [
  {
    id: 1,
    Title: 'Daily Checkups',
    Description:
      'Stay on top of your well-being with easy daily checkups. Quickly assess your health status and receive instant feedback to keep you on track.',
    image: require('../../assets/icons/signal.png'),
  },
  {
    id: 2,
    Title: 'Health Tracking',
    Description:
      'Monitor your health over time with detailed tracking features. See trends, set goals, and stay informed about your progress.',
    image: require('../../assets/icons/calender.png'),
  },
  {
    id: 3,
    Title: 'Personalized Exercises',
    Description:
      'Get exercise recommendations tailored just for you. Improve your fitness with workouts designed to meet your unique health needs.',
    image: require('../../assets/icons/exercise.png'),
  },
  {
    id: 4,
    Title: 'Appointment Booking',
    Description:
      'Schedule a visit with a doctor effortlessly. Book appointments in just a few taps and get the care you need when you need it.',
    image: require('../../assets/icons/calender.png'),
  },
];


const Onboarding: React.FC = () => {

  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width, height } = useWindowDimensions();
  const styles = Sstyles(width, height);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < Data.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      navigation.navigate('login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('login');
  };


  return (
          <SafeAreaView style={styles.container}>
            {/* Skip Button */}
            <View style={styles.skipContainer}>
              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
                <FIcon name="chevron-right" size={13} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Onboarding Slides */}
            <FlatList
              data={Data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={[styles.slide, { width, height }]}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.description}>{item.Description}</Text>
                  <Image source={item.image} style={styles.image} />
                </View>
              )}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                const index = Math.round(event.nativeEvent.contentOffset.x / width);
                setCurrentIndex(index);
              }}
              ref={flatListRef}
            />

            {/* Pagination Dots */}
            <View style={styles.paginationContainer}>
              {Data.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    currentIndex === index && styles.paginationDotActive,
                  ]}
                />
              ))}
            </View>

            {/* Button */}
            <View style={styles.buttonContainer}>
              <AppButton
                title={currentIndex === Data.length - 1 ? 'Get Started' : 'Next'}
                onPress={handleNext}
                style={
                  currentIndex === Data.length - 1
                    ? styles.lastSlideButton
                    : styles.defaultButton
                }
                textStyle={
                  currentIndex === Data.length - 1
                    ? styles.lastSlideButtonText
                    : styles.defaultButtonText
                }
              />
            </View>
          </SafeAreaView>
  );
};

// Dynamic Styles
const Sstyles = (width: number, height: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    skipContainer: {
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    skipButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    skipText: {
      fontSize: 15,
      color: '#000000',
      fontFamily: 'Raleway-Light',
      marginRight: 5,
    },
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      bottom: height * 0.1,
    },
    image: {
      width: width * 0.8,
      height: 80,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      fontFamily: 'Raleway-Bold',
      color: '#000000',
      marginBottom: 35,
      textAlign: 'center',
    },
    description: {
      fontSize: 20,
      color: '#000000',
      fontFamily: 'Raleway-Regular',
      textAlign: 'center',
      marginBottom: 100,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: height * 0.02,
    },
    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#ccc',
      marginHorizontal: 3,
      marginBottom: 20,
    },
    paginationDotActive: {
      backgroundColor: '#000',
    },
    buttonContainer: {
      alignSelf: 'center',
      marginBottom: height * 0.095,
    },
    defaultButton: {
      backgroundColor: '#D9D9D9',
      paddingVertical: 17,
      width: width * 0.4,
      borderRadius: 45,
      alignSelf: 'center',
    },
    lastSlideButton: {
      backgroundColor: '#000000', // Green for the last slide
      paddingVertical: 17,
      width: width * 0.4,
      borderRadius: 45,
      alignSelf: 'center',
    },
    defaultButtonText: {
      color: '#000000',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Raleway-Bold',
    },
    lastSlideButtonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Raleway-Bold',
    },
  });
};


export default Onboarding;
