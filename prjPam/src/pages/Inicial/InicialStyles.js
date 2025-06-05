import { StyleSheet } from "react-native"
import color from '../../Elementos/Visual/Paleta'

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 160,
        backgroundColor: 'red', // Cor do fundo do cabeçalho
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        flexDirection: 'row', // Alinha o conteúdo em linha
        paddingHorizontal: 20,
        position: 'relative',
    },

    Titulo: {
        color: color.Principal, // Cor do texto
        fontSize: 25,
        fontWeight: 'bold',
        flex: 1, // O título ocupa o máximo de espaço possível
        textAlign: 'center', // Centraliza o título
        paddingVertical: 20
    },

    Apresentacao: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 60
    },

    BotaoLogin: {
        backgroundColor: color.PrincipaItens,
        padding: 10,
        alignItems: 'center',
    },

    corpo: {
        paddingHorizontal: 16,
    },

    tituloLogin: {
        color: color.Segundaria,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },

    txCadastro: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    CadastroLink: {
        color: 'blue', 
        textDecorationLine: 'underline',
    },

})

