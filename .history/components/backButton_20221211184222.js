import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function BackButton({
    onPress = () => {},
    style
}) {

    return (
        <Pressable onPress={onPress} style={style}>
            <View style={{width:50, height:50, borderRadius:25, backgroundColor:"white"}}></View>
            <Image style={{width:50, height:50, position:"absolute"}} source={{uri:"https://cdn-icons-png.flaticon.com/512/93/93634.png"}}></Image>
        </Pressable>
    )
  };