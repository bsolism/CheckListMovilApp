import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/color";
import checklistService from "../services/checklistService";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

export default function LintingsScreen({ navigation }) {
  const getListingsApi = useApi(checklistService.getChecklist);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListingsApi.request();
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              onPress={() => navigation.navigate(routes.LISTING_ITEM, item)}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
