import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import styles from './CadastroStyles';

const RadioButton = ({ selected, onPress, label }) => (
  <TouchableOpacity 
    style={styles.radioContainer} 
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={[styles.radioCircle, selected && styles.selectedRadio]}>
      {selected && <View style={styles.selectedInnerCircle} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const salvarDados = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usuarios', {
        nomeUsuario: nome,
        emailUsuario: email,
        senhaUsuario: senha,
        dataNascUsuario: dataNascimento,
        generoUsuario: genero,
        alturaUsuario: altura || null,
        pesoUsuario: peso || null,
        fotoUsuario: null
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
  
      Alert.alert('Sucesso!', 'Dados salvos com sucesso');
  
      setNome('');
      setEmail('');
      setSenha('');
      setGenero('');
      setPeso('');
      setAltura('');
      setDataNascimento('');
  
    } catch (error) {
      console.error('Detalhes do erro:', {
        request: error.request,
        response: error.response?.data,
        message: error.message
      });
  
      let errorMessage = 'Não foi possível cadastrar o usuário.';
  
      if (error.response) {
        if (error.response.data.errors) {
          errorMessage = Object.values(error.response.data.errors).join('\n');
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }
  
      Alert.alert('Erro', errorMessage);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.Titulo}>
        <Text>Cadastre agora!</Text>
      </View>

      <View style={styles.Formulario}>
        <TextInput
          style={styles.campo}
          value={nome}
          placeholder="Digite seu nome*"
          onChangeText={setNome}
        />

        <TextInput
          style={styles.campo}
          value={email}
          placeholder="Digite um email*"
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.campo}
          value={senha}
          placeholder="Digite uma senha*"
          secureTextEntry
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.campo}
          placeholder="Data de nascimento (YYYY-MM-DD)*"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <Text style={styles.label}>Gênero*</Text>
        <View style={styles.RadioGenero}>
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

        <Text style={styles.Opicional}>Opcional</Text>

        <TextInput
          style={styles.campo}
          value={peso}
          placeholder="Digite seu peso (kg)"
          onChangeText={setPeso}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.campo}
          value={altura}
          placeholder="Digite sua altura (cm)"
          onChangeText={setAltura}
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style={styles.BotaoCadastrar} 
          onPress={salvarDados}
          activeOpacity={0.7}
        >
          <Text style={styles.tituloCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}