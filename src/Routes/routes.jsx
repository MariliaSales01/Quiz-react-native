import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../Pages/Welcome/welcome'
import Home from '../Pages/Home/home'
import Quiz from '../Pages/screens/quiz'
import Score from '../Pages/screens/Score'

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}/>

            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}/>

            <Stack.Screen
            name="Quiz"
            component={Quiz}/>

            <Stack.Screen
            name="Score"
            component={Score}
            options={{headerShown: false}} />

        </Stack.Navigator>     
    )
}