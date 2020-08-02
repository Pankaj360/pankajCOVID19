import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

class LoginScreen extends Component {

signInWithGoogleAsync = async () => {
  
    try {
        const result = await Expo.Google.logInAsync({
            behavior: 'web',
             androidClientId: '204732501060-r8ct82unav1c5l1nkccv4fan3cs9n0ir.apps.googleusercontent.com',
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