import { StyleSheet } from 'react-native';
import color from '../../Elementos/Visual/Paleta'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Segundaria,
    padding: 20,
  },
  Vacina: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: color.PrincipaItens,
    marginBottom: 20,
  },
  headerCategoria: {
    padding: 15,
    backgroundColor: color.TerciariaItens,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: color.PrincipaItens,
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: color.PrincipaItens,
  },
  

  linha: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    marginVertical: 5,
  },
  celTexto: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  modalView: {
    flexGrow: 1,
    backgroundColor: color.Segundaria,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },


  botaoModal: {
    backgroundColor: color.PrincipaItens,
    padding: 15,
    marginVertical: 10,
    width: 260,
  },
  txtBotao: {
    color: color.Segundaria,
    fontSize: 16,
    textAlign: 'center',
  },
  botaoVoltar: {
    backgroundColor: color.PrincipaItens,
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
    width: 200,
  },
  txtBotaoVoltar: {
    color: color.Segundaria,
    fontSize: 16,
    textAlign: 'center',
  },

  txtBotaoHome: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});