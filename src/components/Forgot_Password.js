import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

function Forgot_Password({ navigation }) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Email Address"
                placeholderTextColor = "grey"
                selectionColor="grey"
                />
            <TextInput style={styles.input} secureTextEntry={true}
                placeholder="Registered Mobile No."
                placeholderTextColor = "grey"
                />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Sales_Login')}>Reset My Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  input: {
    paddingLeft:15,
    paddingBottom:10,
    paddingTop:10,
    width:310,
    fontSize:16,
    color:'#000',
    marginVertical: 5,
    marginBottom: 5,
    borderBottomColor:'#dad9d9',
    borderBottomWidth: 1,
  },
  button: {
    width:310,
    backgroundColor:'#a40b0e',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  hyperLinkText:{
      alignItems:'center',
      fontSize:16,
      marginVertical:16,
  },
  hyperLink:{
      color: '#a40b0e',
      fontWeight: 'bold',
  }

});

export default Forgot_Password;