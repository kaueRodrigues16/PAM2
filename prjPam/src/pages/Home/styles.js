import {StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    botaoIMC: {
        padding: 10,
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        width: "90%",
        borderRadius: 12,
        borderWidth: 3,
        borderColor:"red",
        position: "absolute"
    },
    title: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',

    },
})