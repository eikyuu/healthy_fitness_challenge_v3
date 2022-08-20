import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';
import { getByName } from '../_services/muscleJpApi';

export default function ChallengeScreen({ route }: any) {
  const { exo } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(exo);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getByName(exo);
        setData(response);
        console.log(response[0]);
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
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.toto}>
          <Image
            style={styles.image}
            source={{
              uri: data[0].img,
            }}
            resizeMode='contain'
          />
        </View>

        <View style={styles.totoUn}>
          <Text style={styles.title}>{data[0].nom}</Text>
          <Text style={styles.equipment}>Equipement : haltere barre</Text>
        </View>
        
      </View>


      <View style={styles.containerDescription}>
        <Text style={styles.titleDescription}>Description :</Text>
        <Text>{data[0].description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  toto : {
    width: '30%',
    alignItems: 'center',
  },
  totoUn : {
    width: '70%',
    alignItems: 'center',
  },
  containerDescription: {
    padding: 10,
  },
  titleDescription: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  equipment: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
});
