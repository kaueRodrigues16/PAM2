import {StyleSheet } from 'react-native';
import color from '../../Elementos/Visual/Paleta'

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    botaoIMC: {
        padding: 10,
        backgroundColor: color.Segundaria,
        alignItems: 'center', // Ajustando alinhamento para o conteúdo do botão
        justifyContent: 'center', // Ajustando alinhamento para o conteúdo do botão
        width: '90%',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: color.PrincipaItens,
        marginBottom: 10, // Espaço entre os botões
      },
    
      botaoVacinas: {
        padding: 10,
        backgroundColor: color.Segundaria,
        alignItems: 'center', // Ajustando alinhamento para o conteúdo do botão
        justifyContent: 'center', // Ajustando alinhamento para o conteúdo do botão
        width: '90%',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: color.PrincipaItens,
        marginBottom: 40, // Espaço entre os botões
      },

    title: {
        color: color.PrincipaItens,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',

    },
})