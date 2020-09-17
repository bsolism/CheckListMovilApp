import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingItemScreen from "../screens/ListingItemScreen";
import ItemEditScreen from "../screens/ItemEditScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="ListingItem" component={ListingItemScreen} />
    <Stack.Screen name="ItemEdit" component={ItemEditScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
