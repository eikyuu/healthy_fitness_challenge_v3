import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import { getByPartBody } from '../_services/muscleJpApi';

export default function SelectExoScreen({ route }: any) {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { exo } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getByPartBody(exo);
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

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
    onPress={() => navigate('CreateChallenge', { exo: item.nom })}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.img,
        }}
        resizeMode='contain'
      />
    </Pressable>
  );

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
});
