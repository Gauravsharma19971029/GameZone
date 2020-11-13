import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
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

  const [modalOpen, setModalOpen] = useState(false);

  const getKey = () => {
    const reviewKeys = Object.keys(reviews);
    let sum = 1;
    for (let key of reviewKeys) {
      sum += parseInt(reviews[key].key);
    }
    sum++
    return sum.toString();
  };


  const addReview = (review) => {
      console.log("add")
      review.key = getKey();
      setReviews((prevReviews) => {
        return [review,...prevReviews]
      })
      setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress = { Keyboard.dismiss    }>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          ></MaterialIcons>
          <ReviewForm addReview = {addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
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
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
