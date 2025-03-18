import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native'; // Importando o Button
import styles from './LoginStyles'; // Verifique se o caminho está correto
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation(); // Hook de navegação

    return (
        <View style={styles.container}>
            <Text>Bem-vindo ao app de saúde!!!</Text>
            
            <Button
                title="Logar"
                color="red"
                onPress={() => navigation.navigate('Home')} // Navegar para a tela 'Home'
            />
            
            <StatusBar style="auto" /> {}
        </View>
    );
}
