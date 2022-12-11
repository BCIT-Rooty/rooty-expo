import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

export default function BroadcastMedia() {
    const  navigation = useNavigation()
    const hey = () => {
      navigation.navigate('Home')
    }

    const GetAPICards = async () => {
      // await means please wait for the line to finish before moving onto the next line

      //.then .catch
      // setGo("ok")
      // setLoading(true)
      await axios.get("https://fakerapi.it/api/v1/images?_quantity=10")
              .then((result)=>{
                  if(result.data.data == 0 || number == "" || number == "0"){
                      throw new Error();
                  }
                  setGo(true)
                  setCards([
                    ...result.data.data
                  ])
                  showToast("green")
                  showToastText("Successfully retrieved data!")
                  console.log(result.data.data)
              })
              .catch((error)=>{
                  // setGo(false)
                  // showToastText("Failed getting data")
                  // showToast("red")
                  console.log(error)
              })
      // setLoading(false)
     
    }


  return ( 
  <View>
          <Text>Hello</Text>
          <Button onPress={hey} title="PressHere"></Button>
      </View>
  );
}
