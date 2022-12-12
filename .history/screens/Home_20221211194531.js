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
    }


  return (
     <View style={{borderWidth:0, width:"100%", height:"100%", backgroundColor:"#F8F6F2"}}>
          <View style={{width:"100%", justifyContent:"flex-end", alignItems:"flex-start", paddingTop:50, paddingLeft:20, paddingBottom:20, minHeight:160, borderBottomWidth: 1, borderBottomColor: 'grey', marginBottom:20}}>
            <Text style={{fontSize:24, fontWeight:"700"}}>Search</Text>
          </View>
          <View style={{flexWrap:"wrap", flexDirection:"row", borderWidth:"0px", display:"flex", justifyContent:"center", paddingTop:20}} >
          {listOfCategories.map((category, index) => (
             <View key={index} style={{marginBottom:30}}>
              <CategoryCard onPress={()=>{SendRoute(category.id)}} name={category.name} image={category.image}/>
            </View>
            ))
          }
          </View>
      </View>
  );
}
