import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getByPartBody, getByTarget } from '../_services/muscleJpApi';

export default function SelectExoScreen({ route }: any) {
  const { exo } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getByPartBody(exo);
        setData(response);
        console.log(response[0]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      onPress={() => {
        console.log('toot');
      }}
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
