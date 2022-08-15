import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import colors from '../themes/colors';
import font from '../themes/font';
import ChallengeBodyScreen from '../screens/ChallengeBodyScreen';
import SelectExoScreen from '../screens/SelectExoScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Fitness challenge'>
        <Stack.Screen
          name='Fitness challenge'
          component={HomeScreen}
          options={{
            title: 'Fitness challenge',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTransparent: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
          }}
        />
        <Stack.Screen name='Another' component={AnotherScreen} />
        <Stack.Screen name='ChallengeSelectExo' component={SelectExoScreen} />
        <Stack.Screen name='ChallengeBody' component={ChallengeBodyScreen} options={{
          title: 'Choississez une partie du corps',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTransparent: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: font.size.font12,
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
