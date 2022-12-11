import { FlexBox } from "./flexbox"
import { Image, Text } from "react-native"


export default function CategoryCard({
    id,
    name,
    image,
    style
}) {

    return (
        <FlexBox dir="row" key={id} width="165px" height="150px" borderRadius="15px" margin="15px 10px 15px 10px" alignItems="flex-end" justifyContent="flex-end">
            <Image style={style} borderTopLeftRadius="15px" borderTopRightRadius="15px"source={{uri:image}}></Image>
            <FlexBox border="0" height="49px" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="#F6F6F9" justifyContent="start">
                <Text size="16px" weight="bold" align="left" borderRadius="15px">{name}</Text>
            </FlexBox>
        </FlexBox>
    )
  };