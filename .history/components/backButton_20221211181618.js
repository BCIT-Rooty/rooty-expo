import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function BackButton({
    onPress = () => {}
}) {

    return (
        <Pressable onPress={onPress}>
            <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/93/93634.png"}}></Image>
        </Pressable>
    )
  };