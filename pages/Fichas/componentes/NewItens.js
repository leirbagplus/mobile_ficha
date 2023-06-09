
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function NewItens({props,funcao}) {
  return (
    <TouchableOpacity onPress={()=> funcao(props.key)}>
        <View style={styles.postagem}>
            <Feather name="trash-2" size={24} color="white" />
            <Text style={styles.itemtexto}>{props.texto}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 postagem:{
    display:'flex',
    padding:'6%',
    marginTop:16,
    borderColor:'#D72145',
    borderWidth:1,
    borderRadius:10,
   flexDirection:'row',
    fontSize:20,
    textAlign:'center',
    
 },

 itemtexto:{
    marginLeft:30,
    fontSize:20,
    color:'white',
 },

});