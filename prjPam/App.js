import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando os caminhos 
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import IMC from './src/pages/IMC/IMC'

// Cria o stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" style={styles.navbar}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="IMC" component={IMC}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbar: {
    backgroundColor: "red",
  }
});
