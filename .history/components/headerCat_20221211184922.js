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

export default function HeaderCat() {
    const  navigation = useNavigation()
    const hey = () => {
      navigation.navigate('Home')
    }



  return ( 
    <View style={{display:"flex", justifyContent:"start", alignItems:"start", height:350}}>
      <Image style={{width:200, height:300}} source={{uri:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/broadcast-500x500.png"}}></Image>
      {/* <View style={{width:"100%", height:300, backgroundColor:"rgba(79, 77, 176, 0.7)", position:"absolute", top: 50}}></View> */}
      <BackButton style={{position:"absolute", top:60, left:20}} onPress={hey}></BackButton>
      <Text style={{position:"absolute", top:300, fontSize:24, color:"white", fontWeight:"800", width:"100%", textAlign:"center"}}>Broadcast & Media</Text>
    </View>
  );
}
