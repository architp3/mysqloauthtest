import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button, TouchableOpacity, Text } from 'react-native';

function Register() {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name (As per Co. Records) " />
                <TextInput style={styles.input} placeholder="Employee Code"/>
                <TextInput style={styles.input} placeholder="Name of Organiztion" />
                <TextInput style={styles.input} placeholder="Name of Division"/>
                <TextInput style={styles.input} placeholder="Designation" />
                <TextInput style={styles.input} placeholder="Email ID"/>
                <TextInput style={styles.input} placeholder="City (Company HQ)" />
                <TextInput style={styles.input} placeholder="Mobile No"/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
                <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity> 
                <View style={styles.hyperLinkText}>
                    <Text >Already have account?</Text>
                    <TouchableOpacity >
                        <Text style={styles.hyperLink}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    registerContainer: {
      backgroundColor:"orange",
      width:"100%",
      height:"100%",
    },
    registerContentsContainer:{
        alignItems:'center',
        justifyContent:'center',
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

export default Register;