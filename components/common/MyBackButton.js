import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function MyBackButton() {
  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: "center", minHeight: 50 }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      >
        <Ionicons name="arrow-back" size={25} color="white" />
      </Pressable>
    </View>
  );
}
