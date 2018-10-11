import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
// Import Images from '@assets/images';
export default class Login extends Component<Props> {
   state = {
      email: '',
      password: ''
   }
  
  
	render(){
		return(
			<View style = {styles.container}>
                <View>
                <Image source={require('../assets/images/55330@1x.android.png')} />
               
                </View>
                <View style={styles.loginForm}>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    />
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    />
                    
                    <TouchableOpacity
                    style = {styles.submitButton}
                    >
                    <Text style = {styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
         </View>
		)
	}
}
const styles = StyleSheet.create({
    loginForm:{

    }, 
    logo:{
        width:20,
        height:20
    },
   container: {
      paddingTop: 120,
    //   backgroundColor: '#000000'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
}) 