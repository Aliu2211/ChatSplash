import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   logo: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   linkText: {
//     color: '#007BFF',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   agreement: {
//     fontSize: 12,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   paragraph: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#333',
//   },
//   description: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   infoText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: '#888',
//     marginVertical: 5,
//   },
//   scrollContainer: {
//     padding: 20,
//   },
// });

// export default styles;

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
    paddingVertical: 20,
    width: width*0.44,
    borderRadius: 45,
    bottom: - height*0.3
  },
  signInButtonDisabled: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 20,
    width: width*0.44,
    borderRadius: 45,
    bottom: - height*0.3
  },
});
}

export default Sstyles;
