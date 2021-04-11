import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

function Consultant_Login({ navigation }) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Email Address"
                placeholderTextColor = "grey"
                selectionColor="grey"
                />
            <TextInput style={styles.input} secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor = "grey"
                />
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity >
                    <Text style={styles.forgotPassword} onPress={() => navigation.navigate('Forgot_Password')}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={styles.hyperLinkText}>
                <Text >Haven't Registered Yet?</Text>
                <TouchableOpacity >
                    <Text style={styles.hyperLink} onPress={() => navigation.navigate('Loader_Screen')}>SIGN UP</Text>
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
    backgroundColor:'#0cb54e',
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
  forgotPasswordContainer:{
      fontSize:16,
      marginVertical:12,
      marginLeft: 182,
  },
  forgotPassword:{
      color: '#048eadc2',
      fontWeight: 'bold',
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

export default Consultant_Login;