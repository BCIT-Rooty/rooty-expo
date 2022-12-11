import { FlexBox } from "./flexbox"
import { Image, Pressable, Text, View } from "react-native"


export default function PostCard({
    url,
    title,
    description,
    ratings
}) {

    return (
        <View style={{width:340, height:165, justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row", shadowOffset:{width:0, height:15}, shadowOpacity:0.4, shadowRadius:5}}>
            <Image style={{width:140,height:165, borderTopLeftRadius: 20,borderBottomLeftRadius: 20}} source={{uri:url}}/>
            <View style={{width:200, height:165, backgroundColor:"white", overflow:"hidden", justifyContent:"space-between", paddingTop:15, paddingLeft:15, paddingBottom:15, paddingRight:15, borderTopRightRadius: 20,borderBottomRightRadius: 20}}>
                <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>{title}</Text>
                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize:14, fontWeight:"500", color:"grey"}}>{ratings}</Text>
                    <Text style={{fontSize:14, fontWeight:"700"}}>{"$" + description}</Text>
                </View>
            </View>
        </View>
    )
  };