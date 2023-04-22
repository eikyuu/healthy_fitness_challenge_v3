import { ImageBackground, StyleSheet, View } from 'react-native';
import PressableButtonNavigate from '../components/PressableButtonNavigate';
import colors from '../themes/colors';
import metrics from '../themes/metrics';
import { ErrorHandler } from '../_utils/ErrorBoundary';

export default function ChallengeBodyScreen() {
  return (
    <ErrorHandler>
      <ImageBackground
        source={require('../assets/images/body.png')}
        style={styles.image}
        resizeMode='contain'
      >
        <View style={styles.container}>
          <View>
            <PressableButtonNavigate
              title='Dos'
              routeName='ChallengeSelectExo'
              type='back'
            />
            <PressableButtonNavigate
              title='Cardio'
              routeName='ChallengeSelectExo'
              type='cardio'
            />
            <PressableButtonNavigate
              title='poitrine'
              routeName='ChallengeSelectExo'
              type='chest'
            />
            <PressableButtonNavigate
              title='Avant-bras'
              routeName='ChallengeSelectExo'
              type='lower arms'
            />
          </View>
          <View>
            <PressableButtonNavigate
              title='Bas des jambes'
              routeName='ChallengeSelectExo'
              type='lower legs'
            />
            {/* <PressableButtonNavigate
              title='Cou'
              routeName='ChallengeSelectExo'
              type='neck'
            /> */}
            {/* <PressableButtonNavigate
              title='Epaules'
              routeName='ChallengeSelectExo'
              type='shoulders'
            />*/}
            <PressableButtonNavigate
              title='Haut des bras'
              routeName='ChallengeSelectExo'
              type='upper arms'
            />
            <PressableButtonNavigate
              title='Haut des jambes'
              routeName='ChallengeSelectExo'
              type='upper arms'
            />
            <PressableButtonNavigate
              title='Taille'
              routeName='ChallengeSelectExo'
              type='waist'
            /> 
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
