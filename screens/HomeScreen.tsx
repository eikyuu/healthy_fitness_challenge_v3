import { ImageBackground, StyleSheet, View } from 'react-native';
import NavigationBtn from '../components/NavigationBtn';
import metrics from '../themes/metrics';
import { ErrorHandler } from '../_utils/ErrorBoundary';

export default function HomeScreen() {
  return (
    <ErrorHandler>
      <ImageBackground
        source={require('../assets/images/backgroundImage.jpeg')}
        style={styles.image}
      >
        <View style={styles.container}>
          <NavigationBtn title='Challenges' routeName='ChallengeBody' />
          <NavigationBtn title='Mes challenges' routeName='MyChallenge' />
        </View>
      </ImageBackground>
    </ErrorHandler>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -metrics.navBarHeight,
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
