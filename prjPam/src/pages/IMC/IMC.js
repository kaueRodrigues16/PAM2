import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './ImcStyles';


export default function App() {
  const [ Altura , setAltura] = useState();
  const [ peso , setPeso ]  = useState();
  const [ IMC , setIMC ]  = useState();
  const [ resultado, setResultado] = useState(0);

  const Calcular = () => {
    const AlturaNum = parseFloat(Altura)
    const PesoNum = parseFloat(peso)
    const IMCCalculado = PesoNum / (AlturaNum * AlturaNum);
    setResultado(IMCCalculado);
   
    
  
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

  const Limpar = () => {
    setAltura('');
    setPeso('');
    setResultado(0);
    setIMC('');
  };


  return (
    <View style={styles.container}>
    
      <TextInput
         placeholder={"Digite sua altura"} style={styles.lbaltura}
         keyboardType="numeric"
         onChangeText={(text) => setAltura(text.replace(',', '.'))} 
      />
    
  
      <TextInput
          placeholder={"Digite seu peso"} style={styles.lbpeso}
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text.replace(',', '.'))}
        
    
      />
      

    <Text>{resultado.toFixed(2)}</Text>
    <Text>{IMC}</Text>
    
    <View style={styles.botoes}>
     <TouchableOpacity style={styles.botao} onPress={() => Calcular()}>
       <Text style={styles.textoBotao}>Calcular</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.botao} onPress={Limpar}>
       <Text style={styles.textoBotao}>Limpar</Text>
     </TouchableOpacity>
   </View>

   <StatusBar style="auto" />
  </View>
      

     
    
  );
}


