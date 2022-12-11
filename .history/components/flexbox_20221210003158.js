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
    margin: ${props=>props.margin || "0px"};
    padding: ${props=>props.padding || "0px"};
    min-height: ${props=>props.minHeight};
    max-height: ${props=>props.maxHeight};
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