import React from 'react';
import { View, Image, Text, TextInput ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from "@react-navigation/native"
import {Feather} from '@expo/vector-icons'
import logImg from '../../assets/logo.png';

import styles from './style';


export default function Login (){

    const navigation = useNavigation();


    function navigationToHome(){

        navigation.navigate('Home');
    }

    function navigationToRegister(){

        navigation.navigate('Register');
    }


    return (

       <View style= {styles.container} >
            <KeyboardAvoidingView behavior="position">
           <View style={styles.header}>
               <Image style={styles.Image} source={logImg}/>

              
               <TextInput  style={styles.Text}
               placeholder="User"
               underlineColorAndroid= "gray"
               
              
                />
               

                <TextInput style={styles.Text}
               placeholder="Password"
               underlineColorAndroid= "gray"
               secureTextEntry={true}
                />
                  
                <TouchableOpacity
                  style={styles.RegisterButton}
                  onPress={navigationToHome}
                >

                </TouchableOpacity>
                      
                <View style={styles.action}>
                <TouchableOpacity
                  style={styles.LoginButton}
                  onPress={navigationToHome}
                  >
                  <Text style={styles.LoginButtonText}> Login </Text>
                  </TouchableOpacity>
                  </View >
                  <View >
                  <TouchableOpacity
                  style={styles.RegisterButton}
                  onPress={navigationToRegister}
                  >
                  <Text style={styles.RegisterButtonText}> Registrar-se </Text>
                  <Feather name="arrow-right" size={24} color="#B8860B" />
                  </TouchableOpacity>
                  </View>
                </View>
           </KeyboardAvoidingView>

       </View>

    );
}