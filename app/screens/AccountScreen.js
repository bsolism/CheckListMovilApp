import React from "react";
import { StyleSheet, View, FlatList, NativeModules } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/color";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import authService from "../services/authService";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Message",
  },
];

export default function AccountScreen({ navigation }) {

  const logout = async () => {
    await authService.logout();
    NativeModules.DevSettings.reload();
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Bern"
          subTitle="Programing with Bern"
          image={require("../assets/ber.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
