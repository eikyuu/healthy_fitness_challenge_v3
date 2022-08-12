import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import colors from '../themes/colors';
import font from '../themes/font';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Healthy fitness challenge'>
        <Stack.Screen
          name='Healthy fitness challenge'
          component={HomeScreen}
          options={{
            title: 'Healthy fitness challenge',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
          }}
        />
        <Stack.Screen name='Another' component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
