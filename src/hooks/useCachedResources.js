import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          "notoSans-black": require("../../assets/fonts/NotoSans-Black.ttf"),
          "notoSans-bold": require("../../assets/fonts/NotoSans-Bold.ttf"),
          "notoSans-italic": require("../../assets/fonts/NotoSans-Italic.ttf"),
          "notoSans-light": require("../../assets/fonts/NotoSans-Light.ttf"),
          "notoSans-medium": require("../../assets/fonts/NotoSans-Medium.ttf"),
          "notoSans-regular": require("../../assets/fonts/NotoSans-Regular.ttf"),
          "notoSans-thin": require("../../assets/fonts/NotoSans-Thin.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
