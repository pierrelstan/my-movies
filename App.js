import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AppStack from "./Navigations/AppStack";
import { Text, View } from "react-native";
import AppContext from "./context/AppContext";

// import { LogBox } from "react-native";
// import ignoreWarnings from "ignore-warnings";

// ignoreWarnings("warn", ["ViewPropTypes", "[react-native-gesture-handler]"]);

// LogBox.ignoreLogs([
//   "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
//   "NativeBase: The contrast ratio of",
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

export default function App() {
  const [favorites, setFavorites] = useState({ favorites: [], ids: [] });

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ favorites, setFavorites }}>
        <AppStack />
      </AppContext.Provider>
    </Provider>
  );
}
