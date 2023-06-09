import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { CharacterListItens } from '../CharacterListItens';

const personagem = [
  {id:'1', nome:'Personagem 1'},
  {id:'2', nome:'Personagem 2'},
  {id:'3', nome:'Personagem 3'},
  {id:'4', nome:'Personagem 4'},
  {id:'5', nome:'Personagem 5'},
  {id:'6', nome:'Personagem 6'},
  {id:'7', nome:'Personagem 7'}

]
export function CharacterList(){
    return (
        <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.cabecalho}>
            <View style={styles.icone_cabecalho}>
              <FontAwesome5 name="book" size={40} color="white" />
            </View>
            <Text style={styles.ficha}>FICHAS DE RPG</Text>
          </View>
  
            <FlatList
            data={personagem}
            keyExtractor={item => item.id}
            style={styles.container}
            renderItem={({item})=>(
                <CharacterListItens nome={item.nome}/>
            )}
            />
        </View>
      </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safearea:{
        flex:1
      },
      container: {
        flex: 1,
        backgroundColor: '#1F202E',
        paddingTop:'5%',
        paddingBottom: '5%',
        
      },
      cabecalho: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
            
      },
    
      icone_cabecalho: {
        padding: 10
      },
    
      ficha: {
        fontSize: 35,
        color: '#fff',
      },
})