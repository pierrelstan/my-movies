import CustomDrawer from "../components/CustomDrawer";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

const Drawer = createDrawerNavigator();

const PrivateDrawerNavigator = () => {
	return (
		<Drawer.Navigator
			useLegacyImplementation
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerLabelStyle: {
					fontSize: 15
				},
				drawerActiveTintColor: "#b6b133",
				drawerInactiveTintColor: "#fff"
			}}
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Favorites" component={FavoritesScreen} />
		</Drawer.Navigator>
	);
};
export default PrivateDrawerNavigator;
