import styled from 'styled-components/native'

export const FlexBox = styled.View`
    display:flex;
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignItems};
    flex-direction:${props=>props.dir};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding || "0px"};
    min-height: ${props=>props.minHeight};
    max-height: ${props=import { FlexBox } from "./flexbox"
    import { Image, Pressable, Text } from "react-native"
    
    
    export default function CategoryCard({
        key,
        name,
        image,
        onPress=()=>{} 
    }) {
    
        return (
          <Pressable key={key} onPress={onPress} style={{marginHorizontal:10,marginVertical: 15, shadowOffset:{width:0, height:5}, shadowOpacity:0.4, shadowRadius:5}}>
              <FlexBox dir="column" style={{width:155, height:140, borderRadius:5, borderWidth:0, alignItems:"flex-end", justifyContent:"flex-end"}}>
                <Image style={{width:"100%", height:"87%"}} borderTopLeftRadius="5pt" borderTopRightRadius="5pt"source={{uri:image}}></Image>
                <FlexBox border="0" height="49pt" width="100%" borderBottomEndRadius="5pt" borderBottomLeftRadius="5pt" bgColor="white" justifyContent="start" padding="5%">
                    <Text size="16px" weight="bold" align="left" borderRadius="15px">{name}</Text>
                </FlexBox>
            </FlexBox>
          </Pressable>
        )
      };>props.maxHeight};
    background-image: ${props=>props.linearGradient}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition};
    background-size: ${props=>props.bgSize};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    bottom: ${props=>props.bottom};
    border-bottom-style: ${props=>props.borderBottom};
    border-top: ${props=>props.topBorder};
    border-bottom: ${props=>props.bottomBorder};
    color: ${props=>props.color};
    cursor: ${props=>props.cursor};
    max-width: ${props=>props.maxWidth};
    min-width: ${props=>props.minWidth};
    overflow-y: ${props=>props.overflowY};
    overflow-anchor: ${props=>props.overflowA}
`;