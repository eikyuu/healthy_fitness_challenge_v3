import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title='Go to another screen'
        onPress={() => navigate('Another')}
      />
    </View>
  );
}
