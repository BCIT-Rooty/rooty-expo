import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function BackButton({
    onPress = () => {},
    style
}) {

    return (
        <Pressable onPress={onPress} style={style}>
            <Image style={{width:100, height:100}} source={{uri:"https://cdn-icons-png.flaticon.com/512/93/93634.png"}}></Image>
        </Pressable>
    )
  };