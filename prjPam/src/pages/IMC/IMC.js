import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';


export default function App() {
  const [ Altura , setAltura] = useState();
  const [ peso , setPeso ]  = useState();
  const [ IMC , setIMC ]  = useState();
  const [ exibirIMC, setexibirIMC] = useState();
  const [ resultado, setResultado] = useState(0);

  const Calcular = () => {

    setResultado(parseFloat(peso)/(parseFloat(Altura)*parseFloat(Altura)))
    
  
    if(resultado<18.5){
      setIMC("Baixo peso");
   
    }  

    else if(resultado >= 18.5 && resultado < 24.9){
      setIMC("Peso normal");
   
    }  
    else if(resultado >= 25 && resultado < 29){
      setIMC("Extremo peso");
   
    }  
    else if(resultado<30){
      setIMC("Obesidade");
   
    }  
    else if(resultado<35){
      setIMC("Baleia");
   
    } 
   

  }


  return (
    <View style={styles.container}>
    
      <TextInput
          placeholder={"Digite sua altura"}
          style={{ borderWidth: 2, borderRadius:20, height: 40, width:"200px", margin:20}}
          onChangeText={(Number) => setAltura(Number)}
      
      />
    
  
      <TextInput
          placeholder={"Digite seu peso"}
          style={{ borderWidth: 2, borderRadius:20, height: 40, width:"200px", margin:50}}
          onChangeText={(Number) => setPeso(Number)}
          
        
    
      />

      <Button title="Calcular"
      color="red"
      onPress={() => Calcular()}
        
      />

  <Text>{resultado.toFixed(2)}</Text>
  <Text>{IMC}</Text>

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