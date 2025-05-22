import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './CadastroStyles';


const RadioButton = ({ selected, onPress, label }) => {
    return (
      <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
        <View
          style={[
            styles.radioCircle,
            selected ? styles.selectedRadio : styles.unselectedRadio,
          ]}
        >
          {selected && <View style={styles.selectedInnerCircle} />}
        </View>
        <Text style={styles.radioLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };


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

                <View styles={styles.RadioGenero}>
                    <RadioButton
                        selected={genero === 'Masculino'}
                        onPress={() => setGenero('Masculino')}
                        label="Masculino"
                    />
                    <RadioButton
                        selected={genero === 'Feminino'}
                        onPress={() => setGenero('Feminino')}
                        label="Feminino"
                    />
                    <RadioButton
                        selected={genero === 'Outro'}
                        onPress={() => setGenero('Outro')}
                        label="Outro"
                    />
                </View>
                
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

