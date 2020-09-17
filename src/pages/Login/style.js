import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({

    container:{

       flex: 1,
       paddingTop: Constants.statusBarHeight + 20,
       backgroundColor:"#000000",
       alignItems:"center"

    },


    Image:{

        position:"relative",
        alignItems:"center",
        width: 300,
        height:280,
        backgroundColor:"#0000",
        margin:32,
        marginTop:-25,
        marginHorizontal:58,
        borderRadius:20,
        opacity:0.5
        
    },

    Text:{

        
        marginTop: 30,
        paddingBottom: 15,
        marginLeft:18,
        marginRight:18,
        margin:10,
        fontSize:20 ,
        color:"#C4C4C4",

    

    },

    RegisterButton:{

        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
    },

    RegisterButtonText:{

         
        flexDirection:"row",
        fontSize:18,
        fontWeight:"bold",
        color:"#B8860B"
    },



    action:{

        marginTop:10,
        flexDirection:'row',
            
    },

    LoginButton:{

        flex:1,
        backgroundColor:"#B8860B",
        borderRadius: 20,
        height:50,
        width:"95%",  
        marginBottom:20,
        marginHorizontal:10,
        marginTop:20,
        
    
    },

    LoginButtonText:{

        flex:1,
        alignItems:"center", 
        textAlign:"center",
        fontSize: 23,
        fontWeight:"bold",
        marginTop:10
        
    },
    
  
});