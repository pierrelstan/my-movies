import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AppStack from "./Navigations/AppStack";
import AppContext from "./context/AppContext";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./context/AuthProvider";

export default function App() {
  const [favorites, setFavorites] = useState({ favorites: [], ids: [] });

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContext.Provider value={{ favorites, setFavorites }}>
          <AppStack />
        </AppContext.Provider>
        <StatusBar />
      </AuthProvider>
    </Provider>
  );
}
