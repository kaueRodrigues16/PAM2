import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './LoginStyles';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

        <TouchableOpacity
          style={styles.BotaoCadastrar}
          activeOpacity={0.7}
        >
          <Text style={styles.tituloLogar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
