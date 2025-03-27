import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput,TouchableOpacity } from 'react-native-web';
import styles from './ImcStyles';


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
         placeholder={"Digite sua altura"} style={styles.lbaltura}

          onChangeText={(Number) => setAltura(Number)}
      
      />
    
  
      <TextInput
          placeholder={"Digite seu peso"} style={styles.lbpeso}
          onChangeText={(Number) => setPeso(Number)}
          
        
    
      />
      <TouchableOpacity style={styles.botaoCalcular} onPress={() => Calcular()}>
        <Text style={styles.title}>Calcular</Text>
      </TouchableOpacity>


  <Text>{resultado.toFixed(2)}</Text>
  <Text>{IMC}</Text>

      <StatusBar style="auto" />
    </View>
  );
}


