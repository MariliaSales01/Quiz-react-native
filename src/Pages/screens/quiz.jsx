import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { reactQuestions} from '../config/question';
import tw from 'twrnc';
import * as Progress from 'react-native-progress';

export default function Quiz({navigation}) {
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption]=useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const [quizProgress, setQuizProgress] = useState(reactQuestions.length)
    const progress = (currentQuestionIndex + 1) / quizProgress;

    const handleNext = () => {
        if (currentQuestionIndex === reactQuestions.length - 1){
        // return;
        
        navigation.navigate("Score", { score: score });

    }else{
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        }  
    };

    const handleOptionPress = (pressdOption) => {
        setSelectedOption(pressdOption);

        const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressdOption;

        setIsCorrect(isAnswerCorrect);
    
        if(isAnswerCorrect){
            setScore((prevScore) => prevScore + 10)
        }
    }
    
  return (
    <View style={tw`nt-6 p-4 flex-1 bg-black`}>
        <View style={tw`flex-row`}>
            <View style={tw`flex-1`}>
                <Progress.Bar progress={progress} width={null} height={20} color='#5200FF' />
            </View>
        
        </View>
        <Text style={tw`text-3xl mb-20 m-5 text-white`}>{reactQuestions[currentQuestionIndex].question}</Text>
            {reactQuestions[currentQuestionIndex].options.map((option)=>(
                <Pressable style= {tw` border-2 border-purple-500 p-4 m-4 rounded-md ${
                    selectedOption === option 
                    ? isCorrect 
                    ? "border-green-500" : " border-red-500" : "border-purple-500" 
                }`}
                onPress={() => handleOptionPress(option)}
                  
                >
                    <Text style={tw`text-lg text-white`}>{option}</Text>
                </Pressable>

            ))}
        <Pressable onPress={handleNext}
        >
            <Text style={styles.button}>{currentQuestionIndex === reactQuestions.length- 1 ? "Finish": "Next"}</Text>
        </Pressable>
    </View>

  )}

  const styles = StyleSheet.create({
    button:{
    borderRadius: 10,
    backgroundColor: '#5200FF',
    alignSelf: 'center',
    width: '70%',
    paddingVertical: 10,
    textAlign: 'center',   
    marginTop: "5%",
    fontSize: 20,
    fontWeight: '600',
    color:'#fff'
    }

  })