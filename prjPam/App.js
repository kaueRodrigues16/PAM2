import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from './src/Elementos/Visual/Paleta'

// Importando os caminhos 
import Inicial from './src/pages/Inicial/Inicial';
import Home from './src/pages/Home/Home';
import IMC from './src/pages/IMC/IMC';
import Cadastro from './src/pages/Cadastro/Cadastro';
import Vacinas from './src/pages/Vacinas/Vacina';
import Login from './src/pages/Login/Login'

// Cria o stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial"
      screenOptions={{
        headerStyle: {
          backgroundColor:  color.Principal, // Cor do fundo da navbar
        },
        headerTintColor: color.Segundaria, // Cor dos textos e ícones
        headerTitleAlign: 'center', // Centraliza o título
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },

        headerTitle: () => (
          <Image source={require('./src/Elementos/Images/BioVibeLogo.png')}
          style={{ width: 150, height: 60 }}
           />
        ),
      }}>
        <Stack.Screen name="Inicial" component={Inicial}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
        <Stack.Screen name="Login" component={Login} />
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
});
