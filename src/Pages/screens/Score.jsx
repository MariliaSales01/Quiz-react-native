import { Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
import tw from 'twrnc';

const Score = ({navigation}) => {
   const route = useRoute()
   const {score} = route.params;
  return (
    <View style={styles.container}>
      <View  style={styles.mid}>
      <Text style={styles.titulo}>Parabéns</Text>
      <Text style={styles.title}>Sua pontuação foi {score} pontos</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({
  container:{
  backgroundColor: "black",
  flex: 1,
  justifyContent: 'center',
  },
  mid:{
    padding:"10%",
    borderRadius: 20,
    margin: 30,
    justifyContent: 'center',
    backgroundColor : '#DCDADA'
  },
  titulo:{
    fontSize: 30,
    fontWeight:"600",
    textAlign:'center',
    marginBottom: 5,
  },
  title:{
    fontSize: 25,
    fontWeight:"400",
    justifyContent: 'center',
  },
  button:{
    marginTop: 20,
    backgroundColor: '#5200FF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight:"900",
    textAlign: 'center',
  },
})