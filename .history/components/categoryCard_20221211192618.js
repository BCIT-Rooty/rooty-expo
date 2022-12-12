import { FlexBox } from "./flexbox"
import { Image, Pressable, Text } from "react-native"


export default function CategoryCard({
    key,
    name,
    image,
    onPress=()=>{} 
}) {

    return (
      <Pressable key={key} onPress={onPress} style={{marginHorizontal:10,marginVertical: 15, shadowOffset:{width:0, height:5}, shadowOpacity:0.4, shadowRadius:5}}>
          <FlexBox dir="column" style={{width:"80%", height:140, borderRadius:5, borderWidth:0, alignItems:"flex-end", justifyContent:"flex-end"}}>
            <Image style={{width:"100%", height:"87%"}} borderTopLeftRadius="5pt" borderTopRightRadius="5pt"source={{uri:image}}></Image>
            <FlexBox border="0" height="49pt" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="white" justifyContent="start" padding="5%">
                <Text style={{fontSize:"16px", fontWeight:"800", textAlign:"left"}}>{name}</Text>
            </FlexBox>
        </FlexBox>
      </Pressable>
    )
  };