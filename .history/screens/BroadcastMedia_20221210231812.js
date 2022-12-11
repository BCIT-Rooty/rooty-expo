import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/postCard';
import axios from 'axios';

export default function BroadcastMedia() {
    const  navigation = useNavigation()
    const hey = () => {
      navigation.navigate('Home')
    }
    const [go, setGo] = useState("ok")
    const [number, setNumber] = useState("")
    const [cards, setCards] = useState([]);
    const [toast, showToast] = useState("blue")
    const [toastText, showToastText] = useState("Enter a number")
    const [loading, setLoading] = useState(false)

    const GetAPICards = async () => {
      // await means please wait for the line to finish before moving onto the next line

      //.then .catch
      setGo("ok")
      setLoading(true)
      // await axios.get("https://fakerapi.it/api/v1/images?_quantity=10")
      await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
              .then((result)=>{
                  // setGo(true)
                  // setCards([
                  //   ...result.data.data
                  // ])
                  // showToast("green")
                  // showToastText("Successfully retrieved data!")
                  console.log(result)
              })
              .catch((error)=>{
                  // setGo(false)
                  // showToastText("Failed getting data")
                  // showToast("red")
                  console.log(error.message)
              })
      // setLoading(false)
     
    }


  return ( 
    <KeyboardAvoidingView behaviour="padding" style={{display:"flex", justifyContent:"start", alignItems:"center", height:"100%", paddingTop: 70}}>
    <Button onPress={() => GetAPICards()} title="Get Fake API"/>
    <ScrollView style={{marginTop:50}}>
        {go === true && cards.map((o,i)=>( 
          <View key={i} style={{marginBottom:30}}>
            <PostCard url={o.url} title={o.title} description={o.description}/>
          </View>
        ))}
    </ScrollView>
</KeyboardAvoidingView>
  );
}
