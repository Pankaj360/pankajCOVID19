Covid19 updates App
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

import firebase from 'firebase';

class LoginScreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              // We don't need to reauth the Firebase connection.
              return true;
            }
          }
        }
        return false;
      }

    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.AccessToken );
            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).then(function(){
                console.log('user signed')
            }
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            }));
          } else {
            console.log('User already signed-in Firebase.');
          }
        }).bind(this);
      }



signInWithGoogleAsync = async () => {
  
    try {
        const result = await Expo.Google.logInAsync({
            behavior: 'web',
             iosClientId: '204732501060-frjog7unploa9224kqup1t7ij5sjiead.apps.googleusercontent.com',
             scopes: ['profile', 'email']
        });
        if (result.type = 'success') {
            return result.accessToken;
        } else {
            
            return { cancelled: true };
        }
    } catch (e) {
        return { error: true};
    }
};


    
    render() { 
        return ( 
            <View style={style.container}>
              <Button 
              title="Sign In With Google"
              onPress={() => this.signInWithGoogleAsync()}

              />
            
        </View>

         );
    }
}
 
export default LoginScreen ;

const style = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
});
