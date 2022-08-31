import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../themes/colors';

export default function Form({name}: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      challengeName: '',
      durationChallenge: '',
      additionalChallenge: '',
    },
  });

  //add to array of challenges
  //recuperer les anciens challenges et ajouter le nouveau challenge
  const onSubmit = (data: any) => {
    console.log(data);
    const challenge = {
      id: Math.random().toString(36).substr(2, 9),
      challenge :name,
      name: data.challengeName,
      duration: data.durationChallenge,
      additional: data.additionalChallenge,
    };
    storeData(challenge);
  };

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('challenge', jsonValue);
    } catch (e) {
      // saving error
    }
  }



  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nom de votre challenge</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name='challengeName'
      />

      {errors.challengeName && <Text style={styles.textError}>Champs requis.</Text>}

      <Text style={styles.label}>Durée du challenge</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} keyboardType="numeric"/>
        )}
        name='durationChallenge'
      />

      {errors.durationChallenge && <Text style={styles.textError}>Champs requis.</Text>}

      <Text style={styles.label}>Répétitions en plus par jours</Text>     
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} keyboardType="numeric"/>
        )}
        name='additionalChallenge'
      />

      {errors.additionalChallenge && <Text style={styles.textError}>Champs requis.</Text>}

      <View style={styles.button}>
        <Button color="white" title='Créer le challenge' onPress={handleSubmit(onSubmit)} />
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
