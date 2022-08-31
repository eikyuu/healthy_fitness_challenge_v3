import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function AnotherScreen() {


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('challenge')
      if (jsonValue !== null) {
        // value previously stored
        console.log(jsonValue);
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  

useEffect(() => {
  getData();
}, [])

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}