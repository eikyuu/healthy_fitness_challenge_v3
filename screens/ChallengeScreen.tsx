import { useNavigation } from '@react-navigation/native';
import { Button, StatusBar, Text, View } from 'react-native';

export default function ChallengeScreen({ route }: any) {
  const { exo } = route.params;
  console.log(exo);
  
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
