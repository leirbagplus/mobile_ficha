import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function CharacterListItens(props){
  const navigation= useNavigation();
    return (
        <View style={styles.personagem}>
        <TouchableOpacity style={styles.botao_personagem} onPress={()=>navigation.navigate('Ficha')}>
          <View style={styles.icone_personagem}>
            <FontAwesome name="user-secret" size={50} color="white" />
          </View>
          <View style={styles.div_texto_personagem}>
            <Text style={styles.texto_personagem}>{props.nome}</Text>
          </View>
        </TouchableOpacity>
             </View>
    );
}

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       borderBottomWidth:1
        
    },
    personagem: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'center',
        marginRight:'10%',
        marginBottom:'6%',
        alignItems:'center',
        
        
      },
      
      botao_personagem: {
        width:'80%',
        padding: '3%',
        paddingLeft: '8%',
        paddingRight: '8%',
        borderRadius: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D72145',
      },
    
      div_texto_personagem: {
        justifyContent: 'center',
        color: '#fff',
        marginLeft: 40,
      },
      texto_personagem: {
        color: '#fff',
        fontSize: 25,
      }
})