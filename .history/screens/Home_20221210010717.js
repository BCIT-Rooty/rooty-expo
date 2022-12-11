import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const [listOfCategories, setListOfCategories] = useState([
    { id: "BroadcastMedia", name: "Broadcast & Media", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/broadcast-500x500.png" },
    { id: "Computing", name: "Computing", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/programming-Small.jpeg" },
    { id: "Marketing", name: "Marketing", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/marketing-500x500.png" },
    { id: "BusinessFinance", name: "Business & Finance", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/business-Small.jpeg" },
    { id: "DigitalArtsDesign", name: "Digital Arts & Design", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/digitalarts-Small.jpeg" },
    { id: "Tutoring", name: "Tutoring", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/tutoring-Small.jpeg" },
  ]);
    const  navigation = useNavigation()

    const SendRoute = (catId) => {
      navigation.navigate(catId)
      console.log("Hello")
    }


  return (
    <Pressable>
    {/* <FlexBox dir="column" key={id} style={{width:165, height:150, borderRadius:5, alignItems:"flex-end", justifyContent:"flex-end" }}>
      <Image style={style} borderTopLeftRadius="5pt" borderTopRightRadius="5pt"source={{uri:image}}></Image>
      <FlexBox border="0" height="49pt" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="#F6F6F9" justifyContent="start">
          <Text size="16px" weight="bold" align="left" borderRadius="15px">{name}</Text>
      </FlexBox>
  </FlexBox> */}
</Pressable>
  );
}
