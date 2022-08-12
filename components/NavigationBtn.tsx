import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Button, StatusBar, Text, View } from 'react-native';

export default function NavigationBtn({ title, routeName }: { title: string, routeName: string }) {
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Button title={title} onPress={() => navigate(routeName)} />
  );
}
