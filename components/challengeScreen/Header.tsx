import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header({ data }: any) { 

  const renderEquipment = (equipment: any) => {
    if (Array.isArray(equipment)) {
      return (
        <View style={styles.equipment}>
          {equipment.map((equip) => (
            <Text style={styles.equipment} key={Math.random()}>
              {equip}{' '}
            </Text>
          ))}
        </View>
      );
    } else {
      return <Text style={styles.equipment}>{equipment}</Text>;
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.toto}>
        <Image
          style={styles.image}
          source={{
            uri: data[0].gifUrl,
          }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.totoUn}>
        <Text style={styles.title}>{data[0].name}</Text>
            {/* <Text style={styles.titleDescription}>Equipement : </Text>
            {renderEquipment(data[0].equipement)} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  toto: {
    width: '30%',
    alignItems: 'center',
  },
  totoUn: {
    width: '70%',
    alignItems: 'center',
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
    flexDirection: 'row',
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
