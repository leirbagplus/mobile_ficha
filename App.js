import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import Loader from "./Loader";


export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.user}>
      <AntDesign name="user" size={50} color="white" />
    </View>
    <Loader />
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F202E',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  user:{
    width:'20%',
    height:'9.5%',
    backgroundColor:'#8E3F3F',
    borderRadius:80,
    borderWidth:1,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
});
