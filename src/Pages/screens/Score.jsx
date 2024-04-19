import { Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
import tw from 'twrnc';

const Score = ({navigation}) => {
   const route = useRoute()
   const {score} = route.params;
  return (
    <View style={tw`flex-1 items-center justify-center`}>

      <Text>Sua pontuação foi {score} pontos</Text>

      <Pressable style={tw`bg-purple-500 p-2 rounded-md mt-4`} onPress={() => navigation.navigate("Home")}
      >
        <Text style={tw`text-white font-medium`}>Play Again</Text>
      </Pressable>
        
    </View>
  )
}

export default Score

const styles = StyleSheet.create({})