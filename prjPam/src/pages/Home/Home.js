import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function Home() {
  const navigation = useNavigation();

  function handlePressIMC() {
    navigation.navigate('IMC');
  }

  function handlePressVacinas() {
    navigation.navigate('Vacinas');
  }

  return (
    <View style={styles.container}>
      <Text>Página da Home</Text>

      <TouchableOpacity style={styles.botaoIMC} onPress={handlePressIMC}>
        <Text style={styles.title}>Ir para IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handlePressVacinas}>
        <Text style={styles.title}>Ir para as Vacinas</Text>
      </TouchableOpacity>

      

      <StatusBar style="auto" />
    </View>
  );
}
