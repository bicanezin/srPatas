import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Establishment from "../screens/Establishment";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
    // linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false, headerLeft: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Establishment" component={Establishment} />
    </Stack.Navigator>
  );
}
