import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Button({ text }) {
  return (
    <Text
      style={[
        styles.button,
        {
          color: styles.color.secondary,
          backgroundColor: text === "Login" ? "#292A40" : styles.color.main,
        },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  color: {
    main: "#383958",
    primary: "#fff",
    secondary: "#b6b133",
  },
  button: {
    width: "100%",
    // height: 40,
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 16,

    borderRadius: 10,
  },
});
