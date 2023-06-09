import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Button, FlatList} from 'react-native';
import { useState } from 'react';

import Cabecalho from '../componentes/cabecalho';
import NewItens from '../componentes/NewItens';
import AddItens from '../componentes/addItens';

export default function Itens() {
  const [ligar, setLigar] = useState(true)
  const [texto, setTexto] = useState('TRAVAR')
  const clicarBotao = () => {
    setLigar(!ligar)
    if (ligar == false) {
      setTexto('TRAVAR')
    } else if (ligar == true) {
      setTexto('DESTRAVAR')
    }

  }
  const [lista, setLista] = useState([


  ]);

  const apertarItem = (key) => {
    setLista(
    (prevLista) => {
       return prevLista.filter(texto => texto.key !=key);
    })
   }

   const submeterInformacao = (texto) => {
    setLista((prevLista) => {
    return [
    { texto: texto, key: Math.random().toString() },
    ...prevLista
    ];
    })
    }

  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <View style={styles.container}>

          <Cabecalho name={'Itens e Armas'}/>

          <AddItens funcao={submeterInformacao} />

          <View style={styles.conteudo}>
         
            <View>
              <FlatList
                data={lista}
                renderItem={({ item }) => (
                 <NewItens props={item} funcao={apertarItem}/>

                )}

              />

            </View>

          </View>


          <StatusBar style="auto" />

        </View>

      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: '#1F202E',
  },
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#131520',
    paddingTop: '15%',
    backgroundColor: '#1F202E',
    alignItems: 'center',
  },

  conteudo:{
    width:'85%',
    padding:20
  },



});
