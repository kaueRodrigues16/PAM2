import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CepScreen = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarCep = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('CEP não encontrado');
      } else {
        setEndereco(response.data);
      }
    } catch (err) {
      setError('Ocorreu um erro ao buscar o CEP');
    } finally {
      setLoading(false);
    }
  };

  const limparCep = () => {
    setCep('');
    setEndereco(null);
    setError(null);
  };

  return (
      <View style={styles.container}>
        <TextInput
          style={styles.CEPinserir}
          placeholder="Digite o seu CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />


      <View style={styles.Botoes}>
        <TouchableOpacity style={styles.botao} onPress={buscarCep}>
          <Text style={styles.tituloBotao}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={limparCep}>
          <Text style={styles.tituloBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

        {loading && <Text>Carregando...</Text>}
        {error && <Text style={styles.error}>{error}</Text>}
        {endereco && (

          <View style={styles.resultado}>
            <Text><strong>Logradouro:</strong> {endereco.logradouro}</Text>
            <Text><strong>Bairro:</strong> {endereco.bairro}</Text>
            <Text><strong>Cidade:</strong> {endereco.localidade}</Text>
            <Text><strong>Estado:</strong> {endereco.uf}</Text>
            <Text><strong>complemento:</strong> {endereco.complemento}</Text>
          </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  CEPinserir: {
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    width: '85%',
    paddingLeft: 8,
  },
  Botoes: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#D25959", 
    padding: 10,
    width: '48%', 
    alignItems: 'center',
    borderRadius: 5,
  },
  tituloBotao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default CepScreen;
