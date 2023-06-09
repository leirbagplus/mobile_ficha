import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Cabecalho(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}> {props.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:'10%'
  },

  cabecalho:{
    fontSize:50,
    color:"white",
  },
});