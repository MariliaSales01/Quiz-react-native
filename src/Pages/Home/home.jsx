import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
        <Text style={styles.home}>Home</Text>
        <View style={styles.listra}></View>
    <View>
     <Image
     source={require('../../assets/img.png')}
     style={{width: "100%"}}
     resizeMode='contain'
/>
    </View>
    <View >
      <Text style={styles.title}>Instruções</Text>

      <View style={styles.instruçao}>
        <Text style={styles.text}>Cada quiz tem quatro opções, o progresso do teste será mostrado no final do quiz.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Quiz')}>
            <Text  style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
  },
  buttonText:{
    borderRadius: 10,
    backgroundColor: '#5200FF',
    alignSelf: 'center',
    color:'#fff',
    width: '40%',
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: "5%",
  },
  instruçao:{
   height: 100,
   width: "70%",
   alignSelf: 'center',
   backgroundColor:"#D9D9D9",
   borderRadius: 10,  
   marginTop: 15,
  },
  text:{
    marginTop:'5%',    
    textAlign:'center',
    fontSize: 18,
    fontWeight: '800',
  },
  title:{
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 30,
    color:'#fff',
  }, 
  titulo:{
    color:'#fff',
  },
  home:{
    fontSize: 25,
    fontWeight: '800',
    color:'#fff',
    margin: 10,
  },
  listra:{
    width: "100%",
    height: 1,
    backgroundColor: "#fff"
  }
})