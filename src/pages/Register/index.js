import React from 'react';
import { View, StatusBar, Text, TextInput ,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"


import styles from './style';

export default function Register(){

  const navigation = useNavigation();

    function navigationToLogin(){

            navigation.navigate('Login');
    }

    return (

        <View style= {styles.container} >

            <KeyboardAvoidingView behavior="position">

            <StatusBar translucent backgroundColor="#000000" barStyle="default"/>

           <View>
               
               <View style={styles.ViewText}>
               <TextInput style={styles.Text}
               placeholder="Nome"
               underlineColorAndroid= "gray"
                />

                <TextInput style={styles.Text}
               placeholder="Email"
               underlineColorAndroid= "gray"
               
                />

               <TextInput style={styles.Text}
               placeholder="Senha"
               underlineColorAndroid= "gray"
               secureTextEntry={true}
               
                />

              <TextInput style={styles.Text}
               placeholder="CPF"
               underlineColorAndroid= "gray"
                />
                  <TextInput style={styles.Text}
               placeholder="Telefone"
               underlineColorAndroid= "gray"
                />
                
                      
                <View>
                <TouchableOpacity
                  style={styles.RegisterButton}
                  onPress={navigationToLogin}
                  >
                  <Text style={styles.RegisterButtonText}> Cadastrar </Text>
                  </TouchableOpacity>
                 
                  </View >
                  
                </View>
                  
           </View>
           </KeyboardAvoidingView>

               <TouchableOpacity
                 style={styles.ReturnButtonLogin} 
                  onPress={navigationToLogin}
                  >
                  <Feather name="arrow-left" size={25} color="#B8860B" />
                  <Text style={styles.arrowButtonText}> Já possuo uma conta </Text>
                  
                </TouchableOpacity>

       </View>

    );
}