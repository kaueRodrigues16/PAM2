import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function Home() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('IMC');
  }

  return (
    <View style={styles.container}>
      <Text>Página da Home</Text>

      <TouchableOpacity style={styles.botaoIMC} onPress={handlePress}>
        <Text style={styles.title}>Ir para IMC</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
