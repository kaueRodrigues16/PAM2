import React, { useState, useEffect } from 'react';
import { CheckBox, FlatList, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Vacinastyles';
import color from '../../Elementos/Visual/Paleta';

const expandVacinas = (vacinas) => {
  let resultado = [];
  vacinas.forEach((item) => {
    if (item.dose && typeof item.dose === 'string') {
      const match = item.dose.match(/(\d+)/);
      if (match) {
        const num = parseInt(match[1], 10);
        for (let i = 1; i <= num; i++) {
          resultado.push({
            vacina: item.vacina,
            dose: 'Dose ' + i,
            protecao: item.protecao
          });
        }
      } else {
        resultado.push({ ...item });
      }
    } else {
      resultado.push({ ...item });
    }
  });
  return resultado;
};

const categoriasVacinas = [
  { 
    categoria: "Recém-nascido", 
    idade: "Até 2 meses de idade", 
    descricao: "Proteção essencial logo após o nascimento.",
    vacinas: [
      { vacina: "Hepatite B", dose: "1ª dose", protecao: "Protege contra Hepatite B" },
      { vacina: "BCG", dose: "Dose única", protecao: "Protege contra Tuberculose" }
    ]
  },
  { 
    categoria: "Infantil", 
    idade: "de 2 meses a 6 anos de idade", 
    descricao: "Vacinas fundamentais nos primeiros anos de vida.",
    vacinas: [
      { vacina: "Pentavalente", dose: "3 doses", protecao: "Protege contra Difteria, Tétano, Coqueluche, Hepatite B e Hib" },
      { vacina: "Rotavírus", dose: "2 doses", protecao: "Protege contra Diarreia Grave" },
      { vacina: "Poliomielite", dose: "3 doses", protecao: "Protege contra Paralisia Infantil" },
      { vacina: "Pneumocócica 10V", dose: "2 doses", protecao: "Protege contra Pneumonia e Meningite" }
    ]
  },
  { 
    categoria: "Criança e Pré-adolescente", 
    idade: "de 7 a 10 anos de idade", 
    descricao: "Proteção contra doenças graves antes da adolescência.",
    vacinas: [
      { vacina: "Tríplice Viral", dose: "2 doses", protecao: "Protege contra Sarampo, Caxumba e Rubéola" },
      { vacina: "Hepatite A", dose: "Dose única", protecao: "Protege contra Hepatite A" }
    ]
  },
  { 
    categoria: "Adolescente", 
    idade: "de 11 a 18 anos de idade", 
    descricao: "Reforços importantes para a fase adulta.",
    vacinas: [
      { vacina: "Meningocócica ACWY", dose: "Dose única", protecao: "Protege contra Meningite e Septicemia" },
      { vacina: "HPV", dose: "2 doses", protecao: "Protege contra Câncer do Colo do Útero e Verrugas Genitais" },
      { vacina: "Febre Amarela", dose: "Dose única", protecao: "Protege contra Febre Amarela" }
    ]
  },
  { 
    categoria: "Adulto", 
    idade: "de 18 a 59 anos", 
    descricao: "Manutenção da imunidade ao longo da vida.",
    vacinas: [
      { vacina: "dT (Difteria e Tétano)", dose: "Reforço a cada 10 anos", protecao: "Protege contra Difteria e Tétano" },
      { vacina: "Hepatite B", dose: "3 doses", protecao: "Protege contra Hepatite B" }
    ]
  },
  { 
    categoria: "Idoso", 
    idade: "de 60 anos ou mais", 
    descricao: "Proteção reforçada para a terceira idade.",
    vacinas: [
      { vacina: "Influenza", dose: "Dose anual", protecao: "Protege contra Gripe" },
      { vacina: "Pneumocócica 23V", dose: "Dose única", protecao: "Protege contra Pneumonia e Meningite" }
    ]
  },
  { 
    categoria: "Gestante", 
    idade: "Durante a gestação", 
    descricao: "Vacinas essenciais para proteger a mãe e o bebê.",
    vacinas: [
      { vacina: "Hepatite B", dose: "3 doses", protecao: "Protege contra Hepatite B" },
      { vacina: "dTpa", dose: "Dose única a cada gestação", protecao: "Protege contra Difteria, Tétano e Coqueluche" },
      { vacina: "Influenza", dose: "Dose anual", protecao: "Protege contra Gripe" }
    ]
  },
];

export default function Vacinas() {
  const [mdVisivel, setMdVisivel] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [vacMarcada, setVacMarcada] = useState({});

  useEffect(() => {
    carregarMarcacoes();
  }, []);

  const carregarMarcacoes = async () => {
    try {
      const marcacoesSalvas = await AsyncStorage.getItem('vacMarcada');
      if (marcacoesSalvas) {
        setVacMarcada(JSON.parse(marcacoesSalvas));
      }
    } catch (error) {
      console.error("Erro ao carregar marcações:", error);
    }
  };

  const salvarMarcacoes = async (novasMarcacoes) => {
    try {
      await AsyncStorage.setItem('vacMarcada', JSON.stringify(novasMarcacoes));
    } catch (error) {
      console.error("Erro ao salvar marcações:", error);
    }
  };

  const selecionarCategoria = (categoria) => {
    const vacinasExpandidas = expandVacinas(categoria.vacinas);
    setCategoriaSelecionada({ ...categoria, vacinasExpandidas });
    setMdVisivel(false);
  };

  const voltarCategorias = () => {
    setCategoriaSelecionada(null);
    setMdVisivel(true);
  };

  const marcarVacina = (key) => {
    const novasMarcacoes = { ...vacMarcada, [key]: !vacMarcada[key] };
    setVacMarcada(novasMarcacoes);
    salvarMarcacoes(novasMarcacoes);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloVacina}>Carteira de Vacinação</Text>
      
      {mdVisivel ? (
        <View>
          <Text style={styles.tituloCategorias}>Selecione uma Categoria:</Text>
          <ScrollView contentContainerStyle={styles.modalView}>
            {categoriasVacinas.map((cat, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => selecionarCategoria(cat)} 
                style={styles.botaoModal}
              >
                <Text style={styles.txtBotao}>{cat.categoria} ({cat.idade})</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <>
          <View style={styles.headerCategoria}>
            <Text style={styles.subtitulo}>
              {categoriaSelecionada.categoria} - {categoriaSelecionada.idade}
            </Text>
            <Text style={styles.descricao}>{categoriaSelecionada.descricao}</Text>
          </View>

          <FlatList
            data={categoriaSelecionada.vacinasExpandidas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              const keyVac = item.vacina + '-' + item.dose;
              return (
                <View style={styles.linha}>
                  <CheckBox 
                    style={styles.CheckBox}
                    value={vacMarcada[keyVac] || false} 
                    onCheckColor={color.PrincipaItens}
                  />
                  <Text style={styles.celTexto}>{item.vacina}</Text>
                  <Text style={styles.celTexto}>{item.dose}</Text>
                  <Text style={styles.celTexto}>{item.protecao}</Text>
                </View>
              );
            }}
          />

          <TouchableOpacity style={styles.botaoVoltar} onPress={voltarCategorias}>
            <Text style={styles.txtBotaoVoltar}>Voltar para a carteira de Vacinação</Text>
          </TouchableOpacity>

          
        </>
      )}
    </ScrollView>
  );
}
