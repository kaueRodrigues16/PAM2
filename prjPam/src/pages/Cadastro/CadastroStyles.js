import { StyleSheet } from "react-native"
import color from '../../Elementos/Visual/Paleta'

export default StyleSheet.create({ 

    container: {
        alignItems: 'center',
    },

    Titulo: {
        paddingTop: 10,
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: "24px",
    },

    Formulario: {
        alignItems: 'center',
        paddingTop: 30,
    },


    campo: {
        height: 50,
        width: '120%',
        borderWidth: 3,
        borderColor: color.Principal,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 16,
        fontSize: 16,   
        color: 'gray', 
      },

      Opicional: {
        marginBottom: 16,
      },

      BotaoCadastrar: {
        backgroundColor: color.PrincipaItens,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        width: '120%',
      },

      tituloCadastrar: {
        color: color.Segundaria,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
      },

      RadioGenero: {
        textAlign: 'center',
      },

      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: color.PrincipaItens,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
})