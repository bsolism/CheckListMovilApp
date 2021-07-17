import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import CardItem from "../components/CardItem";
import colors from "../config/color";
import checklistService from "../services/checklistService";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Text from "../components/Text";
import useApi from "../hooks/useApi";

export default function LintingItemScreen({ route, navigation }) {
  const listing = route.params;
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadListings();
    });
    return unsubscribe;
  }, []);

  const loadListings = async () => {
    const response = await checklistService.getListings(listing.id);
    setListings(response.data);
    console.log(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>{listings.name}</Text>
      <Button
        title="+"
        color="danger"
        height="5%"
        onPress={() => navigation.navigate(routes.ITEM_EDIT, listing.id)}
      />
      <FlatList
        data={listings.items}
        keyExtractor={(listing) => listing.id.toString()}
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
