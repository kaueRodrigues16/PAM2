import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native'; // Importando o Button
import styles from './LoginStyles'; // Verifique se o caminho está correto
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation(); // Hook de navegação

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Titulo}>Login</Text> {/* Corrigido de 'Texte' para 'Text' */}
            </View>
            
            <Text style={styles.Apresentacao}>Bem-vindo ao app de saúde!!!</Text>
            
            <Button style={styles.Lxogin}
                title="Logar"
                color="red"
                onPress={() => navigation.navigate('Home')} // Navegar para a tela 'Home'
            />

            
            
            <StatusBar style="auto" /> {/* Removido o '{}' extra */}
        </View>
    );
}
