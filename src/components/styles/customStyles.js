import {StyleSheet, Pressable} from 'react-native';
export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
        height:650,
        width:450,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin:0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        padding:40,
    },
    input:{
        alignSelf:'stretch',
        color: '#000',
        height: 40,
        width:350,
        marginBottom: 10,
        borderBottomColor: '#dad9d9',
        borderBottomWidth: 1,
        padding:5,
    },
    btn:{
        backgroundColor: '#a40b0e',
        
        width:350,
        height:50,
        borderColor:'#a40b0e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        marginVertical:16,
    },
    btnText:{
        color: '#fff',
    },
    hyperLinkText:{
        flexGrow:1,
        alignItems:'center',
        fontSize:16,
        marginVertical:16,
    },
    hyperLink:{
        color: '#a40b0e',
        fontWeight: 'bold',
    }
  });
