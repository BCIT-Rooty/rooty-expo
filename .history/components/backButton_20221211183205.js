import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function BackButton({
    onPress = () => {},
    style
}) {

    return (
        <Pressable onPress={onPress} style={style}>
            <Image style={{width:50, height:50, transform: [{ skewX: "45deg" }]}} source={{uri:"https://images.squarespace-cdn.com/content/v1/5a593284a8b2b0e04f3568f0/1534374735178-B3SM4ABNOKKQSSU8NYHS/arrow-down.png"}}></Image>
        </Pressable>
    )
  };