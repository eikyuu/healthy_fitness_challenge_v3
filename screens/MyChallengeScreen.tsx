import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRemoveRouteFromState } from '../_hooks/useRemoveRouteFromState';
import { ErrorHandler } from '../_utils/ErrorBoundary';
interface challenge {
  id: string;
  challengeName: string;
  nameExo: string;
  durationChallenge: string;
  firstRepetition: string;
  additionalDuration: string;
  days: string;
}

export default function MyChallengeScreen() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const state = useNavigationState((state) => state);
  const [challenges, setChallenges] = useState<challenge[]>([]);

  useRemoveRouteFromState('CreateChallenge');
  useRemoveRouteFromState('ChallengeSelectExo');
  useRemoveRouteFromState('ChallengeBody');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('challenge');
      if (jsonValue !== null) {
        setChallenges(JSON.parse(jsonValue));
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const renderChallenges = () => {
    return challenges.map((challenge) => {
      return (
        <Pressable
          onPress={() =>
            navigate('CreateChallenge', {
              exo: challenge.nameExo,
              edit: true,
              id: challenge.id,
              day: challenge.days,
              duration: challenge.durationChallenge,
            })
          }
          style={styles.container}
          key={challenge.id}
        >
          <Text style={styles.title}>{challenge.challengeName}</Text>
          <Text>{challenge.nameExo}</Text>
          <Text>
            {challenge.days} / {challenge.durationChallenge} jours
          </Text>
        </Pressable>
      );
    });
  };

  useEffect(() => {
    getData();
    return () => {
      setChallenges([]);
    };
  }, [state]);

  return (
    <ErrorHandler>
      <SafeAreaView>
        <ScrollView>
          <View>{renderChallenges()}</View>
        </ScrollView>
      </SafeAreaView>
    </ErrorHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    borderLeftColor: 'black',
    borderLeftWidth: 5,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
