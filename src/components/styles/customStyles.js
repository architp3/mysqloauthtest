import { StyleSheet } from 'react-native';
export default StyleSheet.create({
mainContainer: {
    flexGrow: 1,
    backgroundColor:'#ffffff',
},
card:{
    height:650,
    width:450,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5,
    padding:40,
},
container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  input: {
    paddingLeft:15,
    paddingBottom:10,
    paddingTop:10,
    width:310,
    fontSize:16,
    color:'#000',
    marginVertical: 5,
    marginBottom: 5,
    borderBottomColor:'#dad9d9',
    borderBottomWidth: 1,
  },
  button: {
    width:310,
    backgroundColor:'#a40b0e',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  hyperLinkText:{
      alignItems:'center',
      fontSize:16,
      marginVertical:16,
  },
  hyperLink:{
      color: '#a40b0e',
      fontWeight: 'bold',
  }
});
