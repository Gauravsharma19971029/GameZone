import React from "react";
import { View, Text, StyleSheet, Button,Image } from "react-native";
import { globalStyles,images } from "../styles/global";
import Card from "../shared/card";

export default function reviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  const image = "../assets/rating-" + rating + ".png";
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("body")}
        </Text>
        <View style={styles.rating}>
          <Text>Gamezone rating: </Text>
          <Image source={images.rating[rating]} ></Image>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:"#eee"
  }

});
