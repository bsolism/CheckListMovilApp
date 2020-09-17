import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/color";

export default function AppButton({
  title,
  onPress,
  color = "primary",
  height,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], height: height },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: "10%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
