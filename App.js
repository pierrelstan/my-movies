import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AppStack from "./Navigations/AppStack";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./context/AuthProvider";
import FavoritesProvider from "./context/FavoritesProvider";

export default function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<FavoritesProvider>
					<AppStack />
				</FavoritesProvider>
				<StatusBar />
			</AuthProvider>
		</Provider>
	);
}
