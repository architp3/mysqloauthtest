import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';

function Home({ navigation }) {
    return(
        <View style={styles.container}>
            {/*<NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Scheduled_Calls" component={Scheduled_Calls} />
                    <Drawer.Screen name="Call_Analysis" component={Call_Analysis} />
                </Drawer.Navigator>  
            </NavigationContainer>*/}
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Scheduled_Calls')} >Scheduled Calls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Call_Analysis')}>Call Analysis</Text>
            </TouchableOpacity>
        </View>
    );
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
  }
});

export default Home;
