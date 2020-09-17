import React, { useState } from "react";
import { Button, Modal, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import checklistService from "../services/checklistService";
import Screen from "../components/Screen";
import UploadScreen from "./UploadScreen";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  ChecklistCategoryId: Yup.object().required().nullable().label("Category"),
});
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

export default function ItemEditScreen({ navigation }) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (item) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await checklistService.postChecklist(item, (progress) =>
      setProgress(progress)
    );
    console.log(result);

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the Item");
    }
    navigation.navigate(routes.LISTING_DETAILS);
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          name: "",
          price: "",
          description: "",
          ChecklistCategoryId: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="name" placeholder="Name" />

        <Picker
          items={categories}
          name="ChecklistCategoryId"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  padding: 10,
});
