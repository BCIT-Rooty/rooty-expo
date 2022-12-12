import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function CategoryCard({
    key,
    name,
    image,
    onPress=()=>{} 
}) {

    return (
      <Pressable onPress={onPress} style={{width:"42%", height:140,marginHorizontal:10,marginVertical: 25, shadowOffset:{width:0, height:5}, shadowOpacity:0.4, shadowRadius:5}}>
          <FlexBox dir="column" style={{borderRadius:5, borderWidth:0, alignItems:"flex-end", justifyContent:"flex-end"}}>
            <Image style={{width:"100%", height:"87%"}} borderTopLeftRadius="5pt" borderTopRightRadius="5pt"source={{uri:image}}></Image>
            {/* <FlexBox border="0" height="49pt" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="white" justifyContent="start" padding="5%"> */}
            <View style={{borderWidth:0, height:49, width:"100%", borderBottomEndRadius:10, borderBottomLeftRadius:10, backgroundColour:"white", justifyContent:"start", padding:"5%"}}>
                <Text style={{fontSize:"16px", fontWeight:"600", textAlign:"left"}}>{name}</Text>

            </View>
            {/* </FlexBox> */}
        </FlexBox>
      </Pressable>
    )
  };