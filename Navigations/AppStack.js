import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrivateDrawerNavigator from "./PrivateDrawer";
// import LoginScreen from "../screens/LoginScreen";
import PreviewVideoScreen from "../screens/PreviewVideoScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { AuthContext } from "../context/AuthProvider";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function AppStack() {
  const { isLoggedIn, isLoading, setIsLoading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <React.Fragment>
            <Drawer.Screen
              name="PrivateDrawerNavigator"
              component={PrivateDrawerNavigator}
            />
            <Stack.Screen name="PreviewVideo" component={PreviewVideoScreen} />
          </React.Fragment>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
