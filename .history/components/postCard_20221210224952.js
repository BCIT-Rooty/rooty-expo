import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function PostCard({
    url,
    title,
    description
}) {

    return (
        <View style={{width:340, height:135, backgroundColor:"#FF9788", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row"}}>
            <View style={{display:"flex", flexDirection:"row"}}>
                <Image style={{width:125,height:165}} source={{uri:url}}/>
                <View style={{width:200, height:165, backgroundColor:"white", overflow:"hidden", paddingTop:10, paddingLeft:10, paddingBottom:10, paddingRight:10}}>
                    <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>{title}</Text>
                    {/* <Text style={{fontSize:14, fontWeight:"500", color:"grey"}}>{description}</Text> */}
                </View>
            </View>
    </View>
    )
  };