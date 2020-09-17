  import React from 'react';
  import { View, Image, StatusBar, FlatList, Text,TouchableOpacity, KeyboardAvoidingView, ViewComponent } from 'react-native';
  import {Feather} from '@expo/vector-icons';
  import {useNavigation} from "@react-navigation/native"
  import logImg from '../../assets/logo.png';

  import styles from './style'
import { TextInput } from 'react-native-gesture-handler';


  export default function Home(){

      const navigation = useNavigation ();

      
      return (


        <View style={styles.container}>
            
          <StatusBar translucent backgroundColor="#000000" barStyle="default" />

            <TouchableOpacity>
                        
                <Feather name="arrow-left" size={28} color="#B8860B" />    
              
            </TouchableOpacity> 
      
                <View style={styles.header}> 
                 

                 <Text style={styles.textHeader}>SalonApp</Text>
                

                </View>

              <View style={styles.viewSearch}>

                <TouchableOpacity style={styles.FeatherSearch}>
                        
                           
                <TextInput style={styles.textInput}
                          placeholder="Encontrar uma Barbearia"
                        > 
                </TextInput>

                  <Feather name="search" size={25} color="#37373a" /> 
                     
                      
                </TouchableOpacity> 
            
              </View>

              <FlatList 
              
                  data={[1, 2, 3,4]}    
                  keyExtractor={barber => String(barber)}
                  renderItem={() => (
              
              
              <View style={styles.BarberList} > 
        
                    <View style={styles.Barber}>
                    
                  
                    <Text style={styles.BarberName}>Nome: BarberShop</Text>
                    <Text style={styles.BarberAdress} >Endereço, Graciliano Ramos</Text>
        
                    <Text style={styles.BarberHour}>Horário: 08:00 às 19:00</Text>
                    <Text style={styles.BarberPhone}>Telefone:(82)9999-9999</Text>

                    <TouchableOpacity style={styles.BarberDetails}>
                        

                    <Feather name="arrow-right" size={25} color="#B8860B" />    
                    <Text style={styles.BarberDetails}>Ver mais detalhes</Text>
                    </TouchableOpacity>
                    
                  </View>

                  
                </View>
        
  
                  )}
                  
              />
          
          </View>
      );
  }
