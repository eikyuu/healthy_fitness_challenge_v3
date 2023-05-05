import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Form from '../components/challengeScreen/Form';
import Header from '../components/challengeScreen/Header';
import Video from '../components/challengeScreen/Video';
import Loading from '../components/Loading';
import colors from '../themes/colors';
import { getByName } from '../_services/muscleJpApi';
import { getYoutubeVideo } from '../_services/youtubeApi';
import { ErrorHandler } from '../_utils/ErrorBoundary';
import { storeData } from '../_utils/Cache';

interface data {
  target: string;
  equipement: string;
  id: string;
  gifUrl: string;
  name: string;
  bodypart: string;
}

interface challenge {
  id: string;
  challengeName: string;
  nameExo: string;
  durationChallenge: string;
  firstRepetition: string;
  additionalDuration: string;
  days: string;
}

export default function ChallengeScreen({ route }: any) {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { exo, edit, id, day, duration } = route.params;
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);
  const [challenges, setChallenges] = useState<challenge[]>([]);

  useEffect(() => {
    getData();
    return () => {
      setChallenges([]);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const value = await AsyncStorage.getItem(`${exo}-challenge`);

        if (value !== null) {
          setData(JSON.parse(value));
        } else {
          const response = await getByName(exo);
          setData(response);
          // store data in cache
          storeData(response, `${exo}-challenge`);
        }

        const valueVideo = await AsyncStorage.getItem(`${exo}-video`);

        if (valueVideo !== null) {
          console.log('video from cache', JSON.parse(valueVideo));
          setVideo(JSON.parse(valueVideo));
        } else {
          const responseYoutube = await getYoutubeVideo(exo);
          setVideo(responseYoutube.items);
          // store data in cache
          storeData(responseYoutube.items, `${exo}-video`);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      setData([]);
    };
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('challenge');
      if (jsonValue !== null) {
        setChallenges(JSON.parse(jsonValue));
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const incrementChallengeDays = () => {
    const index = challenges.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      if (challenges[index].durationChallenge !== challenges[index].days) {
        challenges[index].days = (
          parseInt(challenges[index].days) + 1
        ).toString();
      }
    }
    setChallenges(challenges);
    AsyncStorage.setItem('challenge', JSON.stringify(challenges));
    navigate('MyChallenge');
  };

  const deleteChallenge = () => {
    const index = challenges.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      challenges.splice(index, 1);
    }
    setChallenges(challenges);
    AsyncStorage.setItem('challenge', JSON.stringify(challenges));
    navigate('MyChallenge');
  };

  const pressedDelete = () => {
    Alert.alert('Attention', 'Etes vous sur de vouloir supprimer ?', [
      {
        text: 'Non',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Oui', onPress: () => deleteChallenge() },
    ]);
  };

  const pressedValider = () => {
    Alert.alert('Attention', 'Etes vous sur de vouloir valider ?', [
      {
        text: 'Non',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Oui', onPress: () => incrementChallengeDays() },
    ]);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorHandler>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header data={data} />
          {/* <Description description={data[0].description} /> */}
          {edit !== true && (
            <View style={styles.containerDescription}>
              <Text style={styles.titleDescription}>Créer un challenge :</Text>
              <Form name={data[0].name} />
            </View>
          )}

          {edit === true && (
            <>
            { day < duration && (
              <Pressable style={styles.input} onPress={() => pressedValider()}>
                <Text>Finir mon challenge du jours</Text>
              </Pressable>
            )
            }
              <Pressable style={styles.input} onPress={() => pressedDelete()}>
                <Text>Supprimer mon challenge</Text>
              </Pressable>
            </>
          )}
          
          <Video video={video} />
        </ScrollView>
      </SafeAreaView>
    </ErrorHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerDescription: {
    padding: 10,
    marginBottom: 10,
  },
  titleDescription: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: colors.primary,
    borderWidth: 0.5,
    borderColor: '#000',
  },
});
