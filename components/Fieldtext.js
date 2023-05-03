import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function FieldText({
  name,
  onChangeText,
  onSubmitEditing,
  value,
  defaultValue,
}) {
  return (
    <TextInput
      name={name}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={name === "password" ? true : false}
      defaultValue={defaultValue}
      style={[
        styles.input,
        { color: styles.color.primary, backgroundColor: styles.color.main },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  color: {
    main: "#383958",
    primary: "#fff",
    secondary: "#b6b133",
  },

  input: {
    borderRadius: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
