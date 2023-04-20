import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function App() {
  


  return (

    <View style={styles.container}>

      <Text style={styles.texto_login}>LOGIN</Text>

      <Text style={styles.texto_usuario}>Usuário/E-mail</Text>
      <View style={styles.div_login}>
        <MaterialCommunityIcons name="email" size={18} color="white" />
        <View style={styles.login}>
          <TextInput
            style={styles.input}
            placeholder='Usuario/Email'
          />
        </View>
      </View>

      <Text style={styles.texto_senha}>Senha</Text>
      <View style={styles.div_login}>
        <FontAwesome5 name="key" size={18} color="white" />
        <View style={styles.senha}>
          <TextInput
            style={styles.input}
            placeholder='Senha'
          />
        </View>

      </View>

      <View style={styles.esquecer_senha}>
        <Text style={styles.texto_ajuda}>
          Esqueceu a sua </Text><TouchableOpacity style={styles.texto_senha_usuario}>
          <Text style={styles.texto_vermelho}>Senha/Usuario</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <TouchableOpacity style={styles.login_botao}>
          <Text style={styles.texto_botao} >Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ou}>
        <View style={styles.linhas_laterais}></View>
        <Text style={styles.texto_OU}>  OU  </Text>
        <View style={styles.linhas_laterais}></View>
      </View>

      <View style={styles.conexoes}>
        <AntDesign name="google" size={40} color="white" />
        <Text>         </Text>
        <Entypo name="facebook" size={40} color="white" />
      </View>

      <View style={styles.novo_usuario}>
        <Text style={styles.texto_ajuda}>
          Novo Usuario? </Text><TouchableOpacity style={styles.texto_senha_usuario}>
          <Text style={styles.texto_vermelho}>Crie a sua conta</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F202E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto_login: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop:'20%',
    color: '#E44C55',

  },
  texto_usuario: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 25,
    marginBottom: 5,
    marginRight: '60%',


  },
  texto_senha: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
    marginRight: '75%',


  },

  div_login: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 30,
    borderColor: '#D72145',
    color: '#FFFFFF'
    
  },

  input: {
    display: 'flex',
    padding: 10,
    width: 300,
    fontSize:20

  },
  esquecer_senha: {
    flexDirection: 'row',
    marginRight: '37%',
    padding: 10
  },

  texto_ajuda: {
    fontSize: 15,
    textAlignVertical: 'center',
    flexDirection: 'row',
    color: '#FFFFFF'

  },


  texto_vermelho: {
    color: '#E44C55',
    fontSize: 15,
    textAlignVertical: 'center'


  },
  botao: {
    padding: 10,
  },

  login_botao: {
    marginTop:20,
    width: 250,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E44C55'
  },

  texto_botao: {
    fontSize: 20,
    color: '#ffffff'
  },

  ou: {
    flexDirection: 'row',
    marginTop: '30%',
    marginBottom:'5%'

  },

  texto_OU: {
    fontSize: 20,
    color: '#ffffff'
  },

  linhas_laterais: {
    justifyContent: 'center',
    height: 1,
    marginTop: '3%',
    borderWidth: 1,

    borderColor: '#fff',
    paddingLeft: '38%',

  },
  conexoes: {
    flexDirection: 'row',
    padding: 20

  },

  novo_usuario: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },


});
