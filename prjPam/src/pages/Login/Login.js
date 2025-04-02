import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './LoginStyles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.Titulo}>
                <Text style={styles.Titulo}>BioVibe</Text>
                <Text style={styles.Apresentacao}>Bem-vindo ao app de saúde!!!</Text>
            </View>
            
           
            <View style={styles.corpo}>
                <TouchableOpacity style={styles.BotaoLogin} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.tituloLogin}>Logar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.txCadastro}>Não tem uma conta?
            <Text style={styles.CadastroLink} onPress={() => navigation.navigate('Cadastro')}> Cadastre agora!</Text>
            </Text>
            
                    
            <StatusBar style="auto" />
        </View>
    );
}
