import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import SearchStackNavigation from "./SearchStackNavigation";
import HomeScreen from "../screens/HomeScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import MyList from "../screens/MyListScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#444",
        inactiveTintColor: "#B6B133",
        inactiveBackgroundColor: "#444",
        showLabel: false,
        tabStyle: {
          backgroundColor: "#383958",
          marginTop: -1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigation}
        options={{
          headerShown: false,
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ListItems"
        component={MyList}
        options={{
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
