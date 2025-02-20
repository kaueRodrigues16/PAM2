import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';


export default function App() {
  const [ Altura , setAltura] = useState();
  const [ peso , setPeso ]  = useState();
  const [ IMC , setIMC ]  = useState();
  const [ exibirIMC, setexibirIMC] = useState();



  return (
    <View style={styles.container}>
      <Text>Hello word</Text>
      <TextInput
          placeholder={"Digite sua altura"}
          style={{ borderWidth: 1, height: 40, width:"100%", margin:10}}
          onChangeText={(text) => setAltura(text)}
          
      />
    
  
      <TextInput
          placeholder={"Digite seu peso"}
          style={{ borderWidth: 1, height: 40, width:"100%", margin:10}}
          onChangeText={(text) => setPeso(text)}
          
      />

      <Button tittle="Calcular" onPress={() => exibirIMC()} />

      <StatusBar style="auto" />
    </View>
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
