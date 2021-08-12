import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text,Image } from 'react-native';
import Axios from 'axios';


function Sales_Register({navigation}) {
    
   
        const [name, setName] = useState('');
        const [employeeCode, setEmployeeCode] = useState('');
        const [orgName, setOrgName] = useState('');
        const [divName, setDivName] = useState('');
        const [designation, setDesignation] = useState('');
        const [email, setEmail] = useState('');
        const [city, setCity] = useState('');
        const [mobileNo, setMobileNo] = useState('');
        const [password, setPassword] = useState('');
        

    

    const register = () => {
        navigation.navigate('Sales_Login');
        Axios.post('http://localhost:3001/register',{ 
            username: name,
            employee_code: employeeCode,
            org_name: orgName,
            div_name: divName,
            designation: designation,
            email: email,
            city: city,
            mobile_no: mobileNo,
            password: password
        }).then((response) => {
            
            console.log(response);
            
        })

        
    }

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Name (As per Co. Records) " 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={name => setName(name)}
                />
                <TextInput style={styles.input} placeholder="Employee Code" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={employeeCode => setEmployeeCode(employeeCode)}
                />
                <TextInput style={styles.input} placeholder="Name of Organiztion"  
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={orgName => setOrgName(orgName)}
                />
                <TextInput style={styles.input} placeholder="Name of Division" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={divName => setDivName(divName)}
                />
                <TextInput style={styles.input} placeholder="Designation" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={designation => setDesignation(designation)}
                />
                <TextInput style={styles.input} placeholder="Email Address" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={email => setEmail(email)}

                />
                <TextInput style={styles.input} placeholder="City (Company HQ)" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={city => setCity(city)}
                />
                <TextInput style={styles.input} placeholder="Mobile No" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={mobileNo => setMobileNo(mobileNo)}
                />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={password => setName(password)}
                />
                <TouchableOpacity style={styles.button} >s
                        <Text style={styles.buttonText} onPress={register}>SIGN UP</Text>
                </TouchableOpacity> 
                <View style={styles.hyperLinkText}>
                    <Text >Already have account?</Text>
                    <TouchableOpacity >
                        <Text style={styles.hyperLink} onPress={() => navigation.navigate('Sales_Login')}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        { /*<View style={styles.infocisionLogoContainer}>
                <Image
                    style={styles.infocisionLogo}
                    source={require('../assets/Infocision-Logo.png')}
                />
            </View> */}
        </View>
    );
}



const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical:5,
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
    infocisionLogoContainer:{
      marginTop:-17,
      alignItems:'center',
  
    },
    infocisionLogo:{
        width:130,
        height:40
    }
});

export default Sales_Register;
