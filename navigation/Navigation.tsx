import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import colors from '../themes/colors';
import font from '../themes/font';
import ChallengeBodyScreen from '../screens/ChallengeBodyScreen';
import SelectExoScreen from '../screens/SelectExoScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import MyChallengeScreen from '../screens/MyChallengeScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Healthy Fitness Challenge'>
        <Stack.Screen
          name='Healthy Fitness Challenge'
          component={HomeScreen}
          options={{
            title: 'Healthy Fitness Challenge',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTransparent: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen name='Another' component={AnotherScreen} />
        <Stack.Screen
          name='ChallengeSelectExo'
          component={SelectExoScreen}
          options={{
            title: 'Choississez un exercice',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTransparent: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name='CreateChallenge'
          component={ChallengeScreen}
          options={{
            title: "Description de l'exercice",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTransparent: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name='ChallengeBody'
          component={ChallengeBodyScreen}
          options={{
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
          }}
        />
        <Stack.Screen
          name='MyChallenge'
          component={MyChallengeScreen}
          options={{
            title: 'Mes challenges',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTransparent: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: font.size.font12,
            },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
