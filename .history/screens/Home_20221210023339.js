import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
     <View style={{borderWidth:0, width:"100%", padding:"20px", height:"100%", display:"flex", justifyContent:"center"}}>
          <View style={{width:"100%", justifyContent:"start", alignItems:"flex-start", borderWidth:0, paddingTop:50, paddingRight:0, paddingBottom:7, paddingLeft:20, minHeight:100}}>
            <Text>Search</Text>
          </View>
          <View style={{flexWrap:"wrap", flexDirection:"row", borderWidth:"0px"}} >
          {listOfCategories.map((category) => (
              <CategoryCard key={category.id} name={category.name} image={category.image}></CategoryCard>
             
            ))
          }
          </View>
      </View>
  );
}
