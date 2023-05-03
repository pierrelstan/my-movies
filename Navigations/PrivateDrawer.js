import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import CustomDrawer from "../components/CustomDrawer";
import MyList from "../screens/MyListScreen";

const Drawer = createDrawerNavigator();

const PrivateDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 15,
        },
        drawerActiveTintColor: "#b6b133",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favorites" component={MyList} />
    </Drawer.Navigator>
  );
};
export default PrivateDrawerNavigator;
