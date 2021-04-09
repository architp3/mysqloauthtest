import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/components/Login";
import Sales_Register from './src/components/Sales_Register';
import Home from './src/components/Home';
import Consultant_Register from './src/components/Consultant_Register';
import Scheduled_Calls from './src/components/Scheduled_Calls';
import CallAnalysis from './src/components/Call_Analysis';

const Stack = createStackNavigator();

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
            <Stack.Screen name="Login" component={Login} options={{
              title:'SIGN IN'}}/>
            <Stack.Screen name="Sales_Register" component={Sales_Register} options={{
                title:'SIGN UP'}}/>
            <Stack.Screen name="Home" component={Home} options={{
                title:'HOME'}}/>
            <Stack.Screen name="Scheduled_Calls" component={Scheduled_Calls} options={{
                title:'Scheduled Calls'}}/>
            <Stack.Screen name="CallAnalysis" component={CallAnalysis} options={{
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
