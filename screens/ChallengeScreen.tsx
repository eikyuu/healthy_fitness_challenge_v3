import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Description from '../components/challengeScreen/Description';
import Header from '../components/challengeScreen/Header';
import Video from '../components/challengeScreen/Video';
import Loading from '../components/Loading';
import { getByName } from '../_services/muscleJpApi';
import { getYoutubeVideo } from '../_services/youtubeApi';

export default function ChallengeScreen({ route }: any) {
  const { exo } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getByName(exo);
        const responseYoutube = await getYoutubeVideo(exo);
        setVideo(responseYoutube.items);
        setData(response);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header data={data} />
        <Description description={data[0].description} />

        <View style={styles.containerDescription}>
          <Text style={styles.titleDescription}>Créer un challenge :</Text>
        </View>

        <Video video={video} />
      </ScrollView>
    </SafeAreaView>
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
});
