import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  // const [listOfCategories, setListOfCategories] = useState([
  //   { id: "BroadcastMedia", name: "Broadcast & Media", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/broadcast-500x500.png" },
  //   { id: "Computing", name: "Computing", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/programming-Small.jpeg" },
  //   { id: "Marketing", name: "Marketing", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/marketing-500x500.png" },
  //   { id: "BusinessFinance", name: "Business & Finance", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/business-Small.jpeg" },
  //   { id: "DigitalArtsDesign", name: "Digital Arts & Design", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/digitalarts-Small.jpeg" },
  //   { id: "Tutoring", name: "Tutoring", image:"https://starbooks.ca/wk06website/wp-content/uploads/2022/12/tutoring-Small.jpeg" },
  // ]);
    const  navigation = useNavigation()

    // const SendRoute = (catId) => {
    //   navigation.navigate(catId)
    //   console.log("Hello")
    // }


  return (
     <View style={{border:"0px", width:"100%", padding:"20px", height:"100%"}}>
        <View style={{width:"100%", justifyContent:"start", alignItems:"flex-start", border:"0px", padding:"50px 0 7px 20px", minHeight:"100px"}}>
            <TextBox txt="Search" size="24px" weight="bold"></TextBox>
          </View>
          <FlexBox flexWrap="wrap" dir="row" filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))" border="0px">
          {/* {listOfCategories.map((category) => (
              // <CategoryCard onPress={SendRoute(category.id)} style={{width:"100%", height:"67%"}} key={category.id} name={category.name} image={category.image}></CategoryCard>
             
            )) */}
             <CategoryCard></CategoryCard>
          {/* } */}
          </FlexBox>
      </View>
  );
}
