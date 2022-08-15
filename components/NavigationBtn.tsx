import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../themes/colors';
import font from '../themes/font';

export default function NavigationBtn({ title, routeName }: { title: string, routeName: string }) {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Pressable style={[styles.btn, styles.shadowProp]} onPress={() => navigate(routeName)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 3,
    backgroundColor: colors.primary,
    borderWidth: .5,
    borderColor: '#000',
  },
  text: {
    color: colors.white,
    fontSize: font.size.font12,
    fontWeight: 'bold'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});