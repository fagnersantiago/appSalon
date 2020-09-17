import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({

    container:{

        flex: 1,
        paddingTop: Constants.statusBarHeight + 2,
        backgroundColor:"#000000"

   
 
     },


     ViewText:{

        backgroundColor:"#000000",

     },

    Text:{

        fontSize: 19,
        paddingBottom: 15,
        marginBottom: 15,
        marginLeft:8,
        top:170,
        textAlign:"justify",
        color:"#C4C4C4"
        
        
    },

    RegisterButton:{
    
    position:"relative",
    backgroundColor:"#B8860B",
    borderRadius: 25,
    height:50,
    marginBottom:30,
    marginHorizontal:12,
    marginTop: 160,
    top:20,
    width:"95%",
    
    },

    RegisterButtonText:{
    
        textAlign:"center",
        fontSize: 20,
        fontWeight:"bold",
        marginTop:10,
        
    },


    arrowButtonText:{

        fontSize:18,
        fontWeight:"bold",
        color:"#B8860B",

    
    },
        
    ReturnButtonLogin:{
  
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10,
        top: 40
    
    }

});