import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../themes/colors';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface challenge {
  id: string;
  challengeName: string;
  nameExo: string;
  durationChallenge: string;
  firstRepetition: string;
  additionalDuration: string;
  days: string;
}

interface data {
  challengeName: string;
  durationChallenge: string;
  firstRepetition: string;
  additionalDuration: string;
}

export default function Form({ name }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      challengeName: '',
      durationChallenge: '',
      firstRepetition: '',
      additionalDuration: '',
    },
  });
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [challenges, setChallenges] = useState<challenge[]>([]);

  useEffect(() => {
    getData();
    return () => {
      setChallenges([]);
    };
  }, []);

  useEffect(() => {
    storeData(challenges);
  }, [challenges]);

  const onSubmit = async (data: data) => {
    const challenge = {
      id: Math.random().toString(36).substr(2, 9),
      challengeName: data.challengeName,
      nameExo: name,
      durationChallenge: data.durationChallenge,
      firstRepetition: data.firstRepetition,
      additionalDuration: data.additionalDuration,
      days: '0',
    };
    setChallenges([...challenges, challenge]);
    navigate('MyChallenge');
  };

  const storeData = async (value: challenge[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('challenge', jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de votre challenge</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='challengeName'
      />

      {errors.challengeName && (
        <Text style={styles.textError}>Champs requis.</Text>
      )}

      <Text style={styles.label}>Durée du challenge</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType='numeric'
          />
        )}
        name='durationChallenge'
      />

      {errors.durationChallenge && (
        <Text style={styles.textError}>Champs requis.</Text>
      )}

      <Text style={styles.label}>Premiere répétition</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType='numeric'
          />
        )}
        name='firstRepetition'
      />

      {errors.durationChallenge && (
        <Text style={styles.textError}>Champs requis.</Text>
      )}

      <Text style={styles.label}>Répétitions en plus par jours</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType='numeric'
          />
        )}
        name='additionalDuration'
      />

      {errors.additionalDuration && (
        <Text style={styles.textError}>Champs requis.</Text>
      )}

      <View style={styles.button}>
        <Button
          color='white'
          title='Créer le challenge'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    marginBottom: 8,
  },
  textError: {
    color: 'red',
    marginBottom: 8,
  },
  button: {
    color: 'white',
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});
