import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./src/config/ReactotronConfig";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { persistor, store } from "./src/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor={"white"} />
          <Navigation colorScheme={colorScheme} />
        </PersistGate>
      </Provider>
    );
  }
}
