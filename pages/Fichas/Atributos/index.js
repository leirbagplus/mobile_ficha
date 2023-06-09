import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, ScrollView, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';


export default function Atributos(){

  const [ficha, setFicha] = useState('Ficha D&D')
  const [nome, setNome] = useState('Ficha D&D')
  const [ligar, setLigar] = useState(true)
  const [texto, setTexto] = useState('TRAVAR')
  const clicarBotao = () => {
    setLigar(!ligar)
    setFicha(nome)
    if (ligar == false) {
      setTexto('TRAVAR')
    } else if (ligar == true) {
      setTexto('DESTRAVAR')
    }

  }

  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Ficha}>{ficha}</Text>

          <TextInput
            style={styles.textopersonagem}
            placeholder='NOME DO PERSONAGEM'
            placeholderTextColor={'gray'}
            color={'white'}
            onChangeText={setNome}
            editable={ligar}
          />
          <TextInput
            style={styles.textopersonagem}
            placeholder='NOME DO JOGADOR'
            placeholderTextColor={'gray'}
            color={'white'}
            editable={ligar}
          />
          <TextInput
            style={styles.textopersonagem}
            placeholder='CLASSE E NIVEL'
            placeholderTextColor={'gray'}
            color={'white'}
            editable={ligar}
          />
          <TextInput
            style={styles.textopersonagem}
            placeholder='RAÇA'
            placeholderTextColor={'gray'}
            color={'white'}
            editable={ligar}
          />
          <TextInput
            style={styles.textopersonagem}
            placeholder='PONTOS DE EXPERIÊNCIA'
            placeholderTextColor={'gray'}
            color={'white'}
            editable={ligar}
          />





          <View style={styles.atributos}>
            <View style={styles.att}>
              <Text style={styles.atributoNome}>Força</Text>
              <Image style={styles.atributoimg} source={require('../../../assets/vetor.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textatt}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>

            </View>
            <View style={styles.att}>
              <Text style={styles.atributoNome}>Inteligência</Text>
              <Image style={styles.atributoimg} source={require('../../../assets/vetor.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textatt}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>

            </View>
            <View style={styles.att}>
              <Text style={styles.atributoNome}>Destreza</Text>
              <Image style={styles.atributoimg} source={require('../../../assets/vetor.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textatt}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>
            </View>

          </View>

          <View style={styles.atributos2}>
            <View style={styles.att}>
              <Text style={styles.atributoNome}>Sabedoria</Text>
              <Image style={styles.atributoimg} source={require('../../../assets/vetor.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textatt}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>
            </View>

            <View style={styles.att}>
              <Text style={styles.atributoNome}>Constituição</Text>
              <Image style={styles.atributoimg} source={require('../../../assets/vetor.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textatt}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>
            </View>

          </View>
          <View style={styles.att2}>
            <View style={styles.iniciativa}>
              <Text style={styles.atributoNomeIniciativa}>Iniciativa</Text>
              <TextInput
                style={styles.textatt2}
                placeholder='2'
                keyboardType='numeric'
                color={'white'}
                placeholderTextColor={'gray'}
                editable={ligar}
              />
            </View>
            <View style={styles.iniciativa}>
              <Text style={styles.atributoNomeDeslocamento}>Deslocamento</Text>
              <TextInput
                style={styles.textatt2}
                placeholder='2'
                keyboardType='numeric'
                color={'white'}
                placeholderTextColor={'gray'}
                editable={ligar}
              />
            </View>
            <View style={styles.armadura}>
              <Text style={styles.atributoNomeArmadura}>Classe de armadura</Text>
              <Image source={require('../../../assets/escudo.png')} />
              <View style={styles.textoatri}>
                <TextInput
                  style={styles.textattArmadura}
                  placeholder='2'
                  keyboardType='numeric'
                  color={'white'}
                  placeholderTextColor={'gray'}
                  editable={ligar}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerVida}>
            <Text style={styles.atributoNomeIniciativa}>Pontos de vida atual</Text>
            <TextInput
              style={styles.textVida}
              placeholder='2'
              keyboardType='numeric'
              color={'white'}
              placeholderTextColor={'gray'}
              editable={ligar}
            />
          </View>
          <View style={styles.containerVida}>
            <Text style={styles.atributoNomeIniciativa}>Pontos de vida temporário</Text>
            <TextInput
              style={styles.textVida}
              placeholder='2'
              keyboardType='numeric'
              color={'white'}
              placeholderTextColor={'gray'}
              editable={ligar}
            />
          </View>
          <View style={styles.bonus}>

            <TextInput
              style={styles.textBonus}
              placeholder='2'
              keyboardType='numeric'
              color={'white'}
              placeholderTextColor={'gray'}
              editable={ligar}
            />
            <Image style={styles.letreiro1} source={require('../../../assets/letreiro.png')} />
            <Text style={styles.inspiracaoTexto}>Inspiração</Text>

            <TextInput
              style={styles.textBonus}
              placeholder='2'
              keyboardType='numeric'
              color={'white'}
              placeholderTextColor={'gray'}
              editable={ligar}
            />
            <Image style={styles.letreiro} source={require('../../../assets/letreiro.png')} />
            <Text style={styles.inspiracaoTexto2}>Bônus de proficiência</Text>


          </View>

          <View style={styles.divbotao}>
            <Button
              style={styles.botao}
              color={'#D72145'}
              title={texto}
              onPress={clicarBotao}

            />
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
  },
  container: {
    flex: 1,
    backgroundColor: '#131520',
    paddingTop: '15%',
    paddingBottom: '50%',
    backgroundColor: '#1F202E',
    alignItems: 'center',
    paddingRight: '5%',
    paddingLeft: '2%',

  },

  Ficha: {
    color: 'white',
    fontSize: 50,
  },
  textopersonagem: {
    display: 'flex',
    borderColor: '#D72145',
    borderWidth: 1,
    width: '80%',
    height: '5%',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
    justifyContent: 'center'

  },
  atributos: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center'
  },
  atributos2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -60,
    justifyContent: 'center'

  },
  atributoimg: {
    margin: 5
  },
  atributoNome: {
    top: '15%',
    color: 'white',
    fontSize: 16
  },
  atributoNomeIniciativa: {
    color: 'white',
    fontSize: 16
  },
  atributoNomeDeslocamento: {
    color: 'white',
    fontSize: 13
  },
  atributoNomeArmadura: {
    top: '15%',
    color: 'white',
    fontSize: 8,
  },
  att: {
    alignItems: 'center'


  },
  textoatri: {
    bottom: "56%",
    left: "21%",
    width: "100%"

  },
  textatt: {
    top: '40%',
    height: 50,
    width: '62%',
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#1F202E',

  },
  textatt2: {
    top: '20%',
    height: 50,
    width: '62%',
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#1F202E',

  },
  textattArmadura: {
    top: '40%',
    height: 50,
    marginLeft: '10%',
    width: '40%',
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: '#1F202E',

  },
  textVida: {
    top: '20%',
    height: 70,
    width: '62%',
    textAlign: 'center',
    fontSize: 70,
    backgroundColor: '#1F202E',

  },
  textBonus: {

    height: '90%',
    width: 60,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 50,
    borderWidth: 1,
    borderColor: '#D72145',


  },
  iniciativa: {
    borderWidth: 1,
    borderColor: '#D72145',
    width: 90,
    height: 150,
    alignItems: 'center',
    marginLeft: 10,
  },
  armadura: {
    alignItems: 'center',
    marginLeft: 10,

  },
  att2: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerVida: {
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    height: 140,
    borderColor: '#D72145',
    marginTop: 15
  },
  bonus: {
    display: 'flex',
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',



  },
  letreiro1: {
    marginRight: 2

  },
  inspiracaoTexto: {
    flex: 1,

    position: 'absolute',
    left: '24%',
    color: 'white'
  },
  inspiracaoTexto2: {
    flex: 1,
    fontSize: 10,
    position: 'absolute',
    right: '6%',
    color: 'white'
  },
  divbotao: {
    flex: 1,
    width: '40%',
    color: '#1F202E',

  },



});
