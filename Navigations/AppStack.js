import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ActivityIndicator, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrivateDrawerNavigator from "./PrivateDrawer";
import LoginScreen from "../screens/LoginScreen";
import PreviewVideoScreen from "../screens/PreviewVideoScreen";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {userToken == null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ setUserToken }}
            options={{
              headerShown: false,
            }}
          />
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
