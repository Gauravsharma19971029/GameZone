import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [reviews, seteviews] = useState([
    {
      title: "A",
      rating: 5,
      body: "A",
      key: "1",
    },
    {
      title: "B",
      rating: 4,
      body: "B",
      key: "2",
    },
    {
      title: "C",
      rating: 4,
      body: "C",
      key: "3",
    },
    {
      title: "D",
      rating: 5,
      body: "D",
      key: "4",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
