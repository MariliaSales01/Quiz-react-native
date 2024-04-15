import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native'
export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Quiz</Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
            <Text  style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text:{
    color:'#fff', 
    fontSize: 120,
    fontWeight: '900', 
    textAlign: 'center',
  },
  buttonText:{
    borderRadius: 50,
    backgroundColor: '#5200FF',
    alignSelf: 'center',
    color:'#fff',
    width: '60%',
    paddingVertical: 8,
    textAlign: 'center',
    marginTop: "20%",
    fontSize: 25,
    fontWeight: '500',
  },
})
