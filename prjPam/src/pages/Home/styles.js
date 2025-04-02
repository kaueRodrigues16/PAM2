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
        alignContent: "center",
        justifyContent: "center",
        width: "90%",
        borderRadius: 12,
        borderWidth: 3,
        borderColor: color.PrincipaItens,
        position: "absolute"
    },
    title: {
        color: color.PrincipaItens,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',

    },
})