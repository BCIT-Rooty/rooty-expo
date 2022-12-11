import { FlexBox } from "./flexbox"
import { Image, Text } from "react-native"


export default function CategoryCard({
    id,
    name,
    image,
    style
}) {

    return (
        
        <FlexBox dir="row" key={id} width="65pt" height="50pt" borderRadius="5pt" margin="15px 10px 15px 10px" alignItems="flex-end" justifyContent="flex-end">
            <Image style={style} borderTopLeftRadius="5pt" borderTopRightRadius="5pt"source={{uri:image}}></Image>
            <FlexBox border="0" height="49pt" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="#F6F6F9" justifyContent="start">
                <Text size="16px" weight="bold" align="left" borderRadius="15px">{name}</Text>
            </FlexBox>
        </FlexBox>
    )
  };