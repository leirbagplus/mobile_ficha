import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




export default function AddItens({funcao}) {

    const [texto,setTexto]=useState('');

    const pegarMudanca = (val) =>{
        setTexto(val)
    }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Novo Item'
        placeholderTextColor={'white'}
        onChangeText={pegarMudanca}
      />

      <TouchableOpacity onPress={()=>funcao(texto)} style={styles.btnText}>
        <Text style={styles.Text}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginBottom:10,
    color:'#ffffff',
    paddingHorizontal:'25%',
    paddingVertical:'2%',
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#ffffff'
  },
  btnText:{
    paddingHorizontal:'20%',
    paddingVertical:'4%',
    backgroundColor:'#D72145',
    borderRadius:10,

  },
  Text:{
    color:'#ffffff',
    fontSize:20,
  },


});