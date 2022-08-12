import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Button, ImageBackground, Text, View, StyleSheet } from 'react-native';
import NavigationBtn from '../components/NavigationBtn';

export default function HomeScreen() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgroundImage.jpeg')}
        resizeMode='cover'
        style={styles.image}
      >
        <NavigationBtn 
          title='Another'
          routeName='Another'
        />
        <NavigationBtn 
          title='Another'
          routeName='Another'
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});