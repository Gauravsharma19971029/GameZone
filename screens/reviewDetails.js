import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from "../shared/card";



export default function reviewDetails({navigation}) {
    return (
        <View style = {globalStyles.container}>
            <Card>
            <Text style = {globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style = {globalStyles.titleText}>{navigation.getParam('body')}</Text>
            <Text style = {globalStyles.titleText}>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }

})
