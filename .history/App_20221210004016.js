import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './screens/Login';
// import Main from './screens/Main';
import Home from './screens/Home';
import BroadcastMedia from './screens/BroadcastMedia'
import Computing from './screens/Computing'
import Marketing from './screens/Marketing'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />  
        <Stack.Screen options={{headerShown: false}} name="BroadcastMedia" component={BroadcastMedia} />
        <Stack.Screen options={{headerShown: false}} name="Computing" component={Computing} /> 
        <Stack.Screen options={{headerShown: false}} name="BroadcastMedia" component={Marketing} />
        <Stack.Screen options={{headerShown: false}} name="Computing" component={Computing} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}