import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      botaoCalcular: {
        padding: 15,
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        width: "60%",
        height:"8%",
        borderRadius: 10,
        borderWidth: 3,
        borderColor:"red",
    },
    title: {
        color: "red",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',

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

