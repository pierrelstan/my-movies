import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 350,
      }}
    >
      <Text style={{ color: "white" }}>loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
