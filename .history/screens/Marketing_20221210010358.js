import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'

export default function Marketing() {
    const  navigation = useNavigation()


  return (   <View>
    <Text>Hello</Text>
    <Button onPress={hey} title="PressHere"></Button>
</View>
  );
}
