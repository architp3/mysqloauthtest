import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function Call_Analysis({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textDropDown}>Call details for the month of</Text>
                <DropDownPicker
                    items={[
                        {label: 'JANUARAY', value: '1', selected: true},
                        {label: 'FEBURARY', value: '2'},
                        {label: 'MARCH', value: '3'},
                        {label: 'APRIL', value: '4'},
                        {label: 'MAY', value: '5'},
                        {label: 'JUNE', value: '6'},
                        {label: 'JULY', value: '7'},
                        {label: 'AUGUST', value: '8'},
                        {label: 'SEPTEMBER', value: '9'},
                        {label: 'OCTOBER', value: '10'},
                        {label: 'NOVEMBER', value: '11'},
                        {label: 'DECEMBER', value: '12'},
                    ]}
                    defaultNull
                    defaultIndex={0}
                    containerStyle={{height: 40,width: 150}}
                    onChangeItem={item => console.log(item.label, item.value)}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    dropDownStyle={{backgroundColor: '#fff'}}
                />
                <Text style={styles.textDropDown}>Dr. Request received</Text>
                <DropDownPicker
                    items={[
                        {label: 'Dr. A', value: 'Dr. A', selected: true},
                        {label: 'Dr. B', value: 'Dr. B'},
                        {label: 'Dr. C', value: 'Dr. C'},
                        {label: 'Dr. D', value: 'Dr. D'},
                    ]}
                    defaultNull
                    defaultIndex={0}
                    containerStyle={{height: 40,width: 150}}
                    onChangeItem={item => console.log(item.label, item.value)}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    dropDownStyle={{backgroundColor: '#fff'}}
                />
                <Text style={styles.textDropDown}>Send request for a detailing call</Text>
                <DropDownPicker
                    items={[
                        {label: 'Dr. A', value: 'Dr. A', selected: true},
                        {label: 'Dr. B', value: 'Dr. B'},
                        {label: 'Dr. C', value: 'Dr. C'},
                        {label: 'Dr. D', value: 'Dr. D'},
                    ]}
                    defaultNull
                    defaultIndex={0}
                    containerStyle={{height: 40,width: 150}}
                    onChangeItem={item => console.log(item.label, item.value)}
                    labelStyle={{fontSize: 16, color: '#000'}}
                    dropDownStyle={{backgroundColor: '#fff'}}
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Submit</Text>
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
    textDropDown:{
        fontSize:17,
        fontWeight:'bold',
    }
  });
export default Call_Analysis;
