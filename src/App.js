import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

/*import Login from "./src/components/Login";*/
import Register from './src/components/Register';

function App() {
  return (
      <View style={styles.mainContainer}>
        <Register /> 
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
