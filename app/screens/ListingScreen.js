import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/color";
import checklistService from "../services/checklistService";
const listings = [
  {
    id: 1,
    title: "Read jacket for sale",
    price: 100,
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
  },
];

export default function LintingsScreen({ navigation }) {
  

  useEffect(() => {
    load();
  },[]);

  const load = async () => {
    const checklist = await checklistService.getChecklist();
    console.log(checklist.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
