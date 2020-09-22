import React from "react";
import Constant from "expo-constants";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
