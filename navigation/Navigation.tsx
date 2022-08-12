import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Healthy fitness challenge'>
        <Stack.Screen name='Healthy fitness challenge' component={HomeScreen} />
        <Stack.Screen name='Another' component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
