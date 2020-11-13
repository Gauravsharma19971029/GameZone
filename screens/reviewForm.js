import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button"

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema = {reviewSchema}
        onSubmit={(values, action) => {
            console.log("submit")
          addReview(values);
          action.resetForm();
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur = {formikProps.handleBlur('title')}
            />
            <Text style = {globalStyles.errorText}>{ formikProps.touched.title &&formikProps.errors.title}</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur = {formikProps.handleBlur('body')}
            />
            <Text style = {globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body}</Text>
            <TextInput
              multiline minHeight = {60}
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur = {formikProps.handleBlur('rating')}
            />
            <Text style = {globalStyles.errorText}>{ formikProps.touched.rating &&formikProps.errors.rating}</Text>
            
            <FlatButton text = 'submit'  onPress={formikProps.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
}
