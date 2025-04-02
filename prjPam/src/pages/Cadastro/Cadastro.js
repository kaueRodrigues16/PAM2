import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './CadastroStyles';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [genero, setGenero] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.Titulo}>
                <Text>Cadastre agora!</Text>
            </View>

            <View style={styles.Formulario}>
                <Text style={styles.Cadastro}>Cadastrar</Text>
                <TextInput
                    style={styles.campo}
                    value={nome}
                    placeholder="Digite seu nome"
                    onChangeText={(text) => setNome(text)}
                />
                <TextInput
                    style={styles.campo}
                    value={email} 
                    placeholder="Digite um email"
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.campo}
                    value={senha} 
                    placeholder="Digite uma senha"
                    secureTextEntry
                    onChangeText={(text) => setSenha(text)}
                />
                <Picker
                    selectedValue={genero}
                    style={styles.pcGenero}
                    onValueChange={(itemValue) => setGenero(itemValue)} 
                >
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                    <Picker.Item label="Outro" value="outro" />  {/* Corrigindo a label */}
                
                </Picker>

                <Text style={styles.Opicional}>Opincional</Text>
                
                <TextInput
                    style={styles.campo}
                    value={peso}
                    placeholder="Digite seu peso"
                    onChangeText={(text) => setPeso(text)}
                />
                <TextInput
                    style={styles.campo}
                    value={altura} 
                    placeholder="Digite sua altura"
                    onChangeText={(text) => setAltura(text)}
                />

                <TouchableOpacity style={styles.BotaoCadastrar}>
                    <Text style={styles.tituloCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

