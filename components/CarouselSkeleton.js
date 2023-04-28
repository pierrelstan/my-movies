import React from "react";
import { View } from "react-native";

export default function CarouselSkeleton() {
  return (
    <View
      style={{
        backgroundColor: "#383958",
        highlightColor: "#666",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <View
          style={{
            width: 220,
            height: 350,
          }}
        />
        <View
          style={{
            width: 220,
            height: 350,
          }}
        />
      </View>
    </View>
  );
}
