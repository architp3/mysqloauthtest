import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

function Consultant_Register({ navigation }) {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name (As per Registration) " 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="Speciality" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="DOB" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="MDL Number" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="Qualification" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="Email Address" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="City (Company HQ)" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="Mobile No" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                />
                <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity> 
                <View style={styles.hyperLinkText}>
                    <Text >Already have account?</Text>
                    <TouchableOpacity >
                        <Text style={styles.hyperLink} onPress={() => navigation.navigate('Login')}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical:120,
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
        marginVertical: 5,
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
    },
    dob:{
       color:'#000', 
    }
});

export default Consultant_Register;
