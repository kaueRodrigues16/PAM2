import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native'; 
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Text>Página da Home</Text>

            <Button
                title="IMC"
                color="red"
                onPress={() => navigation.navigate('IMC')} 
            />

            <StatusBar style="auto" /> {}
        </View>
    );
}
