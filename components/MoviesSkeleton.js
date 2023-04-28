import React from 'react';
import { View, Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function MoviesSkeleton() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
        <View
          style={{
            width: Math.round(screenWidth) >= 737 ? 300 : 100,
            height: Math.round(screenWidth) >= 737 ? 450 : 150,
            margin: 5,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#383958",
    highlightColor: "#666",
  },
});
