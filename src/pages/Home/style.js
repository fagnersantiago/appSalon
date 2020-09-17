import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({

    container:{

        padding:24,
        paddingTop: Constants.statusBarHeight + 40,
        backgroundColor:"#09090a"
    
         
    },

    header:{
        
        
        
        textAlign:"center",
        justifyContent:"center",
        marginTop: 40,
        marginBottom:25,
        
        color:"#fff",
                  

    },

    textHeader:{

        marginTop: 1,
        fontSize: 30,
        textAlign:"center",
        justifyContent:"center",
        color:"#fff",
        

    },


    viewSearch:{
       
        marginBottom:20,
        backgroundColor:"#131214" ,
        fontSize:18,
        color:"#fff",
        borderRadius:20
    

    },
    

     FeatherSearch:{
      
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
     

     },


     textInput:{

        
        fontSize: 18,
        color:"#fff",
        backgroundColor:"#131214", 
        
        
     },
    
    BarbersList: {


        padding: 20,
        marginBottom:16,
        backgroundColor:"#19191b",
       
    },

   

    Barber:{
        
        
        marginTop:18,
        paddingHorizontal:30,
        marginBottom:2,
        borderRadius:20,
        height:200,
        backgroundColor:"#131214" 
        

    },

    BarberName:{

        marginTop:20,
        fontSize:18,
        color:"#d6d6d8",
     
    },


    BarberAdress:{

        marginTop:5,
        fontSize:18,
        color:"#d6d6d8",
    },


    BarberHour:{

        marginTop:5,
        fontSize:18,
        color:"#d6d6d8"

    },

    BarberPhone:{

        marginTop:5,
        fontSize:18,
        color:"#d6d6d8",
    },

    BarberDetails:{

        marginTop:5,
        fontSize:20,
        color:"#fff",
        fontWeight:"bold",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        alignItems:'flex-end'
        
    }
    
})