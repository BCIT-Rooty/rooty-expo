import { FlexBox } from "./flexbox"
import { Image, Pressable, Text } from "react-native"


export default function PostCard({
    url,
    title,
    desc
}) {

    return (
        <View style={{width:340, height:140, backgroundColor:"#FF9788", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row"}}>
            <View style={{display:"flex", flexDirection:"row"}}>
                <Image style={{width:115,height:100}} source={{uri:url}}/>
                <View style={{width:160, height:100, marginLeft:20, backgroundColor:"white", overflow:"hidden", paddingTop:10, paddingLeft:10, paddingBottom:10, paddingRight:10}}>
                    <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>{title}</Text>
                    <Text style={{fontSize:14, fontWeight:"500", color:"grey"}}>{description}</Text>
                </View>
            </View>
    </View>
    )
  };