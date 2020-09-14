import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import CardItem from "../components/CardItem";
import colors from "../config/color";
import checklistService from "../services/checklistService";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Text from "../components/Text";

export default function LintingItemScreen({ route, navigation }) {
  const listing = route.params;

  console.log(listing.items);
  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>{}</Text>
      <FlatList
        data={listing.items}
        keyExtractor = {(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.name}
            price={item.price}
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
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
