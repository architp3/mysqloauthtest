import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function Login() {
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                placeholder="Email Address"
                placeholderTextColor = "grey"
                selectionColor="grey"
                />
            <TextInput style={styles.inputBox} secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor = "grey"
                />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={styles.hyperLinkText}>
                <Text >Haven't Registered Yet?</Text>
                <TouchableOpacity >
                    <Text style={styles.hyperLink}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputBox: {
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

export default Login;
