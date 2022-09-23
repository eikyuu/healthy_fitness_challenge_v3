import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Text, Pressable, StyleSheet } from 'react-native';
import colors from '../themes/colors';

export default function PressableButtonNavigate({
  title,
  routeName,
  type,
}: {
  title: string;
  routeName: string;
  type: string;
}) {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigate(routeName, { exo: type })}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
