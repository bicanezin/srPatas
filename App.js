import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Sentry from "sentry-expo";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  Sentry.init({
    dsn:
      "https://255c4d4ec5fb49acaf88d985154dab7b@o440198.ingest.sentry.io/5408391",
    enableInExpoDevelopment: true,
    debug: true,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
