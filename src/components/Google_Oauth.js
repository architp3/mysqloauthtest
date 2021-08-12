import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function Google_Oauth({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    /* expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com', */
    webClientId: '856814127948-u9vgfvadhejsin0u8b53u8v95j0cpe87.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log("Signed in")
      navigation.navigate('Home');
      }
  }, [response]);

  return (
    <Button
    style = {styles.button}
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        
        }}
    />
  );
}

const styles = StyleSheet.create({
    button: {
        width:310,
        backgroundColor:'#a40b0e',
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 13
    },
})