// import styled from "styled-components/native";
// import { Text } from 'react-native';

// export const TextContain = styled.Text`
//     display:flex;
//     width: ${props=>props.width};
//     height: ${props=>props.height};
//     font-size: ${props=>props.fontSize};
//     font-weight: ${props=>props.fontWeight};
//     text-align: ${props=>props.textAlign};
//     color: ${props=>props.textColor};
//     padding: ${props=>props.padding};
//     background-color: ${props=>props.bgColor};
//     text-decoration: ${props=>props.textDecor};
//     line-height: normal;
//     border-bottom: ${props=>props.borderBottom};
//     justify-content: ${props=>props.justifyContent};
//     max-width: ${props=>props.maxWidth};
//     border-radius:${props=>props.borderRadius};
// `

// export default function TextBox({
//     txt='Text Here',
//     size="16px",
//     weight="400",
//     align="left",
//     color="black",
//     padding="0px",
//     maxWidth="900px",
//     value= "0%",
//     bgColor="transparent",
//     textDecor="none",
//     width= "0%",
//     height= "0%",
//     borderBottom = "0%",
//     justifyContent= "0%",
//     onChangingTheText = () => {},
//     onClick=()=>{},
//     borderRadius= "0%",
// }){

//     return (
//     <TextContain onChange={(e) => onChangingTheText(e.target.innerText)} onClick={onClick} width={width} maxWidth={maxWidth} height={height} fontSize={size} fontWeight={weight} textAlign={align} textColor={color} padding={padding} bgColor={bgColor} textDecor={textDecor} borderBottom={borderBottom} justifyContent={justifyContent} borderRadius={borderRadius}>
//         {txt}
//     </TextContain>
//     )
// }