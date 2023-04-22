import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "relative",
        flex: 1,
        minHeight: 50,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginHorizontal: 10,
        marginBottom: 10,
      }}
    >
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      >
        <ImageBackground
          source={require("../../assets/avatar.png")}
          style={{ width: 35, height: 35 }}
          imageStyle={{ borderRadius: 25 }}
        />
      </Pressable>
    </View>
  );
}
