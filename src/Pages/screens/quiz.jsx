import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Alert } from 'react-native'
import { reactQuestions} from '../config/question';
import tw from 'twrnc';

export default function Quiz({navigation}) {
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const[score, setScore] = useState (0);
    const[selectedOption, setSelectedOption] = useState (null);
    const[isCorrect, setIsCorrect] = useState (null);
    console.log({isCorrect})
    const handleNext = ()=>{
        if(currentQuestionIndex === reactQuestions.length- 1){
            // return;

            navigation.navigate("Score")
        }
        else{
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedOption(null)
            setIsCorrect(null)
        }
       
    };

    const handleOptionPress = (pressdOption) =>{
        setSelectedOption(pressdOption)

        const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressdOption
        setIsCorrect(isAnswerCorrect)
    
        if(isAnswerCorrect){
            setScore((prevScore) => prevScore + 10)
        }
    
    }
  return (
    <View style={tw`nt-6 p-4`}>
        <Text style={tw`text-3xl mb-20`}>{reactQuestions[currentQuestionIndex].question}</Text>
        {reactQuestions[currentQuestionIndex].options.map((option)=>(
            <Pressable style= {tw` border-2 border-purple-500 p-4 m-4 rounded-md ${
                selectedOption === option ? isCorrect ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500" : "border-purple-500" 
            }`}
             onPress={() => handleOptionPress(option)} 
             
             >
                <Text style={tw`text-lg`}>{option}</Text>
            </Pressable>

        ))}
        <Pressable onPress={handleNext}>
            <Text style={styles.button}>Next</Text>
        </Pressable>
    </View>


  )}

  const styles = StyleSheet.create({
    button:{
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '70%',
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: "20%",
    fontSize: 20,
    fontWeight: '600',
    }

  })