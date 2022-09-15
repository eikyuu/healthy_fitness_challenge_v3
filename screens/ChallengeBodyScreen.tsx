import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../themes/colors';
import metrics from '../themes/metrics';
import { ErrorHandler } from '../_utils/ErrorBoundary';

export default function ChallengeBodyScreen() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <ErrorHandler>
      <ImageBackground
        source={require('../assets/images/body.png')}
        style={styles.image}
        resizeMode='contain'
      >
        <View style={styles.container}>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => navigate('ChallengeSelectExo', { exo: 'bras' })}
            >
              <Text style={styles.text}>Bras</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigate('ChallengeSelectExo', { exo: 'avant-bras' })
              }
            >
              <Text style={styles.text}>Avant-bras</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigate('ChallengeSelectExo', { exo: 'épaules' })}
            >
              <Text style={styles.text}>Epaules</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigate('ChallengeSelectExo', { exo: 'pectauraux' })
              }
            >
              <Text style={styles.text}>Pectauraux</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => navigate('ChallengeSelectExo', { exo: 'dos' })}
            >
              <Text style={styles.text}>Dos</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigate('ChallengeSelectExo', { exo: 'jambes' })}
            >
              <Text style={styles.text}>Jambes</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigate('ChallengeSelectExo', { exo: 'fessiers' })
              }
            >
              <Text style={styles.text}>Fessiers</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigate('ChallengeSelectExo', { exo: 'abdominaux' })
              }
            >
              <Text style={styles.text}>Abdominaux</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </ErrorHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: -metrics.navBarHeight,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
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
