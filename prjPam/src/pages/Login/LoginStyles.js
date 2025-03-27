import { StyleSheet } from "react-native"

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
        color: 'red', // Cor do texto
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
        backgroundColor: '#007BFF',
        backgroundColor: 'red', // Cor de fundo do botão
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, // Opção para arredondar os cantos
    }
})

