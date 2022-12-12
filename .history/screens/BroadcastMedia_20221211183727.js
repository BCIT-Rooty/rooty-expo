import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/postCard';
import BackButton from '../components/backButton';
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

    const GetAPICards = () => {
      // await means please wait for the line to finish before moving onto the next line

      //.then .catch
      setGo("ok")
      setLoading(true)
      // await axios.get("https://fakerapi.it/api/v1/images?_quantity=10")
      axios.get("https://fakerapi.it/api/v1/products?_price_max=120&_quantity=6&_price_min=40&_type=architecture")
              .then((result)=>{
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
                  console.log(error.message)
              })
      // setLoading(false)
     
    }


  return ( 
    <KeyboardAvoidingView behaviour="padding" style={{display:"flex", justifyContent:"start", alignItems:"start", height:"100%", paddingTop: 50}}>
      <Image style={{width:"100%", height:300}} source={{uri:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/broadcast-500x500.png"}}></Image>
      <View style={{width:"100%", height:300, backgroundColor:"rgba(79, 77, 176, 0.7)", position:"absolute", top: 50}}></View>
      <BackButton style={{position:"absolute", top:60, left:20, transform: [{ rotateY: "45deg"}, {rotateX: "180deg"}]}} onPress={hey}></BackButton>
      <Text style={{position:"absolute", top:300, fontSize:24, color:"white", fontWeight:"800", width:"100%", textAlign:"center"}}>Broadcast & Media</Text>
    <Button onPress={() => GetAPICards()} title="Get Fake API"/>
    <ScrollView contentContainerStyle={{display:"flex", justifyContent:"start", alignItems:"center",}} style={{marginTop:50, width:"100%",}}>
        {go === true && cards.map((o,i)=>( 
          <View key={i} style={{marginBottom:30}}>
            <PostCard url={o.image} title={o.name} description={o.price} ratings={o.categories[0] + "/10 Stars"}/>
          </View>
        ))}
    </ScrollView>
</KeyboardAvoidingView>
  );
}
