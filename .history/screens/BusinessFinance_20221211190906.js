import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/postCard';
import BackButton from '../components/backButton';
import axios from 'axios';
import HeaderCat from '../components/headerCat';
import LottieView from 'lottie-react-native';

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
      await axios.get("https://fakerapi.it/api/v1/products?_price_max=100&_quantity=8&_price_min=40&_type=architecture")
              .then((result)=>{
                  setCards([
                    ...result.data.data
                  ])
                  setGo(true)
              })
              .catch((error)=>{
                  setGo(false)
                  console.log(error)
              })
      setLoading(false)
    }

    useEffect(() => {
      // write your code here, it's like componentWillMount
      GetAPICards();
  }, [])


  return ( 
    <KeyboardAvoidingView style={{display:"flex", justifyContent:"start", alignItems:"start", height:"100%"}}>
      <HeaderCat txt='Business & Finance'></HeaderCat>
      {loading && <LottieView autoPlay style={{width:70, height:70, paddingLeft: "20%"}} source={require('../assets/unlock.json')}/>}
      <ScrollView contentContainerStyle={{display:"flex", justifyContent:"start", alignItems:"center",}} style={{marginTop:50, width:"100%",}}>
          {go === true && cards.map((o,i)=>( 
            <View key={i} style={{marginBottom:30}}>
              <PostCard url={o.image} title={o.name} description={o.price} ratings={o.categories[0] + "/10 Stars"}/>
            </View>
          ))}
          {!go && <View>
            <Text>There Seems to be a problem</Text>
          </View>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
