import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AuthContext } from "../context/AuthProvider";

const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#383958" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#383958",
        }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={require("../assets/avatar.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#b6b133",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            name of the user
          </Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color="#b6b133" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: "#b6b133",
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
