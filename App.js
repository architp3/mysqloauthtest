import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sales_Login from "./src/components/Sales_Login";
import Home from './src/components/Home';
import Sales_Register from './src/components/Sales_Register';
import Consultant_Register from './src/components/Consultant_Register';
{/*import Scheduled_Calls from './src/components/Scheduled_Calls';*/}
import Call_Analysis from './src/components/Call_Analysis';
import Forgot_Password from './src/components/Forgot_Password';
import Consultant_Login from './src/components/Consultant_Login';
import Google_Oauth from './src/components/Google_Oauth';

const Stack = createStackNavigator();

const signedIn = false;
function App() {
  return (
      <View style={styles.mainContainer}>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#a40b0e'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}>
            
            
             <Stack.Screen name="Sales_Login" component={Sales_Login} options={{
                title:'SIGN IN'}}/>
                <Stack.Screen name="Google_Oauth" component={Google_Oauth} options={{
                  title: 'SIGN IN'
                }}/>
            <Stack.Screen name="Sales_Register" component={Sales_Register} options={{
                title:'SIGN UP'}}/>            
            <Stack.Screen name="Home" component={Home} options={{
                title:'HOME'}}/>
            <Stack.Screen name="Consultant_Login" component={Consultant_Login} options={{
                title:'SIGN IN'}}/>
            <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{
                title:'Forgot Password'}}/>
            {/*<Stack.Screen name="Scheduled_Calls" component={Scheduled_Calls} options={{
                title:'Scheduled Calls'}}/>*/}
            <Stack.Screen name="Call_Analysis" component={Call_Analysis} options={{
                title:'Call Analysis'}}/>
            <Stack.Screen name="Consultant_Register" component={Consultant_Register} options={{
                title:'Doctor Register'}}/>


          </Stack.Navigator>
        </NavigationContainer>
      </View> 
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor:'#ffffff',
  }
});
export default App;
