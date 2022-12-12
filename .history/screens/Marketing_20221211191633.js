import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/postCard';
import axios from 'axios';
import HeaderCat from '../components/headerCat';
import LottieView from 'lottie-react-native';

export default function BusinessFinance() {
    const [go, setGo] = useState("ok")
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false)

    const GetAPICards = async () => {
      // await means please wait for the line to finish before moving onto the next line

      //.then .catch
      setGo("ok")
      setLoading(true)
      await axios.get("https://fakerapi.it/api/v1/products?_price_max=200&_quantity=5&_price_min=40&_type=people")
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
      <HeaderCat txt='Marketing' url='https://starbooks.ca/wk06website/wp-content/uploads/2022/12/marketing-500x500.png'></HeaderCat>
      {loading && <LottieView autoPlay style={{width:70, height:70, paddingLeft: "20%"}} source={require('../assets/unlock.json')}/>}
      <ScrollView contentContainerStyle={{display:"flex", justifyContent:"start", alignItems:"center"}} style={{marginTop:50, width:"100%"}}>
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
