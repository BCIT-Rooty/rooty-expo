import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Key } from 'react-native';
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
    <KeyboardAvoidingView behaviour="padding" style={{display:"flex", justifyContent:"start", alignItems:"center", height:"100%", paddingTop: 70}}>
    <Input placeholder="number of fake data" value={number} keyboardType="number-pad" textContentType="telephoneNumber" onChangeText={text=> setNumber(text)} marginBottom="20px"/>
    <PurpButton onPress={() => GetAPICards()} title="Get Fake API"/>
    <ScrollView style={{marginTop:50}}>
        {loading && <AnimatedLottieView autoPlay={true} loop={true} ref={lottieRef} style={{width:300, height:300}} source={require('../assets/loading.json')}/>}
        {go === true && cards.map((o,i)=>( <View key={i} style={{marginBottom:30}}>
            {i % 2 === 0 && <Card format="left" url={o.url} title={o.title} description={o.description}/>}
            {i % 2 !== 0 && <Card format="right" url={o.url} title={o.title} description={o.description}/>}
            </View>
        ))}
        {go === false && <AnimatedLottieView autoPlay={true} loop={true} ref={lottieRef} style={{width:300, height:300, paddingTop:30}} source={require('../assets/shiba-sad.json')}/>}
    </ScrollView>
        {toast == "blue" &&  <Toast backgroundColor="#88CDFF" toastText={toastText}/>}
        {toast == "red" &&  <Toast backgroundColor="#FF9788" lottie={require('../assets/error.json')} toastText={toastText}/>}
        {toast == "green" &&  <Toast backgroundColor="#88FF8D" lottie={require('../assets/success.json')} toastText={toastText}/>}
</KeyboardAvoidingView>
  );
}
