import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      botao: {
        padding: 15,
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        width: "45%",
        height:"8%",
        borderRadius: 10,
        borderWidth: 3,
        borderColor:"red",
        gap: 10,
    },
    textoBotao: {
        color: "red",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: 'center',

    },

    botoes: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between", 
      width: "80%", 
      marginTop: 20,
      gap: 15, 
  },

    lbpeso: {
      borderWidth: 3, 
      borderRadius:8, 
      height: 40, 
      width:"250px", 
      margin:50
    },

    lbaltura : {
      borderWidth: 3, 
      borderRadius:8, 
      height: 40, 
      width:"250px", 
      margin:25
    },
})

